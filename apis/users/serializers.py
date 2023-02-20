from django.apps import apps
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers
from rest_framework_simplejwt import serializers as jwt_serializers
from rest_framework_simplejwt.settings import api_settings as jwt_settings
from rest_framework_simplejwt.tokens import RefreshToken
from teams.serializers import TeamSerializer

Team = apps.get_model("teams", "Team")
Prediction = apps.get_model("predictions", "Prediction")


class TokenObtainPairSerializer(jwt_serializers.TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Custom claims
        token["name"] = user.name
        return token

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data["refresh"] = str(refresh)
        data["refresh_expires"] = refresh["exp"]
        data["access"] = str(refresh.access_token)
        data["access_expires"] = refresh.access_token["exp"]

        return data


class TokenRefreshSerializer(serializers.Serializer):
    # Instead of inputting the refresh token from the HTTP body, we pull it
    # from the cookie

    def get_token_from_cookie(self):
        request = self.context["request"]
        return request.COOKIES.get(settings.JWT_COOKIE_NAME)

    def validate(self, attrs):

        token = self.get_token_from_cookie()
        if token is None:
            raise serializers.ValidationError("No refresh token cookie found")

        refresh = RefreshToken(token)

        data = {
            "access": str(refresh.access_token),
            "access_expires": refresh.access_token["exp"],
        }

        if jwt_settings.BLACKLIST_AFTER_ROTATION:
            try:
                # Attempt to blacklist the given refresh token
                refresh.blacklist()
            except AttributeError:
                # If blacklist app not installed, `blacklist` method will
                # not be present
                pass

        refresh.set_jti()
        refresh.set_exp()

        data["refresh"] = str(refresh)
        data["refresh_expires"] = refresh["exp"]

        return data

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = (
            "id",
            "name",
            "email",
        )

class UserAllInfoSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    ipl_winner = serializers.CharField(write_only=True)
    winner = TeamSerializer(read_only=True)
    form = serializers.ReadOnlyField()

    class Meta:
        model = get_user_model()
        fields = (
            "id",
            "name",
            "is_site_admin",
            "email",
            "ipl_winner",
            "winner",
            "doubles",
            "amount",
            "password",
            "password2",
            'stats',
            "form",
        )
        extra_kwargs = {
            "id": {"read_only": True},
            "name": {"required": True},
        }

    def validate_email(self, email):
        if get_user_model().objects.filter(email=email).exists():
            raise serializers.ValidationError(_("Email already registered"))
        return email

    def validate_password(self, password):
        validate_password(password)
        return password

    def validate_name(self, name):
        if not name:
            raise serializers.ValidationError(_("Name is required"))
        return name

    def validate_ipl_winner(self, value):
        if not value:
            raise serializers.ValidationError(_("IPL Winner Prediction is required"))
        team = Team.objects.get_object_or_none(shortname=value)
        if not team:
            raise serializers.ValidationError(_("IPL Winner Prediction is invalid"))
        return team

    def validate(self, data):
        if data["password"] != data["password2"]:
            raise serializers.ValidationError(_("The two password fields didn't match"))
        return data

    def create(self, validated_data):
        validated_data.pop("password2")
        team = validated_data.pop("ipl_winner")
        user = get_user_model().objects.create_user(winner=team,**validated_data)
        Prediction.objects.create(user=user, team=team, amount=500)
        return user

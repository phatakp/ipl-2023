import { useAuthPanelContext } from "../../context/AuthPanelContext";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const FormContainer = () => {
    const { loginPage } = useAuthPanelContext();
    return (
        <div className="text-center mx-auto w-full z-50 p-4">
            {loginPage ? <LoginForm /> : <RegisterForm />}
        </div>
    );
};

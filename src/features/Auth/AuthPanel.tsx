import { Link } from "react-router-dom";
import { useAuthPanelContext } from "~/context/AuthPanelContext";

export const AuthPanel = () => {
    const { loginPage, setPagetoLogin, setPagetoRegister } =
        useAuthPanelContext();
    return (
        <div className="p-4 md:p-8 z-10">
            <div className="grid grid-cols-2 md:grid-cols-1">
                <h3 className="text-3xl col-span-2 md:col-span-1 text-left text-white font-bold">
                    {loginPage
                        ? "Create an Account"
                        : "Already have an account"}
                </h3>
                <div className="transition ease-out duration-300 delay-100 text-left">
                    <p className="text-white mb-4">
                        {loginPage
                            ? "Enter few details and create a new account"
                            : "Enter Credentials for your Fantasy Account"}
                    </p>
                    <Link
                        to={loginPage ? "/auth/register" : "/auth/login"}
                        className="btn-orange text-center rounded p-2 mt-4"
                        onClick={loginPage ? setPagetoRegister : setPagetoLogin}
                    >
                        {loginPage ? "Register" : "Login"}
                    </Link>
                </div>
                <img
                    src={`${import.meta.env.VITE_APP_IMAGE_URL}/${
                        loginPage ? "login" : "register"
                    }.svg`}
                    alt="Page Svg"
                />
            </div>
        </div>
    );
};

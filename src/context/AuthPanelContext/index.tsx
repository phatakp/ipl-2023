import { createContext, ReactNode, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

interface AuthPanelContextProps {
    loginPage: boolean;
    setPagetoLogin: () => void;
    setPagetoRegister: () => void;
}

const AuthPanelContext = createContext({} as AuthPanelContextProps);

export const AuthPanelContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const location = useLocation();
    const path = location.pathname.split("/").pop();
    const [loginPage, setLoginPage] = useState(path === "login");

    const setPagetoLogin = () => setLoginPage(true);
    const setPagetoRegister = () => setLoginPage(false);

    return (
        <AuthPanelContext.Provider
            value={{
                loginPage,
                setPagetoLogin,
                setPagetoRegister,
            }}
        >
            {children}
        </AuthPanelContext.Provider>
    );
};

export const useAuthPanelContext = () => useContext(AuthPanelContext);

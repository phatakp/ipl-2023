import React from "react";
import { AuthPanelContextProvider } from "./AuthPanelContext";
import { NavbarContextProvider } from "./NavbarContext";

export const AppContext = ({ children }: { children: React.ReactNode }) => {
    return (
        <NavbarContextProvider>
            <AuthPanelContextProvider>{children}</AuthPanelContextProvider>
        </NavbarContextProvider>
    );
};

import { Outlet } from "react-router-dom";
import { useAuthPanelContext } from "~/context/AuthPanelContext";
import { AuthPanel } from "./AuthPanel";

export const Auth = () => {
    const { loginPage } = useAuthPanelContext();
    return (
        <div
            className={`container mx-auto relative grid md:grid-cols-2 gap-4 md:overflow-hidden before:absolute before:left-[30%] md:left-0 md:before:top-[5%] before:right-1/2 before:h-[1500px] before:w-[1500px] before:-translate-x-1/2 md:before:-translate-y-1/2 before:bg-blue-600 transition ease-in-out duration-300 before:z-5 before:rounded-full mt-24 ${
                loginPage ? "before:bottom-[28%]" : "before:bottom-[68%]"
            }`}
        >
            <AuthPanel />
            <Outlet />
        </div>
    );
};

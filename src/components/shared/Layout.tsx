import { Outlet } from "react-router-dom";
import { Navbar } from "~/components/Navbar";

export const Layout = () => {
    return (
        <div className="relative">
            <Navbar />
            <Outlet />
        </div>
    );
};
import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/" className="flex items-center">
            <img
                src={`${import.meta.env.VITE_APP_IMAGE_URL}/ipl-logo.png`}
                className="h-12 w-18 mr-3 "
                alt="IPL Logo"
            />
        </Link>
    );
};

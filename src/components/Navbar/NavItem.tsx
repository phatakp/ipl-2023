import { Link, Path, useLocation } from "react-router-dom";
import { useNavbarContext } from "~/context/NavbarContext";

type NavItemProps = {
    path: string | Partial<Path>;
    title: string;
};

export const NavItem = ({ path, title }: NavItemProps) => {
    const location = useLocation();
    const absPath = path.toString().slice(1);
    const linkPath = location.pathname.slice(1);
    const active =
        (absPath && linkPath.startsWith(absPath)) || location.pathname === path;
    const { closeMenu } = useNavbarContext();

    return (
        <li>
            <Link
                to={path}
                className={`block px-4 py-2 rounded text-white uppercase transition duration-300 ease-in w-full md:w-auto ${
                    active
                        ? "btn-pink"
                        : "hover:border-b-4 hover:border-pink-600 hover:rounded-none"
                }`}
                onClick={closeMenu}
            >
                {title}
            </Link>
        </li>
    );
};

import { Link, Path } from "react-router-dom";
import { useNavbarContext } from "~/context/NavbarContext";

type UserDropdownLinkProps = {
    path: string | Partial<Path>;
    title: string;
};

export const UserDropdownLink = ({ path, title }: UserDropdownLinkProps) => {
    const { closeUserDropdown } = useNavbarContext();
    return (
        <li>
            <Link
                to={path}
                className="block px-4 py-2 text-sm text-gray-800 hover:text-gray-200 hover:bg-gray-500"
                onClick={closeUserDropdown}
            >
                {title}
            </Link>
        </li>
    );
};

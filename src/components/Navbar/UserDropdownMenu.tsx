import { useNavbarContext } from "~/context/NavbarContext";
import { UserDropdownLink } from "./UserDropdownLink";

export const UserDropdownMenu = () => {
    const { showUserDropMenu } = useNavbarContext();
    return (
        <div
            className={`z-50 my-4 text-base list-none divide-y divide-gray-400 rounded-lg shadow shadow-gray-400 absolute top-10 -left-28 bg-gray-200 ${
                showUserDropMenu ? "" : "hidden"
            }`}
        >
            <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">
                    Bonnie Green
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
                <UserDropdownLink path="/" title="Dashboard" />
                <UserDropdownLink path="/" title="Change Password" />
                <UserDropdownLink path="/" title="Sign Out" />
            </ul>
        </div>
    );
};

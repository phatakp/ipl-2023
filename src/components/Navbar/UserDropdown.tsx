import { useNavbarContext } from "~/context/NavbarContext";

export const UserDropdown = () => {
    const { showUserDropMenu, openUserDropdown, closeUserDropdown } =
        useNavbarContext();
    return (
        <button
            className="flex mr-3 text-sm bg-gray-100 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
            onClick={showUserDropMenu ? closeUserDropdown : openUserDropdown}
        >
            <span className="sr-only">Open user menu</span>
            <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
            />
        </button>
    );
};

import { useNavbarContext } from "~/context/NavbarContext";
import { NavItem } from "./NavItem";

export const NavItems = () => {
    const { showMenu } = useNavbarContext();

    return (
        <div
            className={`items-center justify-between w-full mt-4 md:mt-0 md:flex md:w-auto md:order-1 ${
                showMenu ? "" : "hidden"
            }`}
            id="mobile-menu-2"
        >
            <ul className="flex flex-col p-2 border  border-gray-100 rounded-lg space-y-4 md:space-y-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                <NavItem path="/" title="Home" />
                <NavItem path="/matches" title="Matches" />
                <NavItem path="/rules" title="Rules" />
            </ul>
        </div>
    );
};

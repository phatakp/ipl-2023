import { Logo } from "./Logo";
import { NavItems } from "./NavItems";
import { Toggle } from "./Toggle";
import { UserDropdown } from "./UserDropdown";
import { UserDropdownMenu } from "./UserDropdownMenu";

export const Navbar = () => {
    return (
        <nav className="bg-darkblue border-b border-gray-200 px-2 sm:px-4 py-2.5 fixed top-0 left-0 right-0 z-10 overflow-visible">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Logo />
                <div className="flex items-center md:order-2 relative">
                    <UserDropdown />
                    <UserDropdownMenu />
                    <Toggle />
                </div>
                <NavItems />
            </div>
        </nav>
    );
};

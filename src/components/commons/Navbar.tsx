import applogo from "/assets/logo-white.png";
import Hamburger from "./HamBurger";
import { useState } from "react";
import Avatar from "./Avatar";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

type NavbarLinkProps = {
  label: string;
  path: string;
  is_new_tab: boolean;
};

const navbarLinks: NavbarLinkProps[] = [
  {
    label: "Home",
    path: "/",
    is_new_tab: false,
  },
  {
    label: "Products",
    path: "/products",
    is_new_tab: false,
  },
  {
    label: "About Us",
    path: "/about-us",
    is_new_tab: false,
  },
];

const NavbarLinkComp = ({
  navbarLinks,
  className = "hidden md:flex",
}: {
  navbarLinks: NavbarLinkProps[];
  className?: string;
}) => {
  const location = useLocation();
  console.log("dhbvd", location.pathname);
  return (
    <ul className={`${className} items-center gap-x-6`}>
      {navbarLinks.map((navLink) => (
        <li
          className={`uppercase font-bold hover:text-green-400 ${
            location?.pathname === navLink?.path
              ? "text-green-400 pointer-events-none"
              : "text-white"
          }`}
          key={navLink?.label}
        >
          <a
            href={navLink?.path}
            target={navLink?.is_new_tab ? "_blank" : "_self"}
          >
            {navLink?.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black px-6 py-2 flex justify-between items-center text-white shadow-sm shadow-black">
      <div className="flex gap-x-12 items-center justify-between md:justify-start w-full">
        <div className="block md:hidden">
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div>
          <img src={applogo} alt="logo" width={100} height={40} />
        </div>
        <NavbarLinkComp navbarLinks={navbarLinks} />
        <Avatar className="block md:hidden" />
      </div>
      <Avatar className="hidden md:block" />
      <div
        className={`z-999 absolute bg-black top-[86px] left-0 duration-700 ease-in-out bg-darknavy overflow-hidden ${
          isOpen ? "w-[60%]" : "w-0 left-[-50%]"
        } py-14 slider-height flex flex-col items-center justify-between `}
      >
        <NavbarLinkComp
          navbarLinks={navbarLinks}
          className="flex flex-col gap-y-8"
        />
      </div>
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { navLinks } from "../data/data.ts";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import NavSectionOne from "./NavSectionOne.tsx";
import MobileNav from "./MobileNav.tsx";
import Header from "./Header.tsx";

const Navbar = ({ onLoginClick = () => {} }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`p-6 fixed w-full z-[9999] top-0 right-0 flex items-center justify-around transition-all duration-300 ${
          isScrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
        }`}
      >
        <NavSectionOne />
        <div className="md:flex gap-3 hidden font-light text-white items-center">
          {navLinks.map((navLink) => (
            <NavLink to={navLink.path} key={navLink.id}>
              <h4 className="hover:text-slate-300">{navLink.name}</h4>
            </NavLink>
          ))}
          <button
            onClick={onLoginClick}
            className="bg-amber-400 px-4 py-2 cursor-pointer hover:bg-amber-500 transition-all ease-in-out duration-300 rounded-md text-white font-semibold"
          >
            Login
          </button>
          <button
            onClick={onLoginClick}
            className="bg-slate-200/20 px-4 py-2 cursor-pointer hover:bg-slate-400/20 transition-all ease-in-out duration-300 rounded-md text-white font-semibold"
          >
            Register
          </button>
        </div>
        <div className="md:hidden">
          <FontAwesomeIcon
            onClick={() => setMobileNav(true)}
            icon={faBarsStaggered}
            className="text-white text-xl cursor-pointer"
          />
        </div>
      </nav>
      <Header />
      <MobileNav
        navLinks={navLinks}
        setMobileNav={setMobileNav}
        isVisible={mobileNav}
        onLoginClick={onLoginClick}
      />
    </header>
  );
};

export default Navbar;

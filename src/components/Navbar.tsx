import { navLinks } from "../data/data.ts";
import { NavLink } from "react-router-dom";
import NavSectionOne from "./NavSectionOne.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header.tsx";
import { useState } from "react";
import MobileNav from "./MobileNav.tsx";

const Navbar = ({ onLoginClick = () => {} }) => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header>
      <nav className="p-8 flex items-center justify-around">
        <NavSectionOne />
        <div className="md:flex gap-3 hidden font-font-light text-white items-center">
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
      />
    </header>
  );
};

export default Navbar;

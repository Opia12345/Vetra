import { useState } from "react";
import { navLinks } from "../data/data.ts";
import { NavLink } from "react-router-dom";
import NavSectionOne from "../components/NavSectionOne.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faSearch } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "../components/MobileNav.tsx";
import InteractionPopup from "../components/InteractionPopup.tsx";
import Footer from "../sections/Footer.tsx";

interface InteractionPopupProps {
  isOpen: boolean;
  onLoginClick: any;
  onClose: () => void;
}

const Review: React.FC<InteractionPopupProps> = ({
  onLoginClick,
  isOpen,
  onClose,
}) => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <section className="">
      <nav className="p-6 flex fixed z-[8888] top-0 right-0 w-full bg-gray-900 items-center justify-around">
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

      <MobileNav
        navLinks={navLinks}
        setMobileNav={setMobileNav}
        isVisible={mobileNav}
        onLoginClick={onLoginClick}
      />
      <div className="bg-gradient-to-r from-amber-400 to-amber-500 w-full py-24 px-6 mt-20 flex justify-center items-center text-white">
        <div className="flex flex-col items-center text-center max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-tight">
            Did you visit anywhere recently?
          </h1>
          <p className="text-lg mt-3 font-medium">
            Leave a review to help others make the right choice.
          </p>
          <div className="bg-white rounded-full shadow-lg w-full max-w-lg px-5 py-3 mt-6 flex items-center">
            <input
              type="search"
              className="w-full outline-none text-gray-700 placeholder:text-gray-400 text-sm px-2 bg-transparent"
              placeholder="Enter a Location..."
            />
            <FontAwesomeIcon className="text-black" icon={faSearch} />
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col p-8 items-center">
        <img src="/review.svg" className="md:w-[40%]" alt="" />
        <p className="text-slate-600 md:text-lg text-xs text-center">Register now and get the full user experience, you're just one click away!</p>
      </div>

      {isOpen && <InteractionPopup isOpen={isOpen} onClose={onClose} />}

        <Footer />

    </section>
  );
};

export default Review;

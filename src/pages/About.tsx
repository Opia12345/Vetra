import { useState } from "react";
import { navLinks } from "../data/data.ts";
import { NavLink } from "react-router-dom";
import NavSectionOne from "../components/NavSectionOne.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "../components/MobileNav.tsx";
import InteractionPopup from "../components/InteractionPopup.tsx";
import Footer from "../sections/Footer.tsx";

interface InteractionPopupProps {
  isOpen: boolean;
  onLoginClick: any;
  onClose: () => void;
}

const About: React.FC<InteractionPopupProps> = ({
  onLoginClick,
  isOpen,
  onClose,
}) => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <section>
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
      <div className="mt-26 mb-4 p-12 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mt-4">
          Welcome to
          <span className="text-amber-500 font-semibold"> ReviewCloud</span>, where we
          strive to provide the best experiences for our users. Our mission is
          to create innovative solutions that make life easier and more
          enjoyable.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-5xl">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">
              🌍 Our Vision
            </h2>
            <p className="text-gray-600 mt-2">
              To revolutionize the way people interact with technology by
              offering solutions via reviews from people all over the world.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">
              🚀 Our Mission
            </h2>
            <p className="text-gray-600 mt-2">
              To empower individuals and businesses through user-friendly,
              high-performance applications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">
              💡 Our Values
            </h2>
            <p className="text-gray-600 mt-2">
              Integrity, innovation, and customer satisfaction are at the heart
              of everything we do.
            </p>
          </div>
        </div>

        <p className="text-gray-700 mt-10 max-w-3xl">
          Whether you're here to explore, learn, or collaborate, we’re excited
          to have you on this journey with us. Thank you for choosing{" "}
          <span className="text-amber-500 font-semibold">ReviewCloud</span>!
        </p>
      </div>

      {isOpen && <InteractionPopup isOpen={isOpen} onClose={onClose} />}
      <Footer />
    </section>
  );
};

export default About;

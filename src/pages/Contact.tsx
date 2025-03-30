import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faEnvelope,
  faFileText,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../data/data.ts";
import { NavLink } from "react-router-dom";
import NavSectionOne from "../components/NavSectionOne.tsx";
import MobileNav from "../components/MobileNav.tsx";
import InteractionPopup from "../components/InteractionPopup.tsx";
import Footer from "../sections/Footer.tsx";

interface InteractionPopupProps {
  isOpen: boolean;
  onLoginClick: any;
  onClose: () => void;
}

// Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup.string().required("Message cannot be empty"),
});

const Contact: React.FC<InteractionPopupProps> = ({
  onLoginClick,
  isOpen,
  onClose,
}) => {
  const [mobileNav, setMobileNav] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <section>
      <nav className="p-8 flex fixed z-[8888] top-0 right-0 w-full bg-gray-900 items-center justify-around">
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

      {isOpen && <InteractionPopup isOpen={isOpen} onClose={onClose} />}
      <div className="mt-20 p-12 flex justify-center">
        <div className="w-full max-w-3xl bg-white/30 p-8 rounded-2xl shadow-2xl border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Fill out the form below and we’ll respond as soon as possible.
          </p>

          <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                {...register("name")}
                className={`w-full px-4 py-3 pl-12 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all`}
              />
              <span className="absolute left-4 top-3 text-gray-400">
                <FontAwesomeIcon icon={faUserAlt} />
              </span>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className={`w-full px-4 py-3 pl-12 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all`}
              />
              <span className="absolute left-4 top-3 text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="relative">
              <textarea
                placeholder="Write your message..."
                {...register("message")}
                className={`w-full px-4 py-3 pl-12 border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all resize-none`}
              />
              <span className="absolute left-4 top-3 text-gray-400">
                <FontAwesomeIcon icon={faFileText} />
              </span>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;

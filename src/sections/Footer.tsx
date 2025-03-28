import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { navLinks } from "../data/data";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="lg:flex block md:items-center justify-around">
        <div className="text-left">
          <h2 className="text-2xl flex items-center gap-2 font-bold">
            <img src="/vetra_icon.png" className="w-[30px]" alt="app_logo" />
            Vetra
          </h2>
          <p className="text-gray-400 mt-2">
            Your trusted source for honest reviews
          </p>
        </div>

        <ul className="flex space-x-6 mt-4 md:mt-0 text-gray-300">
          {navLinks.map((navLink) => (
            <li>
              <Link to={navLink.path} className="hover:text-white transition">
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="#" className="text-gray-400 hover:text-white transition">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white transition">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white transition">
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
          <Link to="#" className="text-gray-400 hover:text-white transition">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Vetra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

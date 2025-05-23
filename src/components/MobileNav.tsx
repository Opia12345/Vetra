import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

//COMPONENT PROPS
interface MobileNavProps {
  navLinks: { id: number; name: string; path: string; active: boolean }[];
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  onLoginClick: any;
}

const MobileNav: React.FC<MobileNavProps> = ({
  navLinks,
  setMobileNav,
  isVisible,
  onLoginClick,
}) => {
  useEffect(() => {
    if (isVisible == true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);
  return (
    <div
      onClick={() => setMobileNav(false)}
      className={`flex flex-col items-center justify-center z-5 gap-3 font-semibold h-screen w-full bg-gray-400 backdrop-blur-lg p-4 fixed top-0 right-0 text-white ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        className="flex flex-col items-center justify-center gap-3 font-semibold"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="text-white text-xl cursor-pointer"
          onClick={() => setMobileNav(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </span>
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
    </div>
  );
};

export default MobileNav;

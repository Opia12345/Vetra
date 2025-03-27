import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

//COMPONENT PROPS
interface MobileNavProps {
  navLinks: { id: number; name: string; path: string; active: boolean }[];
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({
  navLinks,
  setMobileNav,
  isVisible,
}) => {
  const styles = {
    enter: "transform -translate-x-full opacity-0",
    enterActive:
      "transform translate-x-0 opacity-100 transition-all duration-500 ease-in-out",
    exitActive:
      "transform -translate-x-full opacity-0 transition-all duration-500 ease-in-out",
  };
  return (
    <CSSTransition in={true} timeout={500} classNames={styles} unmountOnExit>
      <div
        className={`flex flex-col items-center justify-center gap-3 font-semibold h-screen w-full bg-slate-200/20 backdrop-blur-lg p-4 fixed top-0 right-0 text-white ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
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
        <button className="bg-amber-400 px-4 py-2 cursor-pointer hover:bg-amber-500 transition-all ease-in-out duration-300 rounded-md text-white font-semibold">
          Login
        </button>
        <button className="bg-slate-200/20 px-4 py-2 cursor-pointer hover:bg-slate-400/20 transition-all ease-in-out duration-300 rounded-md text-white font-semibold">
          Register
        </button>
      </div>
    </CSSTransition>
  );
};

export default MobileNav;

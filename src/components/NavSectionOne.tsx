import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavSectionOne = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/vetra_icon.png" className="w-[30px]" alt="app_logo" />
      <Link to="/">
        <h1 className="text-xl font-black text-white mr-[20px]">
          Vetra
        </h1>
      </Link>
      <div className="bg-white lg:flex hidden items-center">
        <h5 className="ml-2 mr-2 font-light text-sm text-slate-500">
          Based on your Location
        </h5>
        <FontAwesomeIcon
          icon={faLocation}
          className="bg-amber-400 text-white p-2"
        />
      </div>
    </div>
  );
};

export default NavSectionOne;

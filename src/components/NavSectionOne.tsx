import { Link } from "react-router-dom";

const NavSectionOne = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/vetra_icon.png" className="w-[30px]" alt="app_logo" />
      <Link to="/">
        <h1 className="text-xl font-black text-white mr-[20px]">ReviewCloud</h1>
      </Link>
    </div>
  );
};

export default NavSectionOne;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { categoryItems } from "../data/data";
import { navLinks } from "../data/data.ts";
import { NavLink } from "react-router-dom";
import NavSectionOne from "../components/NavSectionOne.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "../components/MobileNav.tsx";
import InteractionPopup from "../components/InteractionPopup.tsx";

interface CategoryItem {
  category: string;
  image: string;
  company: string;
  stars: number;
  location: string;
  launched: string;
  website: string;
}

interface InteractionPopupProps {
  isOpen: boolean;
  onLoginClick: any;
  onClose: () => void;
}

const CategoryDetails: React.FC<InteractionPopupProps> = ({
  onLoginClick,
  isOpen,
  onClose,
}) => {
  const { id } = useParams<{ id: string }>();
  const [items, setItems] = useState<CategoryItem[]>([]);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    if (id) {
      const filteredItems = categoryItems.filter(
        (item) => item.category.toLowerCase() === id.toLowerCase()
      );
      setItems(filteredItems);
    }
  }, [id]);

  useEffect(() => {
    if (isOpen == true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (items.length === 0) {
    return (
      <div className="text-center text-red-500 text-xl py-10">
        Category not found
      </div>
    );
  }

  return (
    <section>
      <nav className="p-8 flex bg-gray-900 items-center justify-around">
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
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 capitalize">
          {id ? id.replace(/_/g, " ") : "Category"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.company}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-3">
                {item.company}
              </h3>
              <p className="text-gray-600">⭐ {item.stars} / 5</p>
              <p className="text-gray-500">{item.location}</p>
              <p className="text-gray-400 text-sm">Launched: {item.launched}</p>
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>
      {isOpen && <InteractionPopup isOpen={isOpen} onClose={onClose} />}
    </section>
  );
};

export default CategoryDetails;

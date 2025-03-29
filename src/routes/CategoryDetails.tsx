import { Link, useParams } from "react-router-dom";
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
  tag1?: number;
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
      <div className="flex items-center gap-6 py-[100px] px-8">
        <div className="fixed h-screen top-0 left-0 w-[400px] hidden md:block border-r p-6 overflow-y-auto bg-gray-100">
          <h2 className="text-xl mt-[50%] font-semibold mb-4">Categories</h2>

          {categoryItems.length > 0 ? (
            [...new Set(categoryItems.map((item) => item.category))].map(
              (category, index) => (
                <div key={index} className="mt-4">
                  <Link
                    to={`/categories/${category
                      .toUpperCase()
                      .replace(/\s+/g, "-")}`}
                    className="block w-full px-3 py-2 rounded-lg hover:bg-gray-200 transition"
                  >
                    <h3 className="text-lg font-medium text-gray-800">
                      {category.toUpperCase().replace(/_/g, " ")}
                    </h3>
                  </Link>
                </div>
              )
            )
          ) : (
            <p className="text-gray-500 text-sm mt-4">No categories found.</p>
          )}
        </div>

        <div className="flex flex-col md:ml-[450px] mt-12 w-full justify-center gap-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-left capitalize">
            {id ? id.replace(/_/g, " ") : "Category"}
          </h2>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden w-full hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src={item.image}
                  alt={item.company}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-xl md:rounded-l-xl"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.company}
                </h3>
                <p className="text-gray-500 text-sm mb-1">
                  ⭐ {item.stars} / 5
                </p>
                <p className="text-gray-600">{item.location}</p>
                <p className="text-gray-400 text-sm">
                  Launched: {item.launched}
                </p>

                <div className="flex flex-wrap gap-3 justify-between items-center mt-4">
                  <span className="flex items-center gap-3">
                    <h5 className="border rounded-xl text-xs text-gray-400 px-2 py-1">
                      {item.tag1} People
                    </h5>
                  </span>
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium text-center py-2 rounded-lg transition-all duration-300 hover:opacity-90"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && <InteractionPopup isOpen={isOpen} onClose={onClose} />}
    </section>
  );
};

export default CategoryDetails;

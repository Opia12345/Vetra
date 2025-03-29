import { Link } from "react-router-dom";
import { categoryItems } from "../data/data";
import { motion } from "framer-motion";

const Categories = () => {
  const categories = [...new Set(categoryItems.map((item) => item.category))];

  return (
    <section className="p-8 mt-8 max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Find What You Need
        </h1>
        <p className="text-gray-500 mt-2 text-lg">Explore by category</p>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-xl border border-slate-300 shadow-md p-6 flex flex-col items-center cursor-pointer hover:bg-gray-100 transition"
          >
            <Link
              to={`/categories/${category}`}
              className="w-full flex items-center"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.replace(/_/g, " ").toUpperCase()}
                  </h3>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

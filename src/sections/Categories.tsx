import { categories } from "../data/data";

const Categories = () => {
  return (
    <section className="p-8 mt-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          What are you looking for?
        </h1>
        <p className="text-gray-500 mt-2">Explore by category</p>
      </div>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mt-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col items-center justify-center p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="bg-gray-100 p-4 rounded-full">
                <img src={category.path} width="50" alt={category.name} />
              </div>
              <h5 className="font-medium whitespace-nowrap text-gray-700 mt-4 group-hover:text-blue-500 transition">
                {category.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

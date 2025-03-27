import { categories } from "../data/data";

const Categories = () => {
  return (
    <section className="p-8 mt-8">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-3xl font-bold">Categories</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mt-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border border-slate-200 flex flex-col justify-center items-center p-12 rounded-md hover:shadow-md transition ease-in-out duration-200"
            >
              <img src={category.path} width="60" alt="" />
              <h5 className="font-semibold mt-4 whitespace-nowrap">{category.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bestCompanies } from "../data/data";
import { faStar } from "@fortawesome/free-solid-svg-icons";

//GETTING THE STAR RATING
const getStars = (rating: number) => {
  const totalStars = 5;
  return Array.from({ length: totalStars }, (_, i) =>
    i < rating ? (
      <FontAwesomeIcon icon={faStar} key={i} className="text-green-400" />
    ) : (
      <FontAwesomeIcon icon={faStar} key={i} className="text-gray-200" />
    )
  );
};

const Best = () => {
  return (
    <section className="p-8 mt-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Most reviewed companies
        </h1>
        <p className="text-gray-500 mt-2">Top 4 companies in your locaction</p>
      </div>

      <div className="flex justify-center">
        <div className="flex items-center justify-evenly overflow-scroll gap-6 mt-10">
          {bestCompanies.map((company) => (
            <div
              key={company.id}
              className="group flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 w-80"
            >
              <div className="bg-gray-100 p-4 rounded-full flex items-center justify-center h-16 w-16">
                <img
                  src={company.path}
                  alt={company.name}
                  className="h-12 w-12 object-contain"
                />
              </div>

              <div className="flex flex-col">
                <h5 className="font-medium whitespace-nowrap text-gray-700">
                  {company.name}
                </h5>
                <small className="text-slate-400">{company.link}</small>
                <div className="flex mt-1">{getStars(company.rating)}</div>
                <small className="text-slate-400 mt-1">
                  ({company.number})
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Best;

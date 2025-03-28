import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { reviews } from "../data/data";
import {
  faBookmark,
  faEye,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Activity = () => {
  return (
    <section className="p-8 mt-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Recent Reviews</h1>
        <p className="text-gray-500 mt-2">Hear from real people</p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 flex flex-col space-y-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  alt={review.reviewer}
                  className="w-12 h-12 rounded-full object-cover border border-gray-300"
                />
                <div>
                  <h3 className="text-md font-semibold">{review.reviewer}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(review.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <img
                src={review.thumbnail}
                alt={review.reviewer}
                className="h-[200px]"
              />

              <h4 className="text-lg font-semibold">{review.title}</h4>

              <div className="text-green-400 text-md">
                {"★".repeat(review.stars) + "☆".repeat(5 - review.stars)}
              </div>

              <p className="text-gray-600 text-sm truncate">{review.content}</p>

              <div className="flex flex-col">
                <div className="bg-slate-300 w-full h-[0.5px] mb-4"></div>
                <div className="flex items-center gap-4">
                  <Tippy placement="bottom" content="Like">
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faHeart}
                    />
                  </Tippy>
                  <Tippy placement="bottom" content="View More">
                    <FontAwesomeIcon className="cursor-pointer" icon={faEye} />
                  </Tippy>
                  <Tippy placement="bottom" content="Save">
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faBookmark}
                    />
                  </Tippy>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activity;

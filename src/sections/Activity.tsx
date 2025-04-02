import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { reviews } from "../data/data";
import {
  faBookmark,
  faEye,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Review {
  id: number;
  image: string;
  reviewer: string;
  timestamp: string;
  thumbnail: string;
  name: string;
  title: string;
  stars: number;
  content: string;
  category: string;
}

interface ActivityProps {
  onLoginClick?: () => void;
}

const Activity: React.FC<ActivityProps> = ({ onLoginClick = () => {} }) => {
  const [expandedReviews, setExpandedReviews] = useState<
    Record<number, boolean>
  >({});

  const toggleExpand = (id: number) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section data-aos="fade-in" className="p-8 mt-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Recent Reviews</h1>
        <p className="text-gray-500 mt-2">Hear from real people</p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {reviews.map((review: Review) => {
            const isExpanded = expandedReviews[review.id];
            return (
              <div
                key={review.id}
                className="bg-white shadow-lg rounded-xl p-6 border border-slate-200 flex flex-col space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <LazyLoadImage
                    src={review.image}
                    alt={review.reviewer}
                    effect="blur"
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <h3 className="text-md font-semibold">{review.reviewer}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(review.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <LazyLoadImage
                  src={review.thumbnail}
                  alt={review.reviewer}
                  effect="blur"
                  className="h-[200px] w-full object-cover rounded-md"
                />

                <h4 className="text-xl text-blue-500 font-semibold">
                  {review.name}
                </h4>
                <h4 className="text-md font-semibold">{review.title}</h4>

                <div className="text-green-400 text-md">
                  {"★".repeat(review.stars) + "☆".repeat(5 - review.stars)}
                </div>

                <div className="">
                  <p className="text-gray-600 text-sm">
                    {isExpanded
                      ? review.content
                      : `${review.content.slice(0, 60)}...`}
                  </p>

                  <button
                    onClick={() => toggleExpand(review.id)}
                    className="bg-blue-500 text-xs px-4 py-1 mt-3 text-white rounded-xl"
                  >
                    {isExpanded ? "View Less" : "View More"}
                  </button>
                </div>

                <div className="flex flex-col">
                  <div className="bg-slate-300 w-full h-[0.5px] mb-4"></div>
                  <div className="flex items-center gap-4">
                    <Tippy placement="bottom" content="Like">
                      <FontAwesomeIcon
                        className="cursor-pointer"
                        icon={faHeart}
                        onClick={onLoginClick}
                      />
                    </Tippy>
                    <Tippy placement="bottom" content="View">
                      <FontAwesomeIcon
                        onClick={onLoginClick}
                        className="cursor-pointer"
                        icon={faEye}
                      />
                    </Tippy>
                    <Tippy placement="bottom" content="Save">
                      <FontAwesomeIcon
                        onClick={onLoginClick}
                        className="cursor-pointer"
                        icon={faBookmark}
                      />
                    </Tippy>
                  </div>
                </div>
                <h5 className="text-sm text-slate-400">
                  Category: {review.category}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activity;

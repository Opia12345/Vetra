import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="md:p-20 px-10 pt-28 md:mt-[10%] mt-[20%] header">
      <div>
        <h1 className="md:text-4xl text-3xl font-black text-white">
          The Ultimate Destination for <br /> Trusted Ratings & Smart Decisions.
        </h1>
        <small className="text-white">
          Discover unbiased reviews, compare top products, and make informed
          choices with confidence.
        </small>
      </div>
      <div className="mt-4">
        <span className="bg-amber-400 rounded-md text-white p-3 mt-2">
          <FontAwesomeIcon icon={faTag} />&nbsp;
          Restaurants
        </span>
      </div>
    </div>
  );
};

export default Header;

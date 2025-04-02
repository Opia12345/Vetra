import { useState, useRef, useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const popularLocations = [
  "New York, USA",
  "Los Angeles, USA",
  "London, UK",
  "Paris, France",
  "Tokyo, Japan",
  "Sydney, Australia",
];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("New York, USA");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredLocations = popularLocations.filter((location) =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="justify-center h-[100%] relative p-10 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="md:text-4xl text-3xl font-black text-white">
            Find Trusted Ratings in Your City.
          </h1>
          <small className="text-white mt-3">
            Discover top-rated services and businesses near you.
          </small>
        </div>

        <div ref={searchRef} className="relative w-full max-w-lg mt-6">
          <div className="bg-white rounded-full shadow-lg px-5 py-3 flex items-center">
            <FontAwesomeIcon className="text-black" icon={faSearch} />
            <input
              type="search"
              className="w-full outline-none text-gray-700 placeholder:text-gray-400 text-sm px-2 bg-transparent"
              placeholder="Search for a city or location..."
              value={searchTerm}
              onFocus={() => setDropdownVisible(true)}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {isDropdownVisible && filteredLocations.length > 0 && (
            <ul className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
              <h5 className="px-5 py-2 text-gray-500 text-sm">
                Popular Locations
              </h5>
              {filteredLocations.map((location, index) => (
                <li
                  key={index}
                  className="px-5 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchTerm(location);
                    setDropdownVisible(false);
                  }}
                >
                  {location}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

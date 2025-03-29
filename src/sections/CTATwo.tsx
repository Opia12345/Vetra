const CTATwo = ({ onLoginClick = () => {} }) => {
  return (
    <section className="p-8 mt-8">
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-500 text-white py-16 px-6 text-center rounded-2xl shadow-lg overflow-hidden">
        {/* Floating Images */}
        <div className="absolute -top-10 left-4 transform rotate-[-15deg]">
          <img
            src="/images/img1.jpg"
            width={100}
            height={100}
            alt="Product 1"
            className="drop-shadow-lg opacity-80"
          />
        </div>
        <div className="absolute -bottom-28 right-4 transform rotate-[15deg]">
          <img
            src="/images/img2.jpg"
            width={120}
            height={120}
            alt="Product 2"
            className="drop-shadow-lg opacity-80"
          />
        </div>

        {/* Content */}
        <h2 className="text-3xl font-bold leading-tight">
          Make Smarter Choices, Faster.
        </h2>
        <p className="mt-4 text-lg text-gray-100">
          Discover top-rated products, real reviews, and expert insights—all in
          one place. Your next best purchase starts here!
        </p>
        <button
          onClick={onLoginClick}
          className="mt-6 bg-white text-blue-600 font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
        >
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default CTATwo;

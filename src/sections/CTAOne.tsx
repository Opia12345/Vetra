const CTAOne = ({ onLoginClick = () => {} }) => {
  return (
    <section className="p-8 mt-8 flex justify-center">
      <div className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 py-4 px-6 rounded-lg shadow-lg text-white">
        <div className="md:text-start text-center grid md:grid-cols-2 md:justify-items-end gap-4">
          <div>
            <h2 className="text-lg font-bold">
              Stop Guessing. Start Choosing!
            </h2>
            <h5 className="mt-2 text-sm">
              Find top-rated products, share your thoughts, and make smarter
              picks — all in one place.
            </h5>
          </div>
          <div className="place-content-center">
            <button
              onClick={onLoginClick}
              className="border hover:bg-slate-200/20 transition-all ease-in-out cursor-pointer duration-300 px-4 py-2 rounded-md"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;

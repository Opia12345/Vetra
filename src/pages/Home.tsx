import { useState } from "react";
import InteractionPopup from "../components/InteractionPopup";
import Navbar from "../components/Navbar";
import Activity from "../sections/Activity";
import Best from "../sections/Best";
import Categories from "../sections/Categories";
import CTAOne from "../sections/CTAOne";
import CTATwo from "../sections/CTATwo";
import Footer from "../sections/Footer";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <main>
      <Navbar onLoginClick={togglePopup} />
      <InteractionPopup isOpen={isPopupOpen} onClose={togglePopup} />
      <Categories />
      <CTAOne onLoginClick={togglePopup} />
      <Best />
      <Activity onLoginClick={togglePopup} />
      <CTATwo onLoginClick={togglePopup} />
      <Footer />
    </main>
  );
};

export default Home;

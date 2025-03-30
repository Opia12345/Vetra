import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CategoryDetails from "./routes/CategoryDetails";
import { useEffect, useState } from "react";
import Review from "./pages/Review";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  //AOS SETUP
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/review"
          element={
            <Review
              isOpen={isPopupOpen}
              onLoginClick={togglePopup}
              onClose={togglePopup}
            />
          }
        />
        <Route
          path="/about_us"
          element={
            <About
              isOpen={isPopupOpen}
              onLoginClick={togglePopup}
              onClose={togglePopup}
            />
          }
        />
        <Route
          path="/contact_us"
          element={
            <Contact
              isOpen={isPopupOpen}
              onLoginClick={togglePopup}
              onClose={togglePopup}
            />
          }
        />
        <Route
          path={`/categories/:id`}
          element={
            <CategoryDetails
              isOpen={isPopupOpen}
              onLoginClick={togglePopup}
              onClose={togglePopup}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

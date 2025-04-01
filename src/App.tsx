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
import Title from "./components/Title";
import NotFound from "./routes/NotFound";

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
        <Route
          path="/"
          element={
            <Title title="Home - ReviewCloud">
              <Home />
            </Title>
          }
        />
        <Route
          path="/review"
          element={
            <Title title="Write a Review - ReviewCloud">
              <Review
                isOpen={isPopupOpen}
                onLoginClick={togglePopup}
                onClose={togglePopup}
              />
            </Title>
          }
        />
        <Route
          path="/about_us"
          element={
            <Title title="About Us - ReviewCloud">
              <About
                isOpen={isPopupOpen}
                onLoginClick={togglePopup}
                onClose={togglePopup}
              />
            </Title>
          }
        />
        <Route
          path="/contact_us"
          element={
            <Title title="Contact Us - ReviewCloud">
              <Contact
                isOpen={isPopupOpen}
                onLoginClick={togglePopup}
                onClose={togglePopup}
              />
            </Title>
          }
        />
        <Route
          path={`/categories/:id`}
          element={
            <Title title="Category Details - ReviewCloud">
              <CategoryDetails
                isOpen={isPopupOpen}
                onLoginClick={togglePopup}
                onClose={togglePopup}
              />
            </Title>
          }
        />
        <Route
        path="*"
          element={
            <Title title="404 - ReviewCloud">
              <NotFound />
            </Title>
          }
        />
      </Routes>
    </>
  );
}

export default App;

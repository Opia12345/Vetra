import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CategoryDetails from "./routes/CategoryDetails";
import { useState } from "react";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/categories/:id"
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

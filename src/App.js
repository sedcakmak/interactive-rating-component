import { Fragment, useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import MainDesign from "./components/MainDesign";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";

export const ratingState = createContext();

export default function App() {
  const [rating, setRating] = useState(0);

  return (
    <Fragment>
      <GlobalStyle />
      <ratingState.Provider value={{ rating, setRating }}>
        <Routes>
          <Route
            path="/interactive-rating-component"
            element={<MainDesign />}
          />
          <Route
            path="thankyou"
            element={<ThankYou />}
          />
        </Routes>
        <Footer />
      </ratingState.Provider>
    </Fragment>
  );
}

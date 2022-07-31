//import logo from "/public/images/icon-star.svg";
import "./App.css";
import Card from "./components/Card";
import GlobalStyle from "./globalStyles";
//import { MainDesign } from "./components/MainDesign";
//import { ThankYou } from "./components/ThankYou";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Card />
    </Fragment>
  );
}

export default App;

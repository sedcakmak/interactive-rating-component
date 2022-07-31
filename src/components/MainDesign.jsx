import { Fragment } from "react";
import { ReactComponent as Star } from "../images/icon-star.svg";
import Rating from "./Rating";

//import { starIcon } from "../images/icon-star.svg";

export default function MainDesign() {
  return (
    <Fragment>
      <Star />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Rating />
    </Fragment>
  );
}

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ReactComponent as Star } from "../images/icon-star.svg";
import Circle from "./Circle";
import Rating from "./Rating";
import { ratingState } from "../App";
//import CardContainer from "./CardContainer";

export default function MainDesign() {
  const { rating} = useContext(ratingState);
  const navigate = useNavigate();
  return (
    <div className="container">
      <Circle star=<AnimatedStar /> />
      <AnimatedH1>How did we do?</AnimatedH1>
      <AnimatedParagraph>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </AnimatedParagraph>
      <Rating />
      <Button {...(rating > 0 ? { onClick: () => navigate("/thankyou")} : {})}>Submit</Button>
    </div>
  );
}

const AnimatedH1 = styled.h1`
  opacity: 0;
  animation: slide-left 1s forwards;
`;

const AnimatedParagraph = styled.p`
  opacity: 0;
  animation: slide-left 1s 0.5s forwards;
`;

const AnimatedStar = styled(Star)`
  animation: starAnimation 1.4s forwards ease-out;
  & path {
    animation: changeStarColor 1s forwards ease-out;
  }

  @keyframes starAnimation {
    0% {
      transform: scale(0) rotate(360deg);
    }
    98% {
      transform: scale(1.8);
    }

    99% {
      transform: scale(3.2);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes changeStarColor {
    0% {
      fill: transparent;
    }
    98% {
      fill: var(--mediumGrey);
    }
    100% {
      fill: "#FC7614";
    }
  }
`;

const ripple = keyframes`
    0% {
      background-color: var(--white);
      background-size: 100%;
    }
    `;

const Button = styled.button`
  background-color: var(--orange);
  background-position: center;
  width: 100%;
  padding: 1rem;
  margin: 2rem 0 0.5rem;
  color: var(--white);
  border-radius: 25px;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.5s, transform 0.05s ease-in;

  &:hover {
    color: var(--orange);
    cursor: pointer;
    background: var(--white)
      radial-gradient(circle, transparent 1%, var(--orange) 1%) center/15000%;
    animation: ${ripple} 0.5s;
  }
`;

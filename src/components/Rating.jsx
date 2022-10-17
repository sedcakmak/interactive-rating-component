import { useContext } from "react";
import styled from "styled-components";
import Circle from "./Circle";
import { ratingState } from "../App";

export default function Rating() {
  const { rating, setRating } = useContext(ratingState);

  const circles = [];

  for (let index = 0; index < 5; index++) {
    circles.push(
      <Circle
        key={index + 1}
        index={index}
        shouldHover
        onClick={() => setRating(index + 1)}
        className={index + 1 === rating ? "active" : null}
      />
    );
  }
  return <Wrapper>{circles}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

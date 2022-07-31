import styled from "styled-components";
import MainDesign from "./MainDesign";

export default function Card() {
  return (
    <CardContainer>
      <MainDesign />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  background-color: var(--darkBlue);
  width: 50vw;
  height: 50vh;
  border-radius: 4px;
`;

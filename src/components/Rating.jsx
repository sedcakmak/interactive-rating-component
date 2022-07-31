import styled from "styled-components";
import Circle from "./Circle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3%;
`;
const Button = styled.button`
  background-color: var(--orange);
  width: 100%;
  height: 60px;
  color: var(--white);
  text-transform: uppercase;
`;
export default function Rating() {
  return (
    <>
      <Wrapper>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </Wrapper>
      <Button> Submit </Button>
    </>
  );
}

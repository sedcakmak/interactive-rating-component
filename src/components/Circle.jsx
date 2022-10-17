import styled from "styled-components";

export default function Circle({
  star,
  index,
  shouldHover,
  onClick,
  className,
}) {
  return (
    <CircleDiv
      shouldHover={shouldHover}
      onClick={onClick}
      className={className}
    >
      {star ? star : index + 1}
    </CircleDiv>
  );
}
const CircleDiv = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--darkBlue);
  color: var(--mediumGrey);
  transition: color ease-out 0.2s, background-color ease-out 0.3s;
  border-radius: 50%;
  ${({ shouldHover }) =>
    shouldHover &&
    "&:hover { background-color: var(--orange); color:var(--white); cursor: pointer"}
`;

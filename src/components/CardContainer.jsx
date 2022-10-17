import styled from "styled-components";

export default function CardContainer() {
  return <Card />;
}

const Card = styled.div`
  background: radial-gradient(
    circle at top,
    rgba(36, 41, 53, 1) 0%,
    rgba(24, 30, 40, 1) 100%
  );
  width: 92%;
  height: 400px;
  padding: 1rem;
  border-radius: 2rem;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  position: absolute;
  overflow: hidden;

  @media (min-width: 1440px) {
    width: 23%;
    padding: 1.5rem;
  }
`;

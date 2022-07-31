import styled from "styled-components";
export default function Circle() {
  return <CircleDiv />;
}
const CircleDiv = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: var(--orange);
`;

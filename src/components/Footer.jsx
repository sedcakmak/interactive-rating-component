import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer className="attribution">
      <StyledP>
        Challenge by{" "}
        <StyledA
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Frontend Mentor.{" "}
        </StyledA>
        &nbsp; Coded by{" "}
        <StyledA href="https://www.frontendmentor.io/profile/sedcakmak">
          Sedef Cakmak.
        </StyledA>
      </StyledP>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  position: absolute;
  bottom: 1vh;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;

const StyledP = styled.p`
  color: var(--white);
  font-size: small;
`;

const StyledA = styled.a`
  color: lightskyblue;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
  &:active {
    color: #ff4040;
    text-decoration: none;
    font-weight: normal;
  }

  &:visited {
    color: #6d4b8d;
    text-decoration: underline;
  }
`;

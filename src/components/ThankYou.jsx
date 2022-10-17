import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ReactComponent as Illustration } from "../images/illustration-thank-you.svg";
import { ratingState } from "../App";

export default function ThankYou() {
  const { rating } = useContext(ratingState);
  const navigate = useNavigate();

  function changeLocation(homepage) {
    navigate(homepage, { replace: true });
    window.location.reload();
  }

  return (
    <>
      <div className="container">
        <Wrapper>
          <AnimatedIllustration />
          <ParagraphWrapper>
            <StyledP> You selected {rating} out of 5</StyledP>
          </ParagraphWrapper>
          <AnimatedH2>Thank You!</AnimatedH2>
          <AnimatedP>
            We appreciate you taking time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </AnimatedP>
        </Wrapper>
      </div>
      <button onClick={() => changeLocation("/")}> Back to Ratings</button>
    </>
  );
}

const textAppear = keyframes`
    100% {
      opacity: 1;
    }
    `;

const AnimatedH2 = styled.h2`
opacity: 0;
animation: ${textAppear} 3s .5s ease forwards;
`

const AnimatedP = styled.p`
opacity: 0;
animation: ${textAppear} 3s .9s ease forwards;
`


const AnimatedIllustration = styled(Illustration)`
animation: wiggle 2.5s;

@keyframes wiggle {
  0% { transform: rotate(0deg); }
 80% { transform: rotate(0deg); }
 85% { transform: rotate(5deg); }
 95% { transform: rotate(-5deg); }
100% { transform: rotate(0deg); }
}
`



const Wrapper = styled.div`
  text-align: center;
`;

const StyledP = styled.p`
  color: #fc7614;
  padding: 0.2rem 0;
`;

const ParagraphWrapper = styled.div`
  background-color: var(--darkBlue);
  border-radius: 2rem;
  width: 60%;
  margin: 1rem auto 0;
  animation: scale-up .5s;

@keyframes scale-up {
  0% { transform: scale(0); }
 50% { transform: scale(1.2); }
100% { transform: scale(1); }
}
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
--orange: hsl(25, 97%, 53%);
--white: hsl(0, 0%, 100%);
--lightGrey: hsl(217, 12%, 63%);
--mediumGrey: hsl(216, 12%, 54%);
--darkBlue: hsl(213, 19%, 18%);
--veryDarkBlue: hsl(216, 12%, 8%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Overpass", sans-serif;
  font-size: 15px;
  font-weight: 400;
  background-color: var(--veryDarkBlue);
}

h1,h2 {
  color: var(--white);
  margin: 2rem 0 0.5rem;
}

.container {
    background: radial-gradient(
    circle at top,
    rgba(36, 41, 53, 1) 0%,
    rgba(24, 30, 40, 1) 100%
  );
  width: 92%;
  padding: 1rem;
  border-radius: 2rem;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  position: absolute;
  overflow: hidden;

  @media (min-width: 1440px) {
    width: 22.5%;
    padding: 1.5rem;
  }
}

p {
  color: var(--lightGrey);
  margin-bottom: 2rem;
  line-height: 1.5rem;
}

.active {
background-color:var(--mediumGrey) !important;
color: var(--white) !important;
animation: scale-up .1s;
}

.active:hover {
  background-color:var(--mediumGrey);
}

@keyframes scale-up {

  100% {
   transform: scale(1.2);
  }
}

@keyframes slide-left {
  0% {
    transform: translateX(400px);
    color: transparent;
  }
  100% {
    transform: translateX(0);
    opacity:1;
    }
}

  @media (min-width: 1440px) {
p {
  padding-right: 1rem;
}
  }

`;

export default GlobalStyle;

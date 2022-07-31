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

body {
  font-family: "Overpass", sans-serif;
  font-size: 15px;
  font-weight: 400;
  background-color: var(--veryDarkBlue);
}

h1 {
  color: var(--white);
}

p {
  color: var(--lightGrey);
}

`;

export default GlobalStyle;

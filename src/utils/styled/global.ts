import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }
  @keyframes fade {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
`;

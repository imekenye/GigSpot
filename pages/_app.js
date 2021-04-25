import { normalize } from "styled-normalize";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
 // default fonts
 @font-face {
   font-family: "Everett";
   src: url("/fonts/Everret/Everret-Regular.ttf");
   font-style: normal;
   font-weight: 400;
   font-display: block;
 }

 @font-face {
   font-family: "Everett";
   src: url("/fonts/Everret/Everret-Medium.ttf");
   font-weight: 500;
   font-display: block;
 }

  @font-face {
    font-family: "Everett";
    src: url("/fonts/Everret/Everret-Light.ttf");
    font-weight: 200;
    font-display: block;
  }
body{
   padding: 0;
   margin: 0;
   height: 100vh;
   color: white;
  font-family: Everett, sans-serif;
  background: #000;
 }
 *,html,h1,h2,h3,h4,p{
   margin:0;
 }
 
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

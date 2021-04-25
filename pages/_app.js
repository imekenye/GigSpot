import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

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
body{
   padding: 0;
   margin: 0;
   height: 100%;
  font-family: Everett, sans-serif;
 }
 *,html,h1,h2,h3,h4,p{
   margin:0;
 }
 
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

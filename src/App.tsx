import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// react95 doesn't have type bindings
// @ts-ignore
import { styleReset } from 'react95';
// @ts-ignore
import original from 'react95/dist/themes/original';
// @ts-ignore
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
// @ts-ignore
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import Footer from './components/Footer';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background-color: #008080;
    background-image: url('/logo192.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
  ${styleReset}
`;

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Footer />
    </ThemeProvider>
  </div>
);

export default App;
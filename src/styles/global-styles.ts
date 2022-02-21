import { createGlobalStyle } from 'styled-components';

import { StyleConstants } from './StyleConstants';
import { normalize } from './normalize';
import { typography } from './typography';
import { carousel } from './carousel';

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${typography}
  ${carousel}

  main {
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0 !important;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    line-height: 1.6;
  }

  .css-1a4cg4j-MuiButtonBase-root-MuiTab-root {
    text-transform: none !important;
    color: ${p => p.theme.color.colorText} !important;

  }

  * {
    box-sizing: inherit;
  }

  ul, ol {
    // doesn't do RTL, it break a sidebar
    padding-left: 15px;
    margin-bottom: 0;
  }

  a {
    color: ${StyleConstants.COLOR_BLUE};
    transition: all 0.3s;

    &:hover {
      text-decoration: none;
      color: ${StyleConstants.COLOR_BLUE_HOVER};
    }
  }

  img {
    width: 100%;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  button, input, optgroup, select, textarea {
    font-family: 'Poppins', sans-serif; 
  }

  .scroll {

    .scrollbar-track {
      background: transparent;

      &.scrollbar-track-y {
        width: 4px;
        ${p => p.theme.direction['margin-right']}: 5px;
      }
    }

    .scrollbar-thumb {
      opacity: 0.5;
      transition: height 0.3s;
      cursor: pointer;
      background: ${p => p.theme.color.colorScrollbar};
    }
  }

  .modal-content {
    padding: 0;
    text-align: ${p => p.theme.direction['left']};
    border-radius: 8px;
    border: none;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    padding: 50px 40px 60px 40px;
    text-align: center;
    background-color: ${p => p.theme.color.colorBackground};
    color: ${p => p.theme.color.colorText};
  }

  .product_card{
    background-color: ${p => p.theme.color.colorBackground};
    color: ${p => p.theme.color.colorText};
  }

  .MuiRating-readOnly{
    pointer-events: none;  
  }
  
`;

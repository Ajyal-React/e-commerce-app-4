// import styled, { keyframes } from "styled-components";

// const rotate360 = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Spinner = styled.div`
//   animation: ${rotate360} 1s linear infinite;
//   transform: translateZ(0);
  
//   border-top: 2px solid grey;
//   border-right: 2px solid grey;
//   border-bottom: 2px solid grey;
//   border-left: 4px solid black;
//   background: transparent;
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
// `;

// export default Spinner;

import React from 'react';
import styled from 'styled-components';

const Spinner = () => (
  <StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);

const StyledSpinner = styled.svg`
    animation: rotate 2s linear infinite;
    margin: -25px 0 0 -25px;
    width: 150px;
    height: 150px;
    /* position: relative;
    top: 50%;
    bottom: 50%; */


  
    & .path {
        stroke: #5652BF;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }
    
    @keyframes rotate {
        100% {
        transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;

export const Container = styled('div')`
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
`
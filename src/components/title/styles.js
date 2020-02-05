import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
        opacity: 0;
        top: 100px;
    }
    100% {
        opacity: 1;
        top: 0;    
    }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  animation: ${animation} 2s linear;
`;

export const Title = styled.h2`
    font-family: sans-serif;
    color: #fff;
    font-size: 32px;
    text-shadow: 1px 1px 5px #A6A6A6;
`;

import styled from 'styled-components';

export const Image = styled.img`
  width: 35%;
  margin-bottom: 30px;

  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 7s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 18px;
`;

export const SampleWrapper = styled.div`
  text-align: center;
  width: 800px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -80%);
`;

export const SampleContainer = styled.div`
  background-color: #222222;
  height: 100vh;
  color: #ffffff;
`;

export const Strong = styled.strong`
  font-size: 16px;
`;

export const Anchor = styled.a`
  color: #61dafb;
  display: block;
  margin-top: 30px;
`;

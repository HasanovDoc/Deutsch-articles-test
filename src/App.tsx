import React from 'react';
import './App.css';
import Main from './pages/Main/Main';
import styled, { keyframes } from 'styled-components';


function App() {
  return (
    <div className="App">
      <AnimatedBackground>
        <Main />
      </AnimatedBackground>
    </div>
  );
}

export default App;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AnimatedBackground = styled.div`
  width: 100%;
  height: 100vh;
  /* background-image: url("../asseets/img/background.jpg"); */
  /* background-image: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
  /* background-image: linear-gradient(45deg, #0b0f0c, #1d2021, #32363a, #4b4e52); */
  /* background-image: linear-gradient(45deg, #000000, #FF0000, #FFD700); */
  /* background: linear-gradient(270deg, #000000, #FF0000, #FFD700);
  background-size: 600% 600%;
  animation: ${gradientAnimation} 5s ease-in-out infinite; */
`;
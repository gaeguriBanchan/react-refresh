import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const H1 = styled.h1`
  color: tomato;
`;

const About = () => {
  return (
    <Wrapper>
      <H1>About!!!</H1>
    </Wrapper>
  );
};

export default About;

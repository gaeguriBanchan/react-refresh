import React from 'react';
import { styled } from 'styled-components';
import { user } from '../db';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const H1 = styled.h1`
  color: tomato;
`;
// const user = [];
const Ul = styled.ul`
  color: white;
  li {
    a {
      text-decoration: none;
    }
  }
`;

const About = () => {
  return (
    <Wrapper>
      <H1>About!!!</H1>
      {/* <h2>{user[0].name}</h2> */}
      <Ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </Ul>
    </Wrapper>
  );
};

export default About;

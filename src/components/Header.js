import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderComponent = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  background-color: yellow;
  ul {
    display: flex;
    li {
      margin: 10px 5px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderComponent>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
      </ul>
    </HeaderComponent>
  );
};

export default Header;

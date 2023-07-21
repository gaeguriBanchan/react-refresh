import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate('/about');
  };
  return (
    <HeaderComponent>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </HeaderComponent>
  );
};

export default Header;

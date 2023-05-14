import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src='./images/logo.jpeg' alt='my logo' className='logo'></img>
      </NavLink>
      <Nav/>
    </MainHeader>
  )
}
const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: #7accff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo{
        height: 100px; 
        width: 100px;
    }
`;

export default Header

import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
   background-color: #8e24c2;
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 60px;
`;

const NavItem = styled.p`
  font-size: 14px;
  font-family: 'Read';
  font-weight: bold;
  color: #f2f2fa;
  padding: 10px;
`;

function Header() {
  return (
    <Nav>
      <NavItem>Home</NavItem>
      <NavItem>Contato</NavItem>
      <NavItem>Sobre</NavItem>
    </Nav>
  );
}

export default Header;
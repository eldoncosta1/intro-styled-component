import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8e24c2;
  height: 90px;
`;

const FooterItem = styled.div`
  text-decoration: none;
  font-size: 16px;
  color: #f2f2fa;
  font-weight: bold;

`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterItem>Aula sobre Styled Components </FooterItem>  
      </FooterContainer>
    </>
  );
}

export default Footer;
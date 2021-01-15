import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

const ContainerContent = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 500px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ContentItem = styled.p`
  color: #000;
  background-color: #f2f2fa;
  text-align: center;
  font-family: "Read";
  width: 550px;
  padding: 10px;
  box-sizing: border-box;
  margin: 40px;
`;

function Content() {
  return (
    <>
      <ContainerContent>
        
        <ContentItem>
        O incentivo ao avanço tecnológico, assim como a contínua expansão de nossa atividade desafia a capacidade de equalização das diversas correntes de pensamento
        O incentivo ao avanço tecnológico, assim como a contínua expansão de nossa atividade desafia a capacidade de equalização das diversas correntes de pensamento
        </ContentItem>
        <ContentItem>
        O incentivo ao avanço tecnológico, assim como a contínua expansão de nossa atividade desafia a capacidade de equalização das diversas correntes de pensamento
        </ContentItem>
      </ContainerContent>
    </>
  );
}

export default Content;
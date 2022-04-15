import React from 'react'
import TdCard from "./TdCard";
import styled from "styled-components";


const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ListTitle = styled.h4`
  transition: background 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
`;


const TdList = (props) => {
    const {title, cards} = props
  return (
    <ListContainer>
         <TitleContainer>
            <ListTitle>{title}</ListTitle>
         </TitleContainer>
         
          {cards.map(card => <TdCard title={card.title} />)}
    </ListContainer>
  )
}


export default TdList







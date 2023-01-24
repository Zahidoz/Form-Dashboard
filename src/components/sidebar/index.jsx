import React from 'react'
import * as S from './styled'
import sidebarSteps from "../../Data/sidebar.json";


const Sidebar = () => {
  return (
    <S.Sidebar>
      {
        sidebarSteps.map(step=>{
          return (
            <S.Item key={step.id}>
              <S.ItemNumber>{step.number}</S.ItemNumber>
              <S.ItemBody>
                <S.SubTitle>{step.title}</S.SubTitle>
                <S.Title>{step.subtitle}</S.Title>
              </S.ItemBody>
            </S.Item>
          );
        })
      }
    </S.Sidebar>
  );
};

export default Sidebar; 
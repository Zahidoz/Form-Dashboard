import React from 'react'
import * as S from "./styled";


const Step = () => {
  return (
    <S.Step>
      <S.StepHeader>
        <S.HeaderTitle>Title</S.HeaderTitle>
        <S.HeaderSubTitle>SubTitle</S.HeaderSubTitle>
      </S.StepHeader>
      <S.Body>Body</S.Body>
      <S.Footer>
        <S.GoBackButton>Back</S.GoBackButton>
        <S.GoNextButton>Next</S.GoNextButton>
      </S.Footer>
    </S.Step>
  );
}

export default Step; 
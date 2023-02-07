import React from 'react'
import * as S from "./styled";


const Step = ({ title, subTitle, hasBackBtn, hasNextBtn, children }) => {
  return (
    <S.Step>
      <S.StepHeader>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.HeaderSubTitle>{subTitle}</S.HeaderSubTitle>
      </S.StepHeader>
      <S.Body>{children}</S.Body>
      <S.Footer>
        {hasBackBtn && <S.GoBackButton>Back</S.GoBackButton>}
        {hasNextBtn && <S.GoNextButton>Next</S.GoNextButton>}
      </S.Footer>
    </S.Step>
  );
};

export default Step; 
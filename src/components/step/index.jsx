import React from 'react'
import * as S from "./styled";


const Step = ({ goBack, handleSubmit, title, subTitle, hasBackBtn, hasNextBtn, children }) => {
  return (
    <S.Step onSubmit={handleSubmit}> 
      <S.StepHeader>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.HeaderSubTitle>{subTitle}</S.HeaderSubTitle>
      </S.StepHeader>
      <S.Body>{children}</S.Body>
      <S.Footer>
        {hasBackBtn && <S.GoBackButton type='button' onClick={goBack}>Back</S.GoBackButton>}
        {hasNextBtn && <S.GoNextButton type="submit">Next</S.GoNextButton>}
      </S.Footer>
    </S.Step>
  );
};

export default Step; 
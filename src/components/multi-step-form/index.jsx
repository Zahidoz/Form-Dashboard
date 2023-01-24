import React from 'react'
import Sidebar from '../sidebar';
import Step from '../step';

import * as S from './styled';

const MultiStepForm = () => {
  return (
    <S.MultiStepForm>
        <Sidebar/>
        <Step/>
    </S.MultiStepForm>
  )
}

export default MultiStepForm;
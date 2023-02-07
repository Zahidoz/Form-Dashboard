import React, { useState } from 'react'
import Sidebar from '../sidebar';
import Step1 from '../step-1';
import Step2 from '../step-2';
import Step3 from '../step-3';
import Step4 from "../step-4";

import * as S from './styled';  

  const Steps = {
    step1: {
      component: Step1,
      title: "Your Info",
      subTitle: "Please provide your name, email adress and phone number",
      hasNextBtn: true,
    },
    step2: {
      component: Step2,
      title: "Select your plan",
      subTitle: "You have option of monthly or yearly billing",
      hasNextBtn: true,
      hasBackBtn: true,
    },
    step3: {
      component: Step3,
      title: "Pick add-ons",
      subTitle: "Add-ons help enhance your gaming experiance",
      hasNextBtn: true,
      hasBackBtn: true,
    },
    step4: {
      component: Step4,
      title: "Fishing up",
      subTitle: "Double-check everything looks OK before confirming",
      hasBackBtn: true,
    },
  };

const MultiStepForm = () => {

  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
  });

  const [active,setActive] = useState('step1');
  const ActiveStep = Steps[active].component;

  const handleStepSubmit = (stepId,nextStep,stepData) =>{
    setFormData({
      ...formData,
      [stepId]:stepData
    })
    setActive(nextStep)
  }
 
  console.log(formData)

  const handleBack = () => {
    const currentStepNumber = Number(active.slice(-1));
    setActive(`step${currentStepNumber - 1}`);
  }

  return (
    <S.MultiStepForm>
      <Sidebar activeStep={active} />
      <ActiveStep
        {...Steps[active]}
        onStepSubmit={handleStepSubmit}
        goBack={handleBack}
        formData={formData}
      />
    </S.MultiStepForm>
  );
}

export default MultiStepForm;
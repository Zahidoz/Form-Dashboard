import React from "react";
import Step from "../step";
import * as S from "./styled";
import FormJson from "../../Data/steps.json";
import {
  Icons,
  DEAFAULT_PLAN,
  DEAFAULT_BILLING_TYPE,
  MONTHLY,
  YEARLY
} from "./constants"

import { useState } from "react";


const { step2 } = FormJson;

const Step2 = (props) => {
  
  const [billingType, setBillingType] = useState(DEAFAULT_BILLING_TYPE);
  const [plan, setPlan] = useState(DEAFAULT_PLAN);

  const changePlan = (newPlan) => {
    setPlan(newPlan);
  };
  const newBilling = (newBilling) => {
    setBillingType(newBilling);
  };

  return (
    <Step {...props}>
      <S.Step2>
        <S.RadioGroup>
          {step2[billingType].map((item) => (
            <S.RadioLabel key={item.id} isSelected={item.id === plan}>
              <S.RadioInput
                type="radio"
                name="plan-type"
                onChange={() => changePlan(item.id)}
              ></S.RadioInput>
              <S.Icon src={Icons[item.id]} />
              <S.Title>{item.title}</S.Title>
              <S.SubTitle>{item.price}</S.SubTitle>
              {billingType === YEARLY && (
                <S.Description>{item.description}</S.Description>
              )}
            </S.RadioLabel>
          ))}
        </S.RadioGroup>
        <S.BillingGroup>
          <S.BillingButton
            type="button"
            onClick={() => newBilling(MONTHLY)}
            isSelected={billingType === MONTHLY}
          >
            Monthly
          </S.BillingButton>
          <S.BillingButton
            type="button"
            onClick={() => newBilling(YEARLY)}
            isSelected={billingType === YEARLY}
          >
            Yearly
          </S.BillingButton>
        </S.BillingGroup>
      </S.Step2>
    </Step>
  );
};

export default Step2;

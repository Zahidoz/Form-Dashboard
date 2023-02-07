import React from "react";
import * as S from "./styled";
import Step from "../step";
import apis from "../../Data/steps.json";

const Step1 = ({onStepSubmit,formData,...props}) => {
  const { step1 } = apis; 
  const hasError = false

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const formProperties = Object.fromEntries(data);
    onStepSubmit("step1","step2", formProperties);
  }

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step1>
        {step1.map((item) => {
          return (
            <S.FormItem hasError={hasError} key={item.id}>
              <S.Label htmlFor={item.id}>{item.label}</S.Label>
              <S.Input
                defaultValue={formData.step1[item.id]}
                name={item.id}
                id={item.id}
                type={item.type}
                placeholder={item.placeholder}
              ></S.Input>
              {hasError && <S.ErrorMessage>This field is required!</S.ErrorMessage>}
            </S.FormItem>
          );
        })}
      </S.Step1>
    </Step>
  );
};

export default Step1;

import React, { useState } from "react";
import Step from "../step";
import * as S from "./styled";
import api from "../../Data/steps.json";

const { step3 } = api;

const Step3 = ({ onStepSubmit, formData, ...props }) => {
  const {billingType} =formData.step2;
  const [selectedAddons, setSelectedAddons] = useState([]);

  const changeSelectedAddons = (checked, selectedItem) => {
    if (checked) {
      setSelectedAddons([...selectedAddons, selectedItem]);
    } else {
      setSelectedAddons(
        selectedAddons.filter((data) => data.id !== selectedItem.id)
      );
    }
  };
  const checkSelected = (id) => selectedAddons.some((arr) => arr.id === id);

  const onSubmit = (e) => {
    e.preventDefault();
    
    onStepSubmit("step3", "step4", selectedAddons);
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step3>
        {step3[billingType].map((item) => (
          <S.Item key={item.id} isSelected={checkSelected(item.id)}>
            <S.Input
              onChange={(e) => changeSelectedAddons(e.target.checked, item)}
              type="checkbox"
            ></S.Input>
            <S.Body>
              <S.Title>{item.title}</S.Title>
              <S.SubTitle>{item.subTitle}</S.SubTitle>
            </S.Body>
            <S.Price>{item.price}</S.Price>
          </S.Item>
        ))}
      </S.Step3>
    </Step>
  );
};

export default Step3;

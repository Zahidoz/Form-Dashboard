import React, { useState } from "react";
import Step from "../step";
import * as S from "./styled";
import api from "../../Data/steps.json";

const { step3 } = api;

const Step3 = (props) => {
  const MONTHLY = "monthly";
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
  const checkSelected = (id) => selectedAddons.some((arr) => arr.id === id)


  return (
    <Step {...props}>
      <S.Step3>
        {step3[MONTHLY].map((item) => (
          <S.Item
            key={item.id}
            isSelected={checkSelected(item.id)}
          >
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

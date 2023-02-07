import styled, { css } from "styled-components";

export const Step2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;
export const RadioGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;
export const RadioLabel = styled.label`
  flex: 1;
  border: 1px solid var(--light-gray);
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: 0.2s border;
  ${({ isSelected }) => 
    isSelected &&
      css`
        background-color: var(--alabaster);
        border-color: var(--purplish-blue);
      `}
  &:hover {
    border: 1px solid var(--purplish-blue);
  }
`;
export const RadioInput = styled.input`
  display: none;
`;
export const Icon = styled.img`
  margin-bottom: 28px;
`;
export const Title = styled.h3`
  font-family: 700;
`;
export const SubTitle = styled.h5`
  font-size: 14px;
  color: var(--cool-gray);
`;
export const Description = styled.p`
    font-size: 12px;
    color: var(--cool-gray);
`

export const BillingGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`
export const BillingButton = styled.button`
  background-color: var(--alabester);
  border: 1px solid var(--cool-gray);
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--cool-gray);
  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: var(--alabaster);
      border-color: var(--purplish-blue);
    `}
`;

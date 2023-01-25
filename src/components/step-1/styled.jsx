import styled ,{css} from "styled-components";

export const Step1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid var(--light-gray);
  border-radius: 8px;
  color: var(--marine-blue);
  font-weight: 500;
  transition: border 0.2s ease;
  &::placeholder {
    color: var(--cool-gray);
  }
  &:hover {
    border-color: var(--purplish-blue);
  }
`;
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  ${Input} {
    ${({ hasError }) =>
      hasError &&
      css`
        border-color: var(--strawberry-red);
      `}
  }
`;
export const Label = styled.label`
    font-size: 14px;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  color: var(--strawberry-red);
`;

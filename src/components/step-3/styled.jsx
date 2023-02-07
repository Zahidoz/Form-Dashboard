import styled, {css} from 'styled-components'

export const Step3 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const Item = styled.label`
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 12px;
  border: 1px solid var(--light-gray);
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border: 1px solid var(--purplish-blue);
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid var(--purplish-blue);
      background-color: var(--alabaster);
    `}
`;
export const Input = styled.input`

`;
export const Body = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;
export const Title = styled.h3`
    font-weight: 500;

`;
export const SubTitle = styled.p`
    font-size: 14px;
    font-weight: 300;

`;
export const Price = styled.h4``;

 
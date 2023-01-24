import styled from 'styled-components'

 export const Step = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    flex: 1;
 `;
 export const StepHeader = styled.header``;
 export const HeaderTitle = styled.h2`
        font-size: 36px;
        font-weight: 700;
 `;
 export const HeaderSubTitle = styled.h4`
    color: var(--cool-gray);
 `;
 export const Body = styled.div`
    flex: 1;
 `;
 export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
 `;
 export const GoBackButton = styled.button`
    font-size: 14px;
    color: var(--cool-gray);
 `;
 export const GoNextButton = styled.button`
    background-color: var(--marine-blue);
    color: var(--white);
    padding: 12px 24px;
    border-radius: 8px;
 `;
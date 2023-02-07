import styled , {css} from "styled-components";
import sidebarImg from "../../assets/images/bg-sidebar-desktop.svg";

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-image: url(${sidebarImg});
  width: 25%;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  padding: 24px;
`;
export const ItemNumber = styled.span`
  border: 1px solid var(--white);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${ItemNumber} {
    ${({ isActive }) =>
      isActive === true &&
      css`
        background-color: var(--magnolia);
        color: var(--marine-blue);
      `}
  }
`;


export const ItemBody = styled.div`
`;

export const SubTitle = styled.h5`
    font-weight: 300;
    font-size: 13px;
`;

export const Title = styled.h2`
    font-weight:500;
    letter-spacing: .6px;
    color: #fff;
    font-size: 18px;
`;

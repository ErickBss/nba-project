import styled from "styled-components";

import DesignSystem from "../design-system.json";

export const Text = styled.p`
font-weight: 500;
color: ${DesignSystem.color.neutrals['light']};

/* Tablet */
@media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.3rem;
  }

 /* Mobile */
 @media screen and (max-width: 767px) {
     font-size: 13px;
  }
`;

export const SubTitle = styled.h3`
font-size: 14px;
color: ${DesignSystem.color.neutrals['light']};

 /* Tablet */
 @media screen and (min-width: 768px) and (max-width:1023px) {
    font-size: 1.4rem;
  }


 /* Mobile */
 @media screen and (max-width: 767px) {
     font-size: 12px;
  }
`;

export const Option = styled.button`
background-color:${DesignSystem.color.neutrals['dark']};
cursor: pointer;
padding: 5px 10px;
border: 1px solid ${DesignSystem.color.principal["primary"]};
color: ${DesignSystem.color.neutrals['light']};
transition: 0.3s;
&:hover{
    font-weight: bold;
    padding: 6px 20px;
    border: 1px solid ${DesignSystem.color.principal["secondary"]};
}

 /* Tablet */
 @media screen and (min-width: 768px) and (max-width:1023px) {
  height: 50px;
  width: 200px;
  text-align: center;
  font-size: 1.5rem;
  }


`;
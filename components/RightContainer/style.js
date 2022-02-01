import styled from "styled-components";

import DesignSystem from "../../design-system.json";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: ${DesignSystem.color.neutrals["dark"]};


 /* Tablet */
 @media screen and (min-width: 768px) and (max-width:1023px) {
    padding-top: 3%;
    min-height: 60vh;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    width: 100vw;
    min-height: 45vh;
  }
`;

export const BoxImg = styled.img`
  background-color: ${DesignSystem.color.principal["primary"]};
  padding: 20px;
  height: 75vh;

 /* Tablet */
 @media screen and (min-width: 768px) and (max-width:1023px) {
    height: 50vh;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    height: 40vh;
    padding: 15px;
  }
`;

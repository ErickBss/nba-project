import styled from "styled-components";

import DesignSystem from "../../design-system.json";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${DesignSystem.color.neutrals["dark"]};

  /* Desktop S */
  @media screen and (min-width: 1023px) and (max-width: 1300px) {
    justify-content: flex-start;
    width: 100vw;
    padding-left: 20px;
  }

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    padding-top: 3%;
    min-height: 60vh;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    width: 100vw;
    min-height: 45vh;
    padding-top: 10%;
  }
`;

export const BoxImg = styled.img`
  background-color: ${DesignSystem.color.principal["primary"]};
  padding: 10px;
  height: 60vh;

  /* Desktop S */
  @media screen and (min-width: 1023px) and (max-width: 1300px) {
  
    max-height: 40vh;
    max-width: 100%;
  }

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-height: 40vh;
    max-width: 100%;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    max-height: 28vh;
    max-width: 90%;
    padding: 5px;
  }
`;

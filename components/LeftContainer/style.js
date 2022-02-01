import styled from "styled-components";

import DesignSystem from "../../design-system.json";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${DesignSystem.color.neutrals["dark"]};


   /* Tablet */
   @media screen and (min-width: 768px) and (max-width: 1023px) {
    min-height: 60vh;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    align-items: center;
    gap: 35px;
    min-height: 45vh;
    width: 100vw;
  }
`;

export const BackTitle = styled.div`
  color: ${DesignSystem.color.neutrals["grey"]};
  font-size: 12rem;
  font-weight: bold;

  /* Mobile */
  @media screen and (max-width: 767px) {
    font-size: 7rem;
  }
`;

export const BoxHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxText = styled.p`
  color: ${DesignSystem.color.neutrals["light"]};
  font-size: 1.2rem;
  width: 60%;

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    text-align: center;
    width: 75%;
    font-size: 1.7rem;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    text-align: center;
    font-size: 1rem;
    width: 70%;
  }
`;

export const IconArea = styled.div`
  display: flex;
  width: 60%;
  justify-content: flex-start;
  gap: 15px;

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 70%;
    justify-content: space-between;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    justify-content: center;
    gap: 30px;
  }
`;

export const BoxIcon = styled.i`
  background-color: ${DesignSystem.color.principal["primary"]};
  padding: 5px 8px;
  font-size: 2rem;

    /* Tablet */
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      padding: 2px 10px;
      font-size: 5rem;
  }

`;

export const BoxTitle = styled.h1`
  position: absolute;
  text-align: center;
  color: ${DesignSystem.color.neutrals["light"]};
  font-size: 2rem;

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 3rem;
  }
`;

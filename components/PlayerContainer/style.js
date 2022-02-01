import styled from "styled-components";
import DesignSystem from "../../design-system.json";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  padding: 5vh 0 5vh 0;
  background-color: ${DesignSystem.color.neutrals["dark"]};
  min-height: 100vh;

  hr {
    display: block;
    width: 60%;
    height: 1px;
    border: 0;
    border-top: 1px solid ${DesignSystem.color.principal["secondary"]};
    margin: 1em 0;
    padding: 0;
  }

    /* Mobile */
    @media screen and (max-width: 767px) {
     width: 100vw;
     margin-bottom: 20px;
  }
`;

export const Title = styled.h1`
  color: ${DesignSystem.color.neutrals["light"]};
  border-bottom: 5px solid ${DesignSystem.color.principal["primary"]};
  background-color: red;
`;

export const Table = styled.table`
  width: 70%;
  min-height: 80px;
  color: ${DesignSystem.color.neutrals["light"]};
  border-collapse: collapse;

  /* Mobile */
  @media screen and (max-width: 767px) {
    width: 40vw;
    
  }
`;

export const Block = styled.tr`
  border: 1px solid ${DesignSystem.color.principal["primary"]};
  border-collapse: collapse;
  text-align: center;
  padding: 20px;

    /* Mobile */
    @media screen and (max-width: 767px) {
    padding-bottom: 20vh;
    font-size: 14px;
  }
`;

export const Topic = styled.th`
  border: 1px solid ${DesignSystem.color.principal["primary"]};
  border-collapse: collapse;
  padding: 30px;

  /* Mobile */
  @media screen and (max-width: 767px) {
    padding: 15px;
    font-size: 14px;
  }
`;

export const Line = styled.td`
  border: 1px solid ${DesignSystem.color.principal["primary"]};
  border-collapse: collapse;
  padding: 30px;
  height: 40px;

  /* Mobile */
  @media screen and (max-width: 767px) {
    padding: 15px;
    font-size: 14px;
    height: 0;
    
  }
`;

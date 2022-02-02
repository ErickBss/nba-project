import styled from "styled-components";

import DesignSystem from "../../design-system.json";

const Container = styled.header`
  z-index: 2;
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${DesignSystem.color.neutrals["dark"]};
  color: ${DesignSystem.color.neutrals["light"]};
  padding: 5px 0;


  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
`;

const Logo = styled.img`
  max-width: 6vw;

  /* Desktop S */
  @media screen and (min-width: 1023px) and (max-width: 1300px) {
    max-width: 11vw;
  }

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 16vw;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    max-width: 20vw;
  }
`;

const Nav = styled.ul`
  width: 40%;
  padding-right: 5%;
  display: flex;
  justify-content: space-between;
  color: ${DesignSystem.color.neutrals["grey"]};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${DesignSystem.color.neutrals["grey"]};
  }

  /* Desktop S */
  @media screen and (min-width: 1023px) and (max-width: 1300px) {
    font-size: 2rem;
    width: 60%;
    padding-right: 0;
  }

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
    padding-right: 0%;
    font-size: 2rem;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    width: 100%;
    justify-content: space-around;
    padding-right: 1%;
    font-size: 1rem;
  }
`;

export { Logo, Container, Nav };

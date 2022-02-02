import styled from "styled-components";

import DesignSystem from "../../design-system.json";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${DesignSystem.color.neutrals["dark"]};
  min-height: 80vh;
  padding-top: 5vh;
`;

export const Head = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: ${DesignSystem.color.neutrals["light"]};

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 3.3rem;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    font-size: 1.7rem;
  }
`;

export const BoxFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 10vh;

  /* Desktop S */
  @media screen and (min-width: 1023px) and (max-width: 1300px) {
    width: 60vw;
  }

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80vw;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    width: 80vw;
  }
`;

export const BoxFilterOptions = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 40px;
  padding-top: 10px;
  color: ${DesignSystem.color.neutrals["light"]};
`;

export const TeamsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding-top: 50px;

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    grid-template-columns: repeat(3, 1fr);
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    width: 100vw;
    padding-top: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${DesignSystem.color.principal["primary"]};
  border-bottom: 6px solid ${DesignSystem.color.principal["secondary"]};
  border-radius: 5px;
  width: 15vw;
  height: 30vh;

  img {
    object-fit: fill;
    width: 10vw;
    max-height: 25vh;
  }

  /* Desktop S */
  @media screen and (min-width: 1023px) and (max-width: 1300px) {
    width: 18vw;
    img {
      width: 15vw;
      max-height: 25vh;
    }
  }

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 25vw;
    height: 20vh;

    img {
      width: 20vw;
      max-height: 17vh;
    }
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    width: 35vw;
    height: 18vh;

    img {
      width: 23vw;
      max-height: 17vh;
    }
  }
`;

export const Description = styled.div`
  padding: 10px 0 20px 0;
  width: 15vw;

  div {
    display: flex;
    justify-content: space-between;
  }

  /* Desktop S */
  @media screen and (min-width: 1023px) and (max-width: 1300px) {
    width: 18vw;
  }
  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 25vw;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    width: 35vw;
  }
`;

export const City = styled.aside`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: bold;
  color: ${DesignSystem.color.neutrals["light"]};
  aside {
    display: flex;
    gap: 5px;
  }
  p {
    color: ${DesignSystem.color.principal["primary"]};
  }
  a {
    cursor: pointer;
  }

  /* Desktop S */
  @media screen and (min-width: 1023px) and (max-width: 1300px) {
  }

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    font-size: 1.2rem;
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 5px;
    font-size: 12px;
    p {
      font-size: 11px;
    }
    aside {
      gap: 5px;
    }
  }
`;

export const Icon = styled.i`
  font-size: 1rem;

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  font-size: 10px;
  background-color: ${DesignSystem.color.neutrals["dark"]};
  cursor: pointer;
  padding: 1px 3px;
  border: 1px solid ${DesignSystem.color.principal["primary"]};
  color: ${DesignSystem.color.neutrals["light"]};
  transition: 0.3s;
  &:hover {
    font-weight: bold;
    padding: 4px 9px;
    border: 1px solid ${DesignSystem.color.principal["secondary"]};
  }
`;

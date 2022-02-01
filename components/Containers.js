import styled from "styled-components";

import DesignSystem from "../design-system.json";

const Main = styled.main`
  display: flex;
  width: 100%;
  padding-top: 1%;
  background-color: ${DesignSystem.color.neutrals["dark"]};
  min-height: 80vh;

  /* Mobile */
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;

export { Main };

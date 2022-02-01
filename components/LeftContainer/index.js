import { BiBasketball } from "react-icons/bi";
import { GiBasketballJersey, GiBasketballBasket } from "react-icons/gi";

import { Container, BoxHead, BackTitle, BoxIcon, BoxTitle, BoxText, IconArea } from "./style";

export default function LeftContainer() {
  return (
    <Container>
      <BoxHead>
        <BackTitle>NBA</BackTitle>
        <BoxTitle>NBA Home</BoxTitle>
      </BoxHead>
      <BoxText>
        Are you looking for information of your favorite NBA team? Cool, here
        you can look that and much more, statistics, ranking and records.
      </BoxText>
      <IconArea>
        <BoxIcon>
          <BiBasketball
            style={{
              textAlign: "center",
            }}
          />
        </BoxIcon>
        <BoxIcon>
          <GiBasketballJersey
            style={{
              textAlign: "center",
            }}
          />
        </BoxIcon>
        <BoxIcon>
          <GiBasketballBasket
            style={{
              textAlign: "center",
            }}
          />
        </BoxIcon>
      </IconArea>
    </Container>
  );
}

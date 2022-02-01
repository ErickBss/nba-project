import { Logo, Container, Nav } from "./style";


export default function Header () {
    return(
        <Container>
        <Logo src="/logo.png" />
        <Nav>
          <li style={{ color: "white" }}> Home </li>
          <a href="#allLeague"><li> All League </li></a>
          <a href="#players"><li> Players</li></a>
        </Nav>
      </Container>
    );

}

import { Title } from "../AllTeamsContainer/style";
import { Container, Table, Block, Topic, Line } from "./style";

export default function PlayersContainer(props) {
  return (
    <Container>
      <Title id='players'>NBA Players</Title>
      <hr></hr>

      <Table>
        <Block>
          <Topic>Name</Topic>
          <Topic>Number</Topic>
          <Topic>Position</Topic>
          <Topic>Team</Topic>
        </Block>
        {props.players.map((player) => {
          return (
            <Block>
              <Line>{player.name}</Line>
              <Line>{player.number}</Line>
              <Line>{player.position}</Line>
              <Line>{player.team}</Line>
            </Block>
          );
        })}
      </Table>
    </Container>
  );
}

import { IoPeopleSharp } from "react-icons/io5";

import DesignSystem from "../../design-system.json";

import {
  Container,
  Title,
  Head,
  BoxFilter,
  TeamsContainer,
  TeamContainer,
  BoxTeam,
  BoxFilterOptions,
  Description,
  City,
  Icon
} from "./style";
import { SubTitle, Option, Text } from "../DefaultElements";

export default function AllTeamsContainer(props) {
  console.log(props);
  return (
    <Container>
      <Head>
        <Title>All Teams</Title>
        <BoxFilter>
          <SubTitle>Filter By:</SubTitle>
          <BoxFilterOptions>
            <Option
            id="allLeague"
              onClick={() => {
                props.HandleReset(props.Default);
              }}
            >
              All League
            </Option>
            <Option
              onClick={() => {
                props.HandleFilterWest(props.Default);
              }}
            >
              West League
            </Option>
            <Option
              onClick={() => {
                props.HandleFilterEast(props.Default);
              }}
            >
              East League
            </Option>
          </BoxFilterOptions>
        </BoxFilter>
      </Head>
      <TeamsContainer>
        {props.teams.map((team) => {
          //map the array is the thing for repeat the elements
          return (
            <TeamContainer>
              <BoxTeam>
                <img src={`/teams-logos/${team.initials}.png `} />
              </BoxTeam>
              <Description>
                <div>
                  <Text>{team.team}</Text>
                  <SubTitle>{team.initials}</SubTitle>
                </div>
                <City>
                  <aside>
                    City:
                    <p>
                      {team.city} / {team.conference}
                    </p>
                  </aside>
                  <a href="#players"
                    onClick={()=>{
                      props.HandlePlayerByTeam(team.initials);
                    }}
                  >
                    <Icon>

                    <IoPeopleSharp
                      style={{
                        color: `${DesignSystem.color.principal["primary"]}`,
                        
                      }}
                    />
                    </Icon>
                  </a>
                </City>
              </Description>
            </TeamContainer>
          );
        })}
      </TeamsContainer>
    </Container>
  );
}

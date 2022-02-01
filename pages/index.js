import { useEffect, useState } from "react";

import Header from "../components/Header/index";
import LeftContainer from "../components/LeftContainer/index";
import RightContainer from "../components/RightContainer/index";
import AllTeamsContainer from "../components/AllTeamsContainer/index";
import PlayersContainer from "../components/PlayerContainer/index";

import { Main } from "../components/Containers";

export default function HomePage() {
  const [Default, setDefault] = useState([]);
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [TeamPlayers, setTeamPlayers] = useState([]);

  function APIData() {
    fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": "c350dd66femshf41572571a49fb8p1a8dd5jsnf22202b33dc4",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response.data);
        let array = [];
        response.data.forEach((element) => {
          array = [
            ...array,
            {
              id: element.id,
              initials: element.abbreviation,
              team: element.full_name,
              city: element.city,
              conference: element.conference,
            },
          ];
        });
        setDefault(array);
        setTeams(array);
        return array;
      });
  }

  function PlayerAPI() {
    fetch(
      "https://api.sportsdata.io/v3/nba/scores/json/Players?key=57e640a0d9e347768ccab789a6558aac",
      {
        method: "GET",
        headers: {
          "Ocp-Apim-Subscription-Key": "57e640a0d9e347768ccab789a6558aac",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response[400]);
        let array = [];

        response.forEach((player) => {
          array = [
            ...array,
            {
              name: player.FanDuelName,
              number: player.Jersey,
              position: player.Position,
              photo: player.PhotoUrl,
              team: player.Team,
            },
          ];
        });
        setPlayers(array);
        console.log(array);
      });
  }

  useEffect(() => {
    APIData();
    PlayerAPI();
  }, []);

  function HandleReset(teams) {
    setTeams(teams);
  }

  function HandleFilterEast(teams) {
    const East = teams.map((team) => {
      if (team.conference === "East") {
        array.push(team);
      }
    });
    console.log("conference:", array);
    setTeams(array);
  }

  let array = [];
  function HandleFilterWest(teams) {
    const west = teams.map((team) => {
      if (team.conference === "West") {
        array.push(team);
      }
    });
    console.log("conference:", array);
    setTeams(array);
  }

  function HandlePlayerByTeam(team) {
    const filter = players.map((player) => {
      if (player.team === team) {
        array.push(player);
      }
    });
    console.log("LAC:", array);
    setTeamPlayers(array);
  }

  return (
    <>
      <Header />
      <Main>
        <LeftContainer />
        <RightContainer />
      </Main>
      <AllTeamsContainer
        teams={teams}
        Default={Default}
        HandleFilterEast={HandleFilterEast}
        HandleFilterWest={HandleFilterWest}
        HandleReset={HandleReset}
        HandlePlayerByTeam={HandlePlayerByTeam}
      />
      <PlayersContainer players={TeamPlayers} />

      <div className="Footer"></div>
    </>
  );
}

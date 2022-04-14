import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import teamsImg from "../../assets/images/teams.jpg";
import playersImg from "../../assets/images/players.jpg";
import agentsImg from "../../assets/images/agents.jpg";
import mapsImg from "../../assets/images/maps.jpg";

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Item gridArea="team" position="left" onClick={() => navigate("/teams")}>
        <h1>Teams</h1>
        <img src={teamsImg} alt="teams" />
      </Item>
      <Item
        gridArea="player"
        position="left"
        onClick={() => navigate("/players")}
      >
        <h1>Players</h1>
        <img src={playersImg} alt="players" />
      </Item>
      <Item gridArea="map" position="right" onClick={() => navigate("/maps")}>
        <h1>Maps</h1>
        <img src={mapsImg} alt="maps" />
      </Item>
      <Item gridArea="agent" position="right">
        <h1>Agents</h1>
        <img src={agentsImg} alt="agents" onClick={() => navigate("/agents")} />
      </Item>
    </Container>
  );
}

const Container = styled.div`
  margin: 60px auto;
  max-width: 1200px;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: minmax(300px, 40vh) minmax(150px, 20vh);
  grid-template-areas:
    "team player"
    "map agent";
  grid-column-gap: 30px;
  grid-row-gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-areas:
      "team"
      "player"
      "map"
      "agent";
  }
`;

const Item = styled.div`
  grid-area: ${(props) => props.gridArea};
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  filter: brightness(0.8);
  h1 {
    font-size: 40px;
    color: white;
    position: absolute;
    bottom: 20px;
    line-height: 0;
    ${(props) => props.position}: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  &:hover {
    filter: brightness(1);
  }
`;

export default Home;

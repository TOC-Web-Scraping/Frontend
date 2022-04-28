import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTeam } from "../../hooks/useTeam";
import Loader from "../../components/Loader/Loader";
import BackButton from "../../components/BackButton/BackButton";
import CardTeamDetail from "../../components/CardTeamDetail/CardTeamDetail";
import CardPlayer from "../../components/CardPlayer/CardPlayer";
import "./Team.css";

function Team() {
  const { id } = useParams();
  const { data: team, isLoading, error, isError } = useTeam(id);
  const navigate = useNavigate();

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <Container>
        <h1 style={{ color: "white" }}>Error : {error.message}</h1>
      </Container>
    );
  return (
    <div className="team">
      <Container>
        <BackButton handleBackClick={() => navigate("/teams")} />
        <h2>{team.name}</h2>
        <TeamContainer>
          <div className="card">
            <CardTeamDetail team={team} />
          </div>

          <div className="achievement">
            <h5>Achievements</h5>
            <div className="achievement-table">
              <Table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Placement</th>
                    <th>Tournament</th>
                    <th>Prize</th>
                  </tr>
                </thead>
                <tbody>
                  {team.achievements.map((achievement, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{achievement.date}</td>
                        <td>{achievement.placement}</td>
                        <td>{achievement.tournament}</td>
                        <td>{achievement.prize}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </TeamContainer>
        <h4>Player Roster</h4>
        <PlayerContainer>
          {team.players.map((player) => {
            return (
              <div
                className="card"
                key={player.url}
                onClick={() => {
                  navigate(`/player/${player.url}`);
                }}
              >
                <CardPlayer player={player} />
              </div>
            );
          })}
        </PlayerContainer>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: 40px auto;
  max-width: 1200px;
  width: 90%;
  position: relative;
  h2 {
    display: flex;
    justify-content: end;
    color: #fff;
    margin-top: 5px;
    line-height: 0;
  }
  h4 {
    color: #fff;
    margin-top: 5px;
  }
`;

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
  margin-top: 30px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  .card {
    background-color: #ccc;
    border-radius: 10px;
    height: 420px;
    cursor: pointer;
  }
  .achievement {
    height: 420px;
    background-color: #ccc;
    border-radius: 10px;
    padding: 10px;
  }
  .achievement-table {
    background-color: #ccc;
    cursor: pointer;
    overflow: auto;
    height: 350px;
    &::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.352);
      border-radius: 3px;

      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;
  margin-top: 10px;
  row-gap: 15px;
  justify-content: center;

  .card {
    background-color: #ccc;
    border-radius: 10px;
    height: 300px;
    width: 220px;
    cursor: pointer;
  }
`;

export default Team;

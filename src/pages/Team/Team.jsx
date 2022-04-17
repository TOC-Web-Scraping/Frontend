import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTeam } from "../../hooks/useTeam";
import Loader from "../../components/Loader/Loader";
import BackButton from "../../components/BackButton/BackButton";

function Team() {
  const { id } = useParams();
  const { data: team, isLoading, error, isError } = useTeam(id);
  const navigate = useNavigate();
  const players = Array(5).fill(0);

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <Container>
        <h1 style={{ color: "white" }}>Error : {error.message}</h1>
      </Container>
    );
  return (
    <Container>
      <BackButton handleBackClick={() => navigate("/teams")} />
      <h2>{team.name}</h2>
      <TeamContainer>
        <div>{team.name}</div>
        <div>
          <h5>Achievements</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Placement</th>
                <th>Tournament</th>
                <th>Prize</th>
              </tr>
            </thead>
            <tbody>
              {team.achievements.map((achievement) => {
                return (
                  <tr>
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
      </TeamContainer>
      <h4>Player Roster</h4>
      <PlayerContainer>
        {players.map((player, idx) => {
          return (
            <div
              onClick={() => {
                navigate(`/player/${idx}`);
              }}
            >
              <p>Player Name</p>
            </div>
          );
        })}
      </PlayerContainer>
    </Container>
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

  div {
    background-color: #ccc;
    border-radius: 10px;
    padding: 10px;
    height: 400px;
    cursor: pointer;
    overflow: auto;
  }
`;

const PlayerContainer = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: 10px;
  justify-content: center;

  div {
    background-color: #ccc;
    border-radius: 10px;
    padding: 10px;
    height: 250px;
    max-width: 250px;
    cursor: pointer;
    flex: 1;
  }
`;

export default Team;

import React from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Col, Row, Table } from "react-bootstrap";
import CardPlayerDetail from "../../components/CardPlayerDetail/CardPlayerDetail";
import "./Player.css";
import { usePlayer } from "../../hooks/usePlayer";

function Player() {
  const { id } = useParams();

  const { data: player } = usePlayer(id);
  return (
    <div className="player" style={{ marginTop: "5vh" }}>
      <div>Player : {id}</div>
      <Container>
        <Row>
          <Col lg="4" style={{ height: "65vh" }}>
            {player ? <CardPlayerDetail player={player} /> : <></>}
          </Col>
          <Col lg="8">
            <h3 style={{ color: "white" }}>Match</h3>
            <div
              style={{
                backgroundColor: "#212129",
                width: "60vw",
                height: "250px",
                overflow: "auto",
                overflowX: "hidden",
              }}
              className="playerAchievement"
            >
              <Table
                striped
                bordered
                hover
                style={{
                  backgroundColor: "white",
                }}
              >
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Tournament</th>
                    <th>Map</th>
                    <th>K</th>
                    <th>D</th>
                    <th>A</th>
                    <th>Team</th>
                    <th>Score</th>
                    <th>vs. Team</th>
                  </tr>
                </thead>

                <tbody style={{ fontSize: "11px" }}>
                  {player?.matches.map((match) => (
                    <tr>
                      <td>{match.date}</td>
                      <td>{match.tournament}</td>
                      <td>{match.map}</td>
                      <td>{match.kill}</td>
                      <td>{match.death}</td>
                      <td>{match.assist}</td>
                      <td>{match.team1}</td>
                      <td>{match.score}</td>
                      <td>{match.team2}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            {player?.gamingGear?.mouse ? (
              <>
                <h3 style={{ color: "white", marginTop: "10px" }}>Hardware</h3>
                <Card
                  style={{
                    backgroundColor: "#c4c4c4",
                    borderRadius: "10px",
                    width: "60vw",
                  }}
                >
                  <Container>
                    <p style={{ marginTop: "15px" }}>
                      <strong>Mouse : </strong>
                      {player?.gamingGear?.mouse?.name}
                    </p>
                    <p>
                      <strong>Mousepad : </strong>
                      {player?.gamingGear?.mousepad?.name}
                    </p>
                    <p>
                      <strong>Monitor : </strong>
                      {player?.gamingGear?.monitor?.name}
                    </p>
                    <p>
                      <strong>Keyboard : </strong>
                      {player?.gamingGear?.keyboard?.name}
                    </p>
                    <p>
                      <strong>Headset : </strong>
                      {player?.gamingGear?.headset?.name}
                    </p>
                  </Container>
                </Card>
              </>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Player;

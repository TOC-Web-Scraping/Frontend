import React from "react";
import "./CardTeam.css";
function CardTeam({ team }) {
  return (
    <div className="card-team-container">
      <div className="image-team-container">
        <img alt="team" src={team.logo} />
      </div>
      <div className="cardtitle-team">{team.name}</div>
      <div className="cardbody-team">{team.location}</div>
    </div>
  );
}

export default CardTeam;

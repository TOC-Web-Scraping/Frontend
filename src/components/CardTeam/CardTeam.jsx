import React from "react";
import "./CardTram.css";
import teamsImg from "../../assets/images/teams.jpg";
function CardTeam({ title, imageUrl, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={teamsImg} />
      </div>
      <div className="cardtitle">{title}</div>
      <div className="cardbody">{body}</div>
    </div>
  );
}

export default CardTeam;

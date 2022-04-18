import React from "react";
import "./CardTram.css";
function CardTeam({ title, imageUrl, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} />
      </div>
      <div className="cardtitle">{title}</div>
      <div className="cardbody">{body}</div>
    </div>
  );
}

export default CardTeam;

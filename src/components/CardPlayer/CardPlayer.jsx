import React from "react";
import './CardPlayer.css'
function CardPlayer({ title, imageUrl, body }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} />
      </div>
      <div className="cardtitle">
        {title}
        <div className="icon-team">
        <img src={imageUrl} />
        </div>
      </div>
      <div className="cardbody">
        {body}
        <div className="icon-region">
        <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default CardPlayer;

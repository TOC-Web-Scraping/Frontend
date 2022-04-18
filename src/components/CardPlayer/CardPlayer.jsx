import React from "react";
import './CardPlayer.css'
function CardPlayer({ player }) {
  
  return (
    <div className="card-container">
      <div className="image-container">
        <img src='https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y' />
      </div>
      <div className="cardtitle">
        {player.name}
        <img src='https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y' />
      </div>
      <div className="cardbody">
        {player.country}
        <img src='https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y' />
      </div>
    </div>
  );
}

export default CardPlayer;

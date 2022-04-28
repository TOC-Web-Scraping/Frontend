import React from 'react'
import './CardTeamDetail.css'
function CardTeamDetail({team}) {
  
  return (
    <div className="detail-card-container">
    <div className="detail-image-container">
      <img src={team.logo} />
    </div>
    <div className="detail-cardtitle">{team.name}</div>
    <div className="detail-cardbody">
    <b>Location : </b>{team.location}<br/>
    <b>Region : </b>{team.region}<br/>
    <b>Total Winnings: </b>{team.totalWinnings}<br/>
    </div>
  </div>
  )
}

export default CardTeamDetail
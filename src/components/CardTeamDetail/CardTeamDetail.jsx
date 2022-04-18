import React from 'react'

function CardTeamDetail({player}) {
  return (
    <div className="detail-card-container">
    <div className="detail-image-container">
      <img src={""} />
    </div>
    <div className="detail-cardtitle">{player.name}</div>
    <div className="detail-cardbody">
    <b>Location : </b>{player.location}<br/>
    <b>Region : </b>{player.region}<br/>
    <b>CEO: </b>{player.ceo}<br/>
    <b>Manager: </b>{player.manager}<br/>
    <b>In-Game Leader: </b>{player.igl}<br/>
    <b>Total Winnings: </b>{player.total}<br/>
    <b>Founded : </b>{player.founded}<br/>
    </div>
  </div>
  )
}

export default CardTeamDetail
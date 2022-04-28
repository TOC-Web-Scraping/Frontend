import React from 'react'
import './CardPlayerDetail.css'
function CardPlayerDetail({player}) {
  return (
    <div className="detail-card-container">
    <div className="detail-image-container">
      <img src={player.imageUrl} />
    </div>
    <div className="detail-cardtitle">{player.name}</div>
    <div className="detail-cardbody">
    <b>Name : </b>{player.realName}<br/>
    <b>Born : </b>{player.born}<br/>
    <b>Country : </b>{player.country.join(' , ')}<br/>
    <b>Team : </b>{player.team}<br/>
    <b>Main Agents : </b>{player.mainAgent.join(' , ')}<br/>
    </div>
  </div>
  )
}

export default CardPlayerDetail
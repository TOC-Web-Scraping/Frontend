import React from 'react'
import './CardPlayerDetail.css'
import { useTeam } from "../../hooks/useTeam";

function CardPlayerDetail({player}) {
  const { data: team } = useTeam(player.team);
  
  const baseImageUrl = "https://raw.githubusercontent.com/TOC-Web-Scraping/scraping/main/data/images/players/";
  const playersUrl = '';
  
  function imagePlayer(player) {
    
    if (player.url && player.imageUrl){
      return baseImageUrl+player.url+"."+player.imageUrl.split(".").pop()
    }
    return 'https://www.saiterm.in.th/images/product/20210609132931_1.png'
  }
  return (
    <div className="detail-card-container">
    <div className="detail-image-container">
      <img src={imagePlayer(player)} style={{margin:"auto", height:"100%", width:"100%"}}/>
    </div>
    <div className="detail-cardtitle">{player.name}</div>
    <div className="detail-cardbody">
    <b>Name : </b>{player.realName}<br/>
    <b>Born : </b>{player.born}<br/>
    <b>Country : </b>{player.country.join(' , ')}<br/>
    <b>Team : </b>{team?.name}<br/>
    <b>Main Agents : </b>{player.mainAgent.join(' , ')}<br/>
    <b>KDA : </b>{player.avgKill}/{player.avgDeath}/{player.avgAssist}<br/>
    </div>
  </div>
  )
}

export default CardPlayerDetail
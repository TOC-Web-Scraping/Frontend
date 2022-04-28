import React from "react";
import "./CardPlayer.css";
import { useTeam } from "../../hooks/useTeam";

function CardPlayer({ player }) {
  const { data: team } = useTeam(player.team);

  const baseImageUrl =
    "https://raw.githubusercontent.com/TOC-Web-Scraping/scraping/main/data/images/players/";

  function imagePlayer(player) {
    if (player.url && player.imageUrl) {
      return baseImageUrl + player.url + "." + player.imageUrl.split(".").pop();
    }
    return "https://www.saiterm.in.th/images/product/20210609132931_1.png";
  }
  return (
    <div className="card-container">
      <div className="image-container">
        <img alt="logo" src={imagePlayer(player)} />
      </div>
      <div className="cardtitle">
        {player.name}
        <img alt="logo" src={team?.logo} />
      </div>
      <div className="cardbody">{player.country.join(" , ")}</div>
    </div>
  );
}

export default CardPlayer;

import React from "react";
import CardPlayer from "../../components/CardPlayer/CardPlayer";
import CardPlayerDetails from "../../components/CardPlayerDetail/CardPlayerDetail";
function Players() {
  const player = {
    url: "Asuna",
    name: "Asuna",
    realName: "Peter Mazuryk",
    team: "100_Thieves",
    imageUrl:
      "/commons/images/thumb/2/2c/100_Thieves_Asuna.jpg/750px-100_Thieves_Asuna.jpg",
    country: ["United States", "Ukraine"],
    born: "2003-07-26",
    mainAgent: ["Jett", "Reyna", "Chamber"],
    gamingGear: {
      mouse: {
        brand: "Razer",
        name: "Razer Deathadder V2",
      },
      mousepad: {
        brand: "Artisan",
        name: "Artisan FX Zero Soft",
      },
      monitor: {
        brand: "Zowie_gear",
        name: "ZOWIE XL2546K",
      },
      keyboard: {
        brand: "Corsair",
        name: "CORSAIR K70 RGB",
      },
      headset: {
        brand: "Hyperx",
        name: "HyperX Cloud II",
      },
    },
  };
  return (
    <div>
      Players
      <CardPlayer 
        player={player}
      />
      {/* <CardPlayerDetails
        player={player}
      /> */}
    </div>
  );
}

export default Players;

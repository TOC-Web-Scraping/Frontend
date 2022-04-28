import React from "react";
import "./CardSlider.css";

import { useNavigate } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function CardSlider({maps}) {
  const navigate = useNavigate();
  const onCardClick = (id) => {
    if (id) {
      navigate(`/map/${id}`);
    }
  };
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  
  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider">
        {maps?.map((map, index) => {
          return <div className="slider-card" key={map.mapName} onClick={() => onCardClick(map.mapName)}>
              <div className="slider-card-image">
                <img src={map.imageUrl} />
              </div>
              <p className="slider-card-title">{map.mapName}</p>
              <p className="slider-card-description">{map.description.slice(0, 40)}...</p>
          </div>;
        })}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
}

export default CardSlider;

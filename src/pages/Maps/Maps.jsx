import React from "react";
import CardSlider from "../../components/CardSlider/CardSlider";
import { useNavigate } from "react-router-dom";
import { useMaps } from "../../hooks/useMaps.js";
import Loader from "../../components/Loader/Loader";
import BackButton from "../../components/BackButton/BackButton";
import './Map.css'

function Maps() {
  const navigate = useNavigate();
  const { data: maps, isLoading, error, isError } = useMaps();

  if (isError)
    return <h1 style={{ color: "white" }}>Error : {error.message}</h1>;

  const onCardClick = (id) => {
    if (id) {
      navigate(`/maps/${id}`);
    }
  };

  return (
    
    <>
      <div id="title-map">MAP</div>
      <div id="body">
        {isLoading && <Loader />}
<CardSlider maps={maps} />
                  
                
        
        
      </div>
    </>
  );
}

export default Maps;

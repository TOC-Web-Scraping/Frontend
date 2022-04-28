import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMap } from "../../hooks/useMap";
import "./Map.css";
import Loader from "../../components/Loader/Loader";

function Map() {
  const { id } = useParams();
  const { data: map, isLoading, error, isError } = useMap(id);
  const [imgs, setImgs] = useState([]);
  const [wordData, setWordData] = useState({});

  useEffect(() => {
    let newImgs = [];
    if (map) {
      map.imageUrl.map((value, id) => {
        newImgs[id] = { value, id };
      });
      setImgs(newImgs);
      setWordData(newImgs[0]);
    }
  }, [map]);

  const handleClick = (index) => {
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  if (isLoading) return <Loader />;
  if (isError)
    return <h1 style={{ color: "white" }}>Error : {error.message}</h1>;

  return (
    <div className="map">
      <div className="text-map">
        <h1> {id} </h1>
        <p>{map?.description}</p>
      </div>

<div className="map-slider">
        <img alt="map" src={wordData.value} />
        <div className="flex_row">
          {imgs.map((data, i) => (
            <div className="thumbnail" key={i}>
              <img
                alt="map"
                className={wordData.id === i ? "clicked" : ""}
                src={data.value}
                onClick={() => handleClick(i)}
              />
            </div>
          ))}
        </div>
      
</div>
      
    </div>
  );
}

export default Map;

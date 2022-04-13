import React from "react";
import { useParams } from "react-router-dom";
function Map() {
  const { id } = useParams();
  return <div>Map : {id}</div>;
}

export default Map;

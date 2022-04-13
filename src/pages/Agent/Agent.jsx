import React from "react";
import { useParams } from "react-router-dom";
function Agent() {
  const { id } = useParams();
  return <div>Agent : {id}</div>;
}

export default Agent;

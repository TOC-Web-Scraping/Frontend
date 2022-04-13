import React from "react";
import { useParams } from "react-router-dom";
function Team() {
  const { id } = useParams();
  return <div>Team : {id}</div>;
}

export default Team;

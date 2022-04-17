import React from "react";
import CardTeam from "../../components/CardTeam/CardTeam";
import { useNavigate } from "react-router-dom";

function Teams() {
  return (
    <div>
      Teams
      <CardTeam 
        title='Sentinels'
        imageUrl='https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y'
        body='North America'
        
      />
    </div>
  );
}

export default Teams;

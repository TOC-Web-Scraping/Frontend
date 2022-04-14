import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./layout/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Teams from "./pages/Teams/Teams";
import Players from "./pages/Players/Players";
import Maps from "./pages/Maps/Maps";
import Agents from "./pages/Agents/Agents";
import Team from "./pages/Team/Team";
import Player from "./pages/Player/Player";
import Map from "./pages/Map/Map";

import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/players" element={<Players />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/team/:id" element={<Team />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="/map/:id" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

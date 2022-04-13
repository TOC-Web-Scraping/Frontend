import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./layout/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Teams from "./pages/Teams/Teams";
import Players from "./pages/Players/Players";
import Team from "./pages/Team/Team";
import Player from "./pages/Player/Player";
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
          <Route path="/team/:id" element={<Team />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

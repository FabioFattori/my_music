import SelectFile from "./Components/SelectFile";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Songs from "./Pages/Songs";
import Bottom from "./Components/Bottom";
import Settings from "./Pages/Settings";
import Player from "./Components/Player";

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  const [TitleOfSong, setTitle] = useState("");

  const setSong = (audio, titolo) => {
    setSelectedSong(audio);
    setTitle(titolo);
  };

 

  return (
    <div className="App">
      <div id="Player" className="Player">
        {selectedSong ? (
          <Player audio={selectedSong} titolo={TitleOfSong} setSong={setSong} />
        ) : (
          <Player audio={null} titolo={""} />
        )}
      </div>
      <Routes>
        <Route path="/" element={<SelectFile />} />
        <Route path="/MusicPlayer" element={<Songs setSong={setSong} />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
      <Bottom />
    </div>
  );
}

export default App;

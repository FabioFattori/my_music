import SelectFile from "./Components/SelectFile";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React,{useState} from "react";
import Songs from "./Pages/Songs";
import Bottom from "./Components/Bottom";

function App() {
  const [selectedSong, setSelectedSong] = useState(null);
  
  const [TitleOfSong, setTitle] = useState("");

  const setSong = (audio,titolo) => {
    setSelectedSong(audio);
    setTitle(titolo)
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SelectFile />} />
        <Route path="/MusicPlayer" element={<Songs s={selectedSong} title={TitleOfSong} setSong={setSong} />} />
      </Routes>
      <Bottom />
    </div>
  );
}

export default App;

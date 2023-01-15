import SelectFile from "./Components/SelectFile";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Songs from "./Pages/Songs";
import Bottom from "./Components/Bottom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SelectFile />} />
        <Route path="/MusicPlayer" element={<Songs />} />
      </Routes>
      <Bottom />
    </div>
  );
}

export default App;

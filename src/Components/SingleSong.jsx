import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {getNome} from "../Functions/getNome"
function SingleSong({ url, setCurrentAudio }) {
  const [audio, setAudio] = useState();

  useEffect(() => {
    setAudio(new Audio(url));
  }, []);

  

  return (
    <div className="SingleSong">
      <Button
        fullWidth
        variant="text"
        onClick={() => {
          setCurrentAudio(audio, getNome(url));
        }}
      >
        {getNome(url)}
      </Button>
    </div>
  );
}

export default SingleSong;

import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { getNome } from "../Functions/getNome";
import { setHeight } from "../Functions/SetHeight";
import { ConvertUrl } from "../Functions/ConvertUrl";

function SingleSong({ url, setCurrentAudio }) {
  const [audio, setAudio] = useState();

  useEffect(() => {
    let U = ConvertUrl(url);

    setAudio(new Audio(U));
  }, []);

  return (
    <div className="SingleSong">
      <Button
        fullWidth
        variant="text"
        onClick={() => {
          setCurrentAudio(audio, getNome(url));
          setTimeout(() => {
            setHeight("/MusicPlayer");
          }, 1);
        }}
      >
        {getNome(url)}
      </Button>
    </div>
  );
}

export default SingleSong;

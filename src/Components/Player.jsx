import React, { useState, useEffect, useCallback } from "react";
import AvantiIcon from "@mui/icons-material/FastForward";
import IndietroIcon from "@mui/icons-material/FastRewind";
import IconButton from "@mui/material/IconButton";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ReplayIcon from "@mui/icons-material/Replay";
import { getNome } from "../Functions/getNome";
import { EstraiIndice } from "../Functions/EstraiIndice";
import { Next } from "../Functions/Next";
import { Back } from "../Functions/Back";
import { setHeight } from "../Functions/SetHeight";

function Player({ audio, titolo, setSong }) {
  const [shuffle, setShuffle] = useState(true);
  const [replay, setReplay] = useState();
  var s = true;
  var r = false;

  useEffect(() => {
    document
      .getElementById("audio")
      .addEventListener("ended", ShuffleEvent, true);
  }, []);

  const ShuffleEvent = useCallback(() => {
    let appoggio = JSON.parse(localStorage.getItem("songs"));
    if (!Array.isArray(appoggio)) {
      appoggio = [appoggio];
    }
    let a = EstraiIndice(appoggio.length);
    if (appoggio[a].split('"')[1] === undefined) {
      document.getElementById("audio").src = appoggio[a];
      document.getElementById("SongTitle").innerText = getNome(appoggio[a]);
      setSong(appoggio[a], getNome(appoggio[a]));
    } else {
      document.getElementById("audio").src = appoggio[a].split('"')[1];
      document.getElementById("SongTitle").innerText = getNome(appoggio[a]);
      setSong(appoggio[a].split('"')[1], getNome(appoggio[a]));
    }
  }, []);

  const ReplayEvent = useCallback(() => {
    document.getElementById("audio").currentTime = 0;
    document.getElementById("audio").play();
  }, []);

  return (
    <div className="wrapped">
      <h1 id="SongTitle" className="SongTitle">
        {titolo}
      </h1>

      <div className="MusicPlayer">
        <IconButton
          onClick={() => {
            let v = Back();
            setSong(new Audio(v.url), v.title);
            setTimeout(() => {
              setHeight();
            }, 1);
          }}
          aria-label="back"
          size="large"
        >
          <IndietroIcon fontSize="inherit" />
        </IconButton>
        {audio ? (
          <audio
            id="audio"
            className="audio"
            src={audio.src}
            autoPlay
            controls
          />
        ) : (
          <audio id="audio" controls />
        )}
        <IconButton
          onClick={() => {
            let v = Next();
            setSong(new Audio(v.url), v.title);
            setTimeout(() => {
              setHeight();
            }, 1);
          }}
          aria-label="next"
          size="large"
        >
          <AvantiIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="MinorIcons">
        {audio ? (
          <>
            {shuffle ? (
              //shuffle=true
              <IconButton
                onClick={() => {
                  setShuffle(false);
                  s = false;

                  document
                    .getElementById("audio")
                    .removeEventListener("ended", ShuffleEvent, true);
                }}
                aria-label="delete"
                size="medium"
                className="iconButtonSelected"
              >
                <ShuffleIcon fontSize="inherit" />
              </IconButton>
            ) : (
              //shuffle=false
              <IconButton
                onClick={() => {
                  if (!replay) {
                    setShuffle(true);
                    s = true;
                    document
                      .getElementById("audio")
                      .addEventListener("ended", ShuffleEvent, true);
                  }
                }}
                aria-label="delete"
                size="medium"
              >
                <ShuffleIcon fontSize="inherit" />
              </IconButton>
            )}
            {replay ? (
              //replay=true
              <IconButton
                onClick={() => {
                  setReplay(false);
                  r = false;
                  document
                    .getElementById("audio")
                    .removeEventListener("ended", ReplayEvent, true);
                }}
                aria-label="delete"
                size="medium"
                
                className="iconButtonSelected"
              >
                <ReplayIcon fontSize="inherit" />
              </IconButton>
            ) : (
              //replay=false
              <IconButton
                onClick={() => {
                  setReplay(true);
                  r = true;
                  document
                    .getElementById("audio")
                    .removeEventListener("ended", ShuffleEvent, true);
                  document
                    .getElementById("audio")
                    .addEventListener("ended", ReplayEvent, true);
                }}
                aria-label="delete"
                size="medium"
              >
                <ReplayIcon fontSize="inherit" />
              </IconButton>
            )}
          </>
        ) : (
          <>
            <IconButton disabled aria-label="delete" size="medium">
              <ShuffleIcon fontSize="inherit" />
            </IconButton>
            <IconButton disabled aria-label="delete" size="medium">
              <ReplayIcon fontSize="inherit" />
            </IconButton>
          </>
        )}
      </div>
    </div>
  );
}

export default Player;

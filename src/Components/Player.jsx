import React, { useEffect, useState } from "react";
import AvantiIcon from "@mui/icons-material/FastForward";
import IndietroIcon from "@mui/icons-material/FastRewind";
import IconButton from "@mui/material/IconButton";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ReplayIcon from "@mui/icons-material/Replay";
import { getNome } from "../Functions/getNome";

function Player({ audio, titolo, setSong }) {
  const [shuffle, setShuffle] = useState(false);
  const [replay, setReplay] = useState(false);

  useEffect(() => {
    if (audio !== null) {
      if (replay) {
        document.getElementById("audio").addEventListener("ended", () => {
          document.getElementById("audio").currentTime = 0;
          document.getElementById("audio").play();
        });
      } else if (shuffle) {
        document.getElementById("audio").addEventListener("ended", () => {
          let appoggio = JSON.parse(localStorage.getItem("songs"));
          if (!Array.isArray(appoggio)) {
            appoggio = [appoggio];
          }
          let a = Math.floor(Math.random() * (appoggio.length - 1));

          document.getElementById("audio").src = appoggio[a];

          setSong(appoggio[a], getNome(appoggio[a]));
        });
      }
    }

    return () => {
      if (audio !== null) {
        if (replay) {
          document.getElementById("audio").removeEventListener("ended", () => {
            document.getElementById("audio").currentTime = 0;
            document.getElementById("audio").play();
          });
        } else if (shuffle) {
          document.getElementById("audio").removeEventListener("ended", () => {
            let appoggio = JSON.parse(localStorage.getItem("songs"));
            if (!Array.isArray(appoggio)) {
              appoggio = [appoggio];
            }
            let a = Math.floor(Math.random() * (appoggio.length - 1));

            document.getElementById("audio").src = appoggio[a];

            setSong(appoggio[a], getNome(appoggio[a]));
          });
        }
      }
    };
  }, [audio]);

  useEffect(() => {
    if (audio !== null) {
      if (replay) {
        document.getElementById("audio").addEventListener("ended", () => {
          document.getElementById("audio").currentTime = 0;
          document.getElementById("audio").play();
        });
      } else if (shuffle) {
        document.getElementById("audio").addEventListener("ended", () => {
          let appoggio = JSON.parse(localStorage.getItem("songs"));
          if (!Array.isArray(appoggio)) {
            appoggio = [appoggio];
          }
          let a = Math.floor(Math.random() * (appoggio.length - 1));

          document.getElementById("audio").src = appoggio[a];

          setSong(appoggio[a], getNome(appoggio[a]));
        });
      }
    }

    return () => {
      if (audio !== null) {
        if (replay) {
          document.getElementById("audio").removeEventListener("ended", () => {
            document.getElementById("audio").currentTime = 0;
            document.getElementById("audio").play();
          });
        } else if (shuffle) {
          document.getElementById("audio").removeEventListener("ended", () => {
            let appoggio = JSON.parse(localStorage.getItem("songs"));
            if (!Array.isArray(appoggio)) {
              appoggio = [appoggio];
            }
            let a = Math.floor(Math.random() * (appoggio.length - 1));

            document.getElementById("audio").src = appoggio[a];

            setSong(appoggio[a], getNome(appoggio[a]));
          });
        }
      }
    };
  }, [replay]);

  useEffect(() => {
    if (audio !== null) {
      if (replay) {
        document.getElementById("audio").addEventListener("ended", () => {
          document.getElementById("audio").currentTime = 0;
          document.getElementById("audio").play();
        });
      } else if (shuffle) {
        document.getElementById("audio").addEventListener("ended", () => {
          let appoggio = JSON.parse(localStorage.getItem("songs"));
          if (!Array.isArray(appoggio)) {
            appoggio = [appoggio];
          }
          let a = Math.floor(Math.random() * (appoggio.length - 1));

          document.getElementById("audio").src = appoggio[a];

          setSong(appoggio[a], getNome(appoggio[a]));
        });
      }
    }

    return () => {
      if (audio !== null) {
        if (replay) {
          document.getElementById("audio").removeEventListener("ended", () => {
            document.getElementById("audio").currentTime = 0;
            document.getElementById("audio").play();
          });
        } else if (shuffle) {
          document.getElementById("audio").removeEventListener("ended", () => {
            let appoggio = JSON.parse(localStorage.getItem("songs"));
            if (!Array.isArray(appoggio)) {
              appoggio = [appoggio];
            }
            let a = Math.floor(Math.random() * (appoggio.length - 1));

            document.getElementById("audio").src = appoggio[a];

            setSong(appoggio[a], getNome(appoggio[a]));
          });
        }
      }
    };
  }, [shuffle]);

  return (
    <div className="wrapped">
      <h1 className="SongTitle">{titolo}</h1>

      <div className="MusicPlayer">
        <IconButton aria-label="delete" size="large">
          <IndietroIcon fontSize="inherit" />
        </IconButton>
        {audio ? (
          <audio id="audio" src={audio.src} autoPlay controls />
        ) : (
          <audio controls />
        )}
        <IconButton aria-label="delete" size="large">
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
                  setShuffle(!shuffle);
                }}
                aria-label="delete"
                size="medium"
                color="success"
              >
                <ShuffleIcon fontSize="inherit" />
              </IconButton>
            ) : (
              //shuffle=false
              <IconButton
                onClick={() => {
                  setShuffle(!shuffle);
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
                  setReplay(!replay);
                }}
                aria-label="delete"
                size="medium"
                color="success"
              >
                <ReplayIcon fontSize="inherit" />
              </IconButton>
            ) : (
              //replay=false
              <IconButton
                onClick={() => {
                  setReplay(!replay);
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

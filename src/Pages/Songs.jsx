import React, { useEffect, useState } from "react";
import { storage } from "../base";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import SingleSong from "../Components/SingleSong";
import Player from "../Components/Player";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { json } from "react-router-dom";

function Songs({ s, title, setSong }) {
  const [allSongs, setAll] = useState([]);
  const [spinner, setSpinner] = useState(true);
  let i = 0;
  useEffect(() => {
    const listRef = ref(storage, "");
    // Find all the prefixes and items.
    let appoggio=localStorage.getItem("songs")
    if (i === 0||appoggio===undefined) {
      
      i++;
      listAll(listRef)
        .then((res) => {
          res.items.forEach((itemRef) => {
            // All the items under listRef.
            getDownloadURL(ref(storage, itemRef)).then((url) => {
              localStorage.setItem("songs",JSON.stringify(url))
              setAll((oldArray) => [...oldArray, url]);
              
            });
          });

          
        })
        .catch((error) => {
          console.log(error);
        });

      setTimeout(() => {
        setSpinner(false);
      }, 500);
    }
  }, []);

  return (
    <div className="container">
      {spinner ? (
        <Box sx={{ width: 300 }}>
          <Skeleton height="100%" animation="wave" />
        </Box>
      ) : (
        <div className="Tracce">
          <h1>le mie canzoni:</h1>
          {allSongs.map((s, index) => {
            return (
              <div key={index}>
                <SingleSong url={s} setCurrentAudio={setSong} />
              </div>
            );
          })}
        </div>
      )}
      <div className="Player">
        {s ? (
          <Player
            audio={s}
            titolo={title}
            setSong={setSong}
          />
        ) : (
          <Player audio={null} titolo={""} />
        )}
      </div>
    </div>
  );
}

export default Songs;

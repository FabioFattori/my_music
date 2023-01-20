import React, { useEffect, useState } from "react";
import { storage } from "../base";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import SingleSong from "../Components/SingleSong";
import Player from "../Components/Player";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { setHeight } from "../Functions/SetHeight";
import { ConvertUrl } from "../Functions/ConvertUrl";

function Songs({ s, title, setSong }) {
  const [allSongs, setAll] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const listRef = ref(storage, "");

    // Find all the prefixes and items.
    window.addEventListener("beforeunload", CleanStorage);

    if (
      JSON.parse(localStorage.getItem("songs")) === undefined ||
      JSON.parse(localStorage.getItem("songs")) === null
    ) {
      listAll(listRef)
        .then((res) => {
          res.items.forEach((itemRef) => {
            // All the items under listRef.
            getDownloadURL(ref(storage, itemRef)).then((url) => {
              setLocalSongs(JSON.stringify(url));
              setAll((oldArray) => [...oldArray, url]);
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      var Storage = JSON.parse(localStorage.getItem("songs"));
      for (let index = 0; index < Storage.length; index++) {
        Storage[index]=ConvertUrl(Storage[index])
        
      }
      setAll(Storage);
    }
    setSpinner(false);
    setTimeout(() => {
      setHeight();
    }, 1);

    return () => {
      window.removeEventListener("beforeunload", CleanStorage);
    };
  }, []);

  const CleanStorage = () => {
    localStorage.setItem("songs", JSON.stringify(null));
  };

  function setLocalSongs(url) {
    var Storage = JSON.parse(localStorage.getItem("songs"));
    if (Storage === null || Storage === undefined) {
      localStorage.setItem("songs", url);
    } else {
      if (!Array.isArray(Storage)) Storage = [Storage];
      Storage.push(url);

      localStorage.setItem("songs", JSON.stringify(Storage));
    }
  }

  

  return (
    <div className="container">
      {spinner ? (
        <Box sx={{ width: 300 }}>
          <Skeleton height="100%" animation="wave" />
        </Box>
      ) : (
        <div id="Tracce" className="Tracce">
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
      <div id="Player" className="Player">
        {s ? (
          <Player audio={s} titolo={title} setSong={setSong} />
        ) : (
          <Player audio={null} titolo={""} />
        )}
      </div>
    </div>
  );
}

export default Songs;

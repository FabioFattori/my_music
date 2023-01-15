import React, { useEffect, useState } from "react";
import { storage } from "../base";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import SingleSong from "../Components/SingleSong";

function Songs() {
  const [allSongs, setAll] = useState([]);

  let i=0;
  useEffect(() => {
    const listRef = ref(storage, "");
    // Find all the prefixes and items.
    
      if(i===0){
        i++;
        listAll(listRef)
        .then((res) => {
          res.items.forEach((itemRef) => {
            // All the items under listRef.
            getDownloadURL(ref(storage, itemRef)).then((url) => {
              setAll(oldArray => [...oldArray, url])
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
      }
     
        
    

   

  }, []);





  return (
    <>
      {
        allSongs.map((s,index)=>{
          return <div key={index}><SingleSong url={s} /></div>
        })
      }
    
    </>
  );
}

export default Songs;

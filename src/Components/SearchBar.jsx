import React, { useState, useEffect, useCallback } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { getNome } from "../Functions/getNome";
import { ConvertUrl } from "../Functions/ConvertUrl";

function SearchBar({ setAllSongs }) {
  const [searchedText, setText] = useState("");

  const Search = useCallback((e) => {
    if (e.key === "Enter"||e.type === "click") {
        var Storage = JSON.parse(localStorage.getItem("songs"));
        for (let index = 0; index < Storage.length; index++) {
          Storage[index] = ConvertUrl(Storage[index]);
        }
        setAllSongs([])


        
        for (let i = 0; i < Storage.length; i++) {
            if(e.target.value!==undefined) {
                if(getNome(Storage[i]).toLocaleUpperCase().includes(e.target.value.toLocaleUpperCase())){
                    setAllSongs((oldArray) => [...oldArray, Storage[i]])
                }
            }else{
                if(getNome(Storage[i]).toLocaleUpperCase().includes(searchedText.toLocaleUpperCase())){
                    setAllSongs((oldArray) => [...oldArray, Storage[i]])
                }
            }
        }
    }
  }, [searchedText]);

  useEffect(() => {
    document.getElementById("Search").addEventListener("keypress", Search,true);
  }, []);

  

  return (
    <div className="SearchBar" id="SearchBar">
      <TextField
        fullWidth
        label="Cerca Canzoni..."
        value={searchedText}
        onChange={(e) => {
          setText(e.target.value);
        }}
        id="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={(e)=>Search(e)} aria-label="toggle password visibility" edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SearchBar;

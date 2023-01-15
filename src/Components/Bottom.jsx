import React from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AudioFileIcon from "@mui/icons-material/AudioFile";

import { useNavigate } from "react-router-dom";

function Bottom() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event,newValue) => {
          setValue(newValue);
          
            if (newValue === 0) {
              navigate("/");
            } else {
              navigate("/MusicPlayer");
            }
          
        }}
      >
        <BottomNavigationAction
          id="File"
          label="Seleziona File"
          icon={<LibraryMusicIcon />}
        />
        <BottomNavigationAction
          id="Musica"
          label="Musica"
          icon={<AudioFileIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default Bottom;

import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate, useLocation } from "react-router-dom";
import { setColor } from "../Functions/setColor";

function Bottom() {
  const [value, setValue] = React.useState();

  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setValue(0);
      document.getElementById("File").style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--HighTheme");
    } else if (location.pathname === "/Settings") {
      setValue(2);
      document.getElementById("btnSettings").style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--HighTheme");
    } else {
      setValue(1);
      document.getElementById("Musica").style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--HighTheme");
    }
  }, []);

  

  return (
    <div className="Bottom">
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);

            if (newValue === 0) {
              setColor(newValue);
              navigate("/");
            } else if (newValue === 1) {
              setColor(newValue);
              navigate("/MusicPlayer");
            } else {
              setColor(newValue);
              navigate("/Settings");
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
          <BottomNavigationAction
            id="btnSettings"
            label="Impostazioni"
            icon={<SettingsIcon />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default Bottom;

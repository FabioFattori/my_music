import React,{useEffect} from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate,useLocation } from "react-router-dom";

function Bottom() {
  const [value, setValue] = React.useState();

  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
  
    if(location.pathname==="/"){
      setValue(0)
    }else if(location.pathname==="/Settings"){
      setValue(2)
    }else{
      setValue(1)
    }
    
  }, [])
  

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
            } else if(newValue===1){
              navigate("/MusicPlayer");
            }else{
              navigate("/Settings")
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
          label="Impostazioni"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default Bottom;

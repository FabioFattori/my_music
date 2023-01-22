import React from "react";
import { MuiColorInput } from "mui-color-input";

function Settings() {
  const [Base, setBase] = React.useState("#ffffff");
  const [Selection, setSelection] = React.useState("#ffffff");

  const handleChangeBase = (color) => {
    setBase(color);
    document.documentElement.style
    .setProperty('--BaseTheme', color);
  };
  
  const handleChangeSelection = (color) => {
    setSelection(color);
    document.documentElement.style
    .setProperty('--HighTheme', color);
  };

  return (
    <div>
      <div className="Couple">
        <h2>Tema Base:</h2>
        <MuiColorInput
          value={Base}
          fallbackValue="#ffffff"
          onChange={handleChangeBase}
        />
      </div>
      <div className="Couple">
        <h2>Tema Selezioni:</h2>
        <MuiColorInput
          value={Selection}
          fallbackValue="#ffffff"
          onChange={handleChangeSelection}
        />
      </div>
    </div>
  );
}

export default Settings;

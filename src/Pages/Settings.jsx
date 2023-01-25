import React, { useEffect } from "react";
import { MuiColorInput } from "mui-color-input";
import { setHeight } from "../Functions/SetHeight";
import { setColor } from "../Functions/setColor";

function Settings() {
  const [Base, setBase] = React.useState(
    getComputedStyle(document.documentElement).getPropertyValue("--BaseTheme")
  );
  const [Selection, setSelection] = React.useState(getComputedStyle(document.documentElement).getPropertyValue("--HighTheme"));

  const handleChangeBase = (color) => {
    setBase(color);
    document.documentElement.style.setProperty("--BaseTheme", color);
    setColor(2)
  };

  const handleChangeSelection = (color) => {
    setSelection(color);
    document.documentElement.style.setProperty("--HighTheme", color);
    setColor(2)
  };

  useEffect(() => {
    setHeight("/Settings");
  }, []);

  return (
    <div id="Settings">
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

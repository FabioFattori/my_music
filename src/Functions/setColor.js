export function setColor(currentValue) {
    if (currentValue === 0) {
      document.getElementById("File").style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--HighTheme");

      document.getElementById("Musica").style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--BaseTheme");

      document.getElementById("btnSettings").style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--BaseTheme");
    } else if (currentValue === 1) {
      document.getElementById("Musica").style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--HighTheme");

      document.getElementById("File").style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--BaseTheme");

      document.getElementById("btnSettings").style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--BaseTheme");
    } else if (currentValue === 2) {
      document.getElementById("btnSettings").style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--HighTheme");

      document.getElementById("File").style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--BaseTheme");

      document.getElementById("Musica").style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--BaseTheme");
    }
  }
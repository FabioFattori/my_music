export function setHeight(path) {
  var offsetHeight = document.getElementById("Player").offsetHeight;
  offsetHeight += 30;

  if (path === "/") {
    offsetHeight += 60;
    document.getElementById("file-uploader").style.marginTop =
      offsetHeight + "px";
  } else if (path === "/MusicPlayer") {
    document.getElementById("Tracce").style.marginTop = offsetHeight + "px";
  } else {
    
    offsetHeight += 60;
    document.getElementById("Settings").style.marginTop = offsetHeight + "px";
  }
}

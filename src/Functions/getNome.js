export function getNome(url) {
  let appoggio = url.split(
    "https://firebasestorage.googleapis.com/v0/b/mymusic1112.appspot.com/o/"
  )[1];
  appoggio = appoggio.split("?")[0].split("%20");
  let toReturn = "";
  appoggio.forEach((element) => {
    if (element !== undefined) {
      if (element.includes("%")) {
        toReturn += element.split("%")[0] + "è";
      } else {
        toReturn += " " + element;
      }
    }
  });
  if (!toReturn.includes(".mp3")) toReturn += ".mp3";
  return toReturn;
}

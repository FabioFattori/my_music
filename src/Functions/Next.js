import { FindURL } from "./FindIndexGivenURL";
import { ConvertUrl } from "./ConvertUrl";
import { getNome } from "./getNome";

export function Next() {
  let a = FindURL(document.getElementById("audio").src);
  let Storage = JSON.parse(localStorage.getItem("songs"));

  let toReturn = {
    title: "",
    url: "",
  };
  if (a + 1 <= Storage.length - 1) {
    toReturn.title = getNome(Storage[a + 1]);
    toReturn.url = ConvertUrl(Storage[a + 1]);
  } else {
    toReturn.title = getNome(Storage[0]);
    toReturn.url = ConvertUrl(Storage[0]);
  }

  return toReturn;
}

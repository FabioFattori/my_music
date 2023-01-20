import { FindURL } from "./FindIndexGivenURL";
import { ConvertUrl } from "./ConvertUrl";
import { getNome } from "./getNome";

export function Back() {
  let a = FindURL(document.getElementById("audio").src);
  let Storage = JSON.parse(localStorage.getItem("songs"));
  let toReturn = {
    title: "",
    url: "",
  };
  if (a - 1 >= 0) {
    toReturn.title = getNome(Storage[a - 1]);
    toReturn.url = ConvertUrl(Storage[a - 1]);
  } else {
    toReturn.title = getNome(Storage[Storage.length - 1]);
    toReturn.url = ConvertUrl(Storage[Storage.length - 1]);
  }

  return toReturn;
}

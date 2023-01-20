import { ConvertUrl } from "./ConvertUrl";

export function FindURL(url) {
  var Storage = JSON.parse(localStorage.getItem("songs"));
  for (let index = 0; index < Storage.length; index++) {
    if (ConvertUrl(Storage[index]) === url) {
      return index;
    }
  }

  return -1;
}

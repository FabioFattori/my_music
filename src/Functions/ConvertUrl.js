export function ConvertUrl(url) {
  if (url.split('"')[1] === undefined) {
    return url;
  } else {
    return url.split('"')[1];
  }
}

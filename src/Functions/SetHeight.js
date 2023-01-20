export function setHeight() {
  if (window.innerWidth<=480) {
    var offsetHeight = document.getElementById("Player").offsetHeight;
    offsetHeight+=50
    document.getElementById("Tracce").style.marginTop = offsetHeight + "px";
  }
}

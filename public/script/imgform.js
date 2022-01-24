function showURL() {
  var x1 = document.getElementById("urlform");
  var y1 = document.getElementById("fileform");
  if (x1.style.display === "block") {
    x1.style.display = "none";
    y1.style.display = "none";
  } else {
    x1.style.display = "block";
    y1.style.display = "none";
  }
}
function showFile() {
  var x2 = document.getElementById("fileform");
  var y2 = document.getElementById("urlform");
  if (x2.style.display === "block") {
    x2.style.display = "none";
    y2.style.display = "none";
  } else {
    x2.style.display = "block";
    y2.style.display = "none";
  }
}
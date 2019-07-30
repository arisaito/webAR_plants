let start = false;
const cursor = document.getElementById("cursor");
const target = document.getElementById("target");

document.querySelector("#target").addEventListener("click", function(evt) {
  start = true;
  if (start) {
    console.log("click");
    target.innerHTML =
      "<a-entity  particle-system='color: #EF0000,#44CC00'></a-entity>";
  }
});

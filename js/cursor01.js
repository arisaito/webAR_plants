let start = false;
const cursor = document.getElementById("cursor");
const target = document.getElementById("target");

let shape = [
  '<a-sphere radius="0.8" color="pink"></a-sphere>',
  '<a-icosahedron color="#fee981"></a-icosahedron>',
  '<a-box rotation="30 30 0" color="skyblue"></a-box>'
];
let lastIndex = -1;

// let colors = ["pink", "lightgreen", "lightbrue"];

document.querySelector("#target").addEventListener("click", function(evt) {
  start = true;
  if (start) {
    console.log("click");
    lastIndex = (lastIndex + 1) % shape.length;
    target.innerHTML = shape[lastIndex];
  }
});

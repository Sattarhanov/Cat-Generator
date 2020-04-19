function generateCat() {
  let image = document.createElement("img");
  let div = document.getElementById("flex-cat");
  image.src = "https://cdn2.thecatapi.com/images/EjugcrUrT.jpg";
  div.appendChild(image);
}
function reset() {
  document.getElementById("flex-cat").remove();
}




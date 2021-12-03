const change = document.getElementById("change");
const color = document.getElementById("color");
const body = document.body;
change.addEventListener("click", changeBG);
function changeBG() {
  const col1 = getRandomRGB();
  const col2 = getRandomRGB();
  const col3 = getRandomRGB();
  const col4 = getRandomRGB();
  const col5 = getRandomRGB();
  const col6 = getRandomRGB();

  const colorString = `linear-gradient(rgba(${col1},${col2},${col3}),rgba(${col4},${col5},${col6}))`;

  body.style.background = colorString;
}
function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}

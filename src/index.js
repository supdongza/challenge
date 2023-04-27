const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const colorButton = document.getElementById("button");
const app = document.getElementById("app");

function getRandomColors(min, max, count) {
  const getColorsArray = [];

  min = Math.ceil(min);
  max = Math.floor(max);

  for (let i = 0; i < count; i++) {
    getColorsArray.push(colors[Math.floor(Math.random() * (max - min) + min)]);
  }

  return getColorsArray;
}

colorButton.addEventListener("click", () => {
  const array = getRandomColors(0, colors.length, 2);
  console.log(array);
  app.style.backgroundImage = `linear-gradient(${array[0]}, ${array[1]})`;
});

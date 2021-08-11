const paragraph = document.querySelector(".text");
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let index = 0;

const generateColor = () => {
  if (index > 6) {
    index = 0;
  }
  return colors[index];
};
const split = paragraph.textContent.split(" ");
let newWord = "";

split.forEach((word) => {
  if (!word || word === "\n") {
    newWord += word;
  }

  word.split("").map((c) => {
    newWord += c.fontcolor(generateColor());
    index++;
  });
  newWord += " ";
});

paragraph.innerHTML = newWord;

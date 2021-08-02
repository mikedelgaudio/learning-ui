const paragraph = document.querySelector(".text");

const split = paragraph.textContent.split(" ");
let newWord = "";

split.forEach((word) => {
  if (!word || word === "\n") {
    newWord += word;
  }

  word.split("").map((c) => {
    newWord += c.fontcolor("red");
  });
});

paragraph.innerHTML = newWord;

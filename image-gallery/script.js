const gallery = document.querySelector(".gallery");
const IMAGE_URL = "https://source.unsplash.com/random";

// TODO: Use unsplash API to grab author name and set as
// caption.

// BONUS: Use image color to set background color tone

for (let i = 0; i < 10; i++) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardImgContainer = document.createElement("div");
  cardImgContainer.classList.add("card-img-wrapper");

  const image = document.createElement("img");
  image.classList.add("card-img");
  image.src = IMAGE_URL;
  image.alt = "my placeholder image";
  image.height = "300px";

  const mottoContainer = document.createElement("div");
  mottoContainer.classList.add("card-motto");

  const motto = document.createElement("span");
  motto.textContent = "My favorite beach";

  mottoContainer.appendChild(motto);
  cardImgContainer.appendChild(image);

  card.appendChild(cardImgContainer);
  card.appendChild(mottoContainer);

  gallery.appendChild(card);
}

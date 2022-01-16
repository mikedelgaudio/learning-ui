const gallery = document.querySelector(".gallery");

// TODO: Use unsplash API to grab author name and set as
// caption.

const API_URL = "https://api.unsplash.com/photos/random";
const HEADERS = {
  "Accept-Version": "v1",
  Authorization: "Client-ID " + "Q4-KrjLeh9rB5XZ3yM2A0BblOBIoxEgarmYLv8qH5eY",
};

const getImage = async (d) => {
  const response = await fetch(`${API_URL}?sig=${d}`, {
    method: "GET",
    headers: HEADERS,
  }).catch((err) => {
    console.error(err);
  });

  if (response.ok) {
    return await response.json();
  } else {
    return Promise.reject(`Error ${response.status}, unable to obtain image.`);
  }
};

// BONUS: Use image color to set background color tone

const display = async (d) => {
  try {
    const data = await getImage(d);
    console.log(data);
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImgContainer = document.createElement("div");
    cardImgContainer.classList.add("card-img-wrapper");

    const image = document.createElement("img");
    image.classList.add("card-img");
    const mottoContainer = document.createElement("div");
    mottoContainer.classList.add("card-motto");

    const motto = document.createElement("span");

    image.src = data?.urls?.small;
    image.alt = data?.alt_description;
    image.height = data?.height;
    motto.textContent = data?.user?.name;

    mottoContainer.appendChild(motto);
    cardImgContainer.appendChild(image);

    card.appendChild(cardImgContainer);
    card.appendChild(mottoContainer);

    gallery.appendChild(card);
  } catch (e) {
    // const container = document.createElement("div");
    // container.classList.add("error-container");
    // const caption = document.createElement("span");
    // caption.classList.add("error-caption");
    // caption.textContent = "Sorry, we were unable to obtain some images.";
    // container.appendChild(caption);
    // document.querySelector(".main").appendChild(container);
  }
};

let displayError = false;

const errorBanner = () => {};

try {
  for (let i = 0; i < 3; i++) display(i);
} catch (e) {
  const container = document.createElement("div");
  container.classList.add("error-container");

  const caption = document.createElement("span");
  caption.classList.add("error-caption");
  caption.textContent = "Sorry, we were unable to obtain some images.";

  container.appendChild(caption);
  document.querySelector(".main").appendChild(container);
}

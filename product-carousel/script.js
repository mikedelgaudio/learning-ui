const scroller = document.querySelector(".horizontal-media-scroller");

for (let i = 0; i < 10; i++) {
  const listElm = document.createElement("li");
  const linkElm = document.createElement("a");
  const card = document.createElement("div");
  card.classList.add("product-card");
  const figureElm = document.createElement("figure");
  const detailBtn = document.createElement("button");
  detailBtn.classList.add("product-btn", "adaptive-glass");
  detailBtn.textContent = "DETAILS";

  const pictureElm = document.createElement("picture");
  const imgElm = document.createElement("img");
  imgElm.classList.add("product-img");
  imgElm.src = "./assets/product-2.jpg";
  imgElm.alt = "Purple blazer on woman";
  imgElm.width = 300;
  imgElm.height = 450;
  imgElm.loading = "lazy";

  const figcapElm = document.createElement("figcaption");

  const productDetails = document.createElement("div");
  productDetails.classList.add("product-details");

  const productTitle = document.createElement("span");
  productTitle.classList.add("product-title");
  productTitle.textContent = "Wofe Blazer";

  const productSzn = document.createElement("span");
  productSzn.classList.add("product-season");
  productSzn.textContent = "Fall Collection";

  const productPrice = document.createElement("span");
  productPrice.classList.add("product-price");
  productPrice.textContent = "$129";

  // Figure
  figureElm.appendChild(detailBtn);
  pictureElm.appendChild(imgElm);
  figureElm.appendChild(pictureElm);

  // Figcaption
  productDetails.appendChild(productTitle);
  productDetails.appendChild(productSzn);
  figcapElm.appendChild(productDetails);
  figcapElm.appendChild(productPrice);

  // Card
  card.appendChild(figureElm);
  card.appendChild(figcapElm);

  linkElm.append(card);
  listElm.appendChild(linkElm);

  scroller.appendChild(listElm);
}

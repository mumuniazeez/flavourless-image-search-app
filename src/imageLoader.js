import { renderImages } from "./renderImageHtml";
const ACCESS_TOKEN = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const API_URL_FOR_RANDOM = `https://api.unsplash.com/photos/random?count=10&client_id=${ACCESS_TOKEN}`;

const registerLoaderMoreEvent = (imagesContainer) => {
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  loadMoreBtn.addEventListener("click", async () => {
    loadMoreBtn.innerText = "Loading";
    loadMoreBtn.disabled = true;
    const response = await fetch(API_URL_FOR_RANDOM);
    const data = await response.json();
    console.log(data);
    loadMoreBtn.remove();
    imagesContainer.innerHTML += `${renderImages(data)}
    <button id="loadMoreBtn">Load More</button>`;
    registerLoaderMoreEvent(imagesContainer);
  });
};

export const loadRandomImages = async (element) => {
  const response = await fetch(API_URL_FOR_RANDOM);
  const data = await response.json();
  console.log(data);
  element.innerHTML = `${renderImages(data)}
  <button id="loadMoreBtn">Load More</button>`;
  registerLoaderMoreEvent(element);
};

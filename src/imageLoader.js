import { renderImages } from "./renderImageHtml";
const ACCESS_TOKEN = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const API_URL_FOR_RANDOM = `https://api.unsplash.com/photos/random?count=10&client_id=${ACCESS_TOKEN}`;

export const loadRandomImages = async (element) => {
  const response = await fetch(API_URL_FOR_RANDOM);
  const data = await response.json();
  console.log(data);
  element.innerHTML = renderImages(data);
};

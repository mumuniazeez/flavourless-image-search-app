import { renderImages } from "./renderImageHtml";
const ACCESS_TOKEN = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const API_URL_FOR_SEARCH = `https://api.unsplash.com/search/photos?client_id=${ACCESS_TOKEN}`;

const searchImages = async (query) => {
  const response = await fetch(`${API_URL_FOR_SEARCH}&query=${query}`);
  const data = await response.json();
  return data;
};

export const registerSearchEvent = async (
  searchInput,
  searchBtn,
  imagesContainer,
) => {
  searchBtn.addEventListener("click", async () => {
    const query = searchInput.value;
    if (!query) return alert("Type in something to search for");
    imagesContainer.innerHTML = `<p>Searching for ${query}...</p>`;
    const searchResult = await searchImages(query);
    console.log(searchResult.results);
    imagesContainer.innerHTML = renderImages(searchResult.results);
  });
};

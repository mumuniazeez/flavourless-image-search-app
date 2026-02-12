import { renderImages } from "./renderImageHtml";
import { registerDownload } from "./imageDownloader";
const ACCESS_TOKEN = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const API_URL_FOR_SEARCH = `https://api.unsplash.com/search/photos?client_id=${ACCESS_TOKEN}`;

let searchPage = 1;

const searchImages = async (query) => {
  const response = await fetch(
    `${API_URL_FOR_SEARCH}&query=${query}&page=${searchPage}&per_page=10`,
  );
  const data = await response.json();
  return data;
};

const registerLoaderMoreEvent = (query, imagesContainer) => {
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  loadMoreBtn.addEventListener("click", async () => {
    searchPage++;
    loadMoreBtn.innerText = "Loading";
    loadMoreBtn.disabled = true;
    const searchResult = await searchImages(query);
    console.log(searchResult);
    loadMoreBtn.remove();
    imagesContainer.innerHTML += `${renderImages(searchResult.results)}
   ${searchResult.results.total_pages > searchPage ? `<button id="loadMoreBtn">Load More</button>` : 'Ahh, there's not else to load. The end....'}
    `;
    registerLoaderMoreEvent(query, imagesContainer);
    searchResult.results.forEach((image) => {
      registerDownload(image.urls.raw);
    });
  });
};

export const registerSearchEvent = async (
  searchInput,
  searchBtn,
  imagesContainer,
) => {
  searchBtn.addEventListener("click", async () => {
    const query = searchInput.value;
    if (!query) return alert("Type in something to search for");

    imagesContainer.innerHTML = `<p>Searching for "${query}"...</p>`;
    const searchResult = await searchImages(query);
    console.log(searchResult);
    searchPage = 1;
    imagesContainer.innerHTML = `
    <h3>Results for "${query}"</h3>
    ${renderImages(searchResult.results)}
   ${searchResult.results.total_pages > searchPage ? `<button id="loadMoreBtn">Load More</button>` : 'Ahh, there's not else to load. The end....'}
    `;
    registerLoaderMoreEvent(query, imagesContainer);
    searchResult.results.forEach((image) => {
      registerDownload(image.urls.raw);
    });
  });
};

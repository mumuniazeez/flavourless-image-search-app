const ACCESS_TOKEN = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const API_URL_FOR_RANDOM = `https://api.unsplash.com/photos/random?count=10&client_id=${ACCESS_TOKEN}`;

const renderImages = (images) => {
  let html = "";
  images.forEach((image) => {
    html += `
        <div class="image-container">
            <img src="${image.urls.regular}" 
            alt="${image.alt_description}" 
            width="300">
            <div class="image-info">
                <p>${image.alt_description}</p>
                <p>${image.user.name}</p>
                <button>Download</button>
            </div>
            <br />
            `;
  });
  return html;
};

export const loadRandomImages = async (element) => {
  const response = await fetch(API_URL_FOR_RANDOM);
  console.log(await response.text());
  const data = await response.json();
  console.log(data);
  element.innerHTML = renderImages(data);
};

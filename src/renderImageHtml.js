export const renderImages = (images) => {
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

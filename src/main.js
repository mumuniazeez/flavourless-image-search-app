import flavourlessImg from "../asset/flavourless-image.png";
import { loadRandomImages } from "./imageLoader";

document.querySelector("#app").innerHTML = `
  <main>
      <h1>Image Search App</h1>
    <p>Search for images and download</p>
    <div>
      <input type="search" placeholder="Search for images" id="search-input" />
      <button id="search-btn">Search</button>
    </div>

    <br />
    <hr />

    <div id="images-container">
      <p>Loading images...</p>
    </div>

    <hr />
    <div>
      <img src="${flavourlessImg}" width="150" alt="" />

      <p>This is a flavourless (HTML,JS, ~css~ forbidden) image search app</p>
      <p>
        Why no CSS(styling)? Check out
        <a href="https://flavourless.hackclub.com" target="_blank"
          >Flavourless HackClub</a
        >
        for more details
      </p>
      <p>Powered by <strong>Unsplash Image API</strong></p>
      <p>Build with &hearts; by <strong>AzCodes</strong></p>
    </div>
    </main>
`;

loadRandomImages(document.getElementById("images-container"));

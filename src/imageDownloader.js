export const downloadImage = async (url) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = "image";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const registerDownload = (url) => {
  const downloadBtn = document.querySelectorAll(".download-btn");
  downloadBtn.forEach((btn) => {
    btn.removeEventListener("click", () => downloadImage(url));
    btn.addEventListener("click", () => downloadImage(url));
  });
};

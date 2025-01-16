const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${query}&limit=10`
    )
      .then((response) => response.json())
      .then((data) => {
        gifContainer.innerHTML = ""; // Clear previous results
        data.data.forEach((gif) => {
          const img = document.createElement("img");
          img.src = gif.images.fixed_height.url;
          gifContainer.appendChild(img);
        });
      })
      .catch((error) => console.error("Error fetching GIFs:", error));
  }
});

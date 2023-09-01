<script>
    let selectedImage = "/15-8345.JPG"; // Corrected path
    let latinTitle = "Rosa rubiginosa";  // Replace with the Latin name of the flower
  let englishTitle = "Sweet Briar Rose";  // Replace with the English title of the flower
  </script>
 
 <div class="home-container">
  <div class="image-frame">
    <img src="{selectedImage}" alt="{englishTitle}" class="featured-image">
    <div class="image-info">
      <p class="english-title">{englishTitle}</p>
      <p class="latin-title">{latinTitle}</p>
     
    </div>
  </div>
</div>

  <style>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  margin-left: 12rem; /* Increased space for navigation */
}

.image-frame {
  position: relative;
  width: 85%; /* Reduced for more negative space */
  margin-bottom: 4rem; /* Space for hover info */
}

.featured-image {
  width: 100%;
  height: auto;
  border: none; /* Removed border */
}

.image-info {
  position: absolute;
  bottom: -4rem; /* Align with design */
  left: 0;
  right: 0;
  background-color: none(0, 100, 38, 0.801);
  padding: 0.5em;
  opacity: 0;
  transition: opacity 0.6s ease;
  display: flex;
  justify-content: space-between;
}

.image-frame:hover .image-info {
  opacity: 1;
}

.latin-title
{
  font-family: "EB Garamond", serif;
  font-size: 1.2rem;
  font-weight: 400;
  font-variant-caps: normal;
  color: #00360e;
  margin: 0;
  font-style: italic;
  position: 0;
}

.english-title {
  font-family: "EB Garamond", serif;
  font-size: 1.2rem;
  font-weight: 400;
  font-variant-caps: normal;
  color: #00360e;
  margin: 0;
}
  </style>
  
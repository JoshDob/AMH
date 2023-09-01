<script>
    const roseImages = [
      {
        title: "First Bloom",
        latinName: "Rosa Primula",
        src: "/path/to/image1.jpg",
      },
      {
        title: "Rose Twilight",
        latinName: "Rosa Crepusculum",
        src: "/path/to/image2.jpg",
      },
      {
        title: "Morning Dew",
        latinName: "Rosa Rorida",
        src: "/path/to/image3.jpg",
      },
      {
        title: "Golden Hour",
        latinName: "Rosa Aurea",
        src: "/path/to/image4.jpg",
      },
      {
        title: "Last Light",
        latinName: "Rosa Ultima",
        src: "/path/to/image5.jpg",
      },
    ];
  
    let currentImage = roseImages[0]; // Default image
  </script>
  
  <div class="rose-gallery">
    <div class="image-frame">
      <img src="{currentImage.src}" alt="{currentImage.title}" />
      <p class="latin-name">{currentImage.latinName}</p>
    </div>
    
    <div class="image-thumbnails">
      {#each roseImages as image, i}
        <img
          src="{image.src}"
          alt="{image.title}"
          class="thumbnail"
          on:click={() => currentImage = image}
        />
      {/each}
    </div>
  </div>
  
  <style>
    .rose-gallery {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .image-frame {
      margin-top: 2rem;
      text-align: center;
    }
    .image-frame img {
      max-width: 100%;
    }
    .latin-name {
      font-style: italic;
    }
    .image-thumbnails {
      display: flex;
      overflow-x: scroll;
      gap: 1rem;
      margin-top: 1rem;
    }
    .thumbnail {
      width: 50px;
      height: 50px;
      object-fit: cover;
      cursor: pointer;
    }
  </style>
  
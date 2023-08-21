<script>
    export let mainImage; // URL for the main image
    export let galleryName; // Name of the gallery
  </script>
  
  <div class="gallery-layout">
    <div class="main-image-container">
      <img src={mainImage} alt={galleryName} class="main-image" />
    </div>
    <div class="thumbnails">
      <!-- Thumbnails will be added by specific gallery components -->
      <slot />
    </div>
  </div>
  
  <style>
    .gallery-layout {
      /* Main gallery layout styles */
    }
    .main-image-container {
      /* Styles for the container holding the main image */
    }
    .main-image {
      /* Styles for the main image */
      max-width: 100%;
      /* Add more styling as per design */
    }
    .thumbnails {
      /* Styles for the thumbnail container */
    }
  </style>
  
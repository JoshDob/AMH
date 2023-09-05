<script>
  let selectedImage = "/homeimg.jpeg";
  let latinTitle = "Rosa rubiginosa";
  let englishTitle = "Sweet Briar Rose";
</script>

<div class="home-container">
  <div class="image-frame">
    <img src={selectedImage} alt={englishTitle} class="featured-image">
    <div class="image-info">
      <p class="english-title">{englishTitle}</p>
      <p class="latin-title">{latinTitle}</p>
    </div>
  </div>
</div>

<style>
  .home-container {
    display: flex;
    
    margin-top: var(--a3);
  }

  .image-frame {
    display: flex;
    flex-direction: column;
    max-width: 80%;
    height: auto;
    align-items: center;
  }

  .featured-image {
    width: 100%;
    height: auto;
  }

  .image-info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--a2);
    font-family: var(--merri);
    font-size: var(--a1);
    font-weight: 300;
    color: var(--color2);
    gap: var(--f3);
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  .image-frame:hover .image-info {
    opacity: 1;
  }

  .latin-title {
    font-style: italic;
  }
</style>

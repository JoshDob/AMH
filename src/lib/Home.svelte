<script>
  let selectedImage = "/homeimg.jpeg";
  let latinTitle = "Rosa rubiginosa";
  let englishTitle = "Sweet Briar Rose";
</script>
<div />
<div class="home-container">
  <div class="image-frame">
    <img src={selectedImage} alt={englishTitle} class="featured-image">
    <div class="image-info">
      <p class="english-title">{englishTitle}</p>
      <p class="latin-title">{latinTitle}</p>
    </div>
  <div />
  </div>
</div>

<style>
  .home-container {
    display: flex;
    justify-content: space-evenly;
    padding-top: var(--e);
    margin-right: var(--d);
    padding-bottom: var(--e);
  }

  .image-frame {
    display: flex;
    flex-direction: column;
    max-width: 100%;
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
    margin-top: var(--a3);
    font-family: var(--merri);
    font-size: var(--a1);
    font-weight: 300;
    color: var(--color4);
    gap: var(--f3);
    opacity: 0.8;
    transition: 0.6s ease;
  }

  .image-frame:hover .image-info {
    opacity: 1;
    color: var(--color2);
  }

  .latin-title {
    font-style: italic;
  }

  @media screen and (max-width: 768px) {
    .home-container {
      flex-direction: column;
      margin-left: var(--d);
         }

    .image-frame {
      max-width: 100%;
    }
  }
</style>

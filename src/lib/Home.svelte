<script>
  let selectedImage = "/homeimg.jpeg";
  let latinTitle = "Rosa rubiginosa";
  let englishTitle = "Sweet Briar Rose";
</script>

<div class="home-container">
  <div class="image-frame">
    <img src={selectedImage} alt={englishTitle} class="featured-image" />
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
  padding: var(--e) var(--e3) var(--e) 0;
  width: 100%;
}

.image-frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
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
  opacity: 1;
  transition: 0.6s ease;
}

.image-frame:hover .image-info {
  opacity: 0.8;
  color: var(--crimson);
}

.latin-title {
  font-style: italic;
}

@media screen and (max-width: 768px) {
  .home-container {
    flex-direction: column;
    padding: var(--b1);
  }

  .image-frame {
    flex: 1;
  }
}

</style>

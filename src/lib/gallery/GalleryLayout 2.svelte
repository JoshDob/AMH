<script>
  export let images = [];

  let activeImage = 0;

</script>

<div class='layout'> 
  <div class='hero-and-titles'>
    <div class='hero'>
      <img src={images[activeImage]?.src} alt=''/>
    </div>
    <div class='titles'>
      <p>{images[activeImage]?.title}</p>
      <p class='latin'>{images[activeImage]?.latinName}</p>
    </div>
  </div>
  <div class='thumbnail-frame'>
    <div class='thumbnails'>
      {#each images as image, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class='thumbnail'>
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <img src={image.src} alt='' on:click={() => activeImage = i}/>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--a3);
}
.hero-and-titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
}
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    align-items: center; /* New line for vertically centering the .hero */

    }

  .hero img {
    object-fit: contain;
    margin: auto;
    max-width: 100%;
    max-height: 575px;
    align-self: center; /* Vertically center the image */

    
  }

  .titles {
    display: flex;
    text-wrap: nowrap;
    justify-content: center; 
    align-self: center;
    width: auto;
    max-width: 150%;
    font-family: 'Merriweather', serif;
    color: var(--color2);
    font-size: var(--a1);
    font-weight: 300;
    margin-top: var(--a3);
  }
  .titles p {
  margin-right: var(--d1); /* Space between titles */
  margin-left: var(--d1);  /* Space between titles */
}

  .latin {
    font-style: italic;
  }

  .thumbnail-frame {
    border: none;  /* Removed border */
    overflow-y: auto;
    padding-right: var(--c);
    max-height: 240px;
    scroll-behavior: smooth;
    margin-left: var(--d2);  /* Same distance from hero */

  }

  .thumbnails {
    display: flex;
    flex-direction: column;
    gap: 4px;  /* Increased gap between thumbnails */
  }

  .thumbnail img {
    width: 80px;  /* Made smaller */
    cursor: pointer;
  }

  /* Add a media query for smaller screens */
@media (max-width: 768px) {
  .hero img {
    max-width: 100%;
  }
  .thumbnail-frame {
    max-width: 100%;
  }
}
</style>
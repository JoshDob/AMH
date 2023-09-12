<script>
  import { onMount } from "svelte";
  import { fade } from 'svelte/transition';
  import { elasticOut } from 'svelte/easing';


  export let images = [];

  let activeImage = 0;

  const getThumbnailSrc = (src) => {
    const [path, ext] = src.split('.');
    return `${path}-t.${ext}`;
  };

  onMount(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = getThumbnailSrc(image.src);
    });
  })
</script>

          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<div class='layout'> 
  <div class='space-left'/>
  <div class='hero-and-titles'>
    <div class='hero'>
      <img src={images[activeImage]?.src} alt='' in:fade={{ delay: 1000, duration: 2000, easing: elasticOut }} />
    </div>
    <div class='titles' in:fade={{ duration: 3000 }}>
      <p>{images[activeImage]?.title}</p>
      <p class='latin'>{images[activeImage]?.latinName}</p>
    </div>
  </div>
  <div class='thumbnail-frame'>
    <div class='thumbnails'>
      {#each images as image, i}
        <div class='thumbnail'>

          <img src={getThumbnailSrc(image.src)} alt='' on:click={() => activeImage = i} />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
.layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--a3);
  width: 100%;
}
.space-left {
  width: var(--d3); /* Space between hero and thumbnails */
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
    min-height: 300px;
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
    justify-self: flex-end;
    scroll-snap-type: y mandatory;
  }

  .thumbnails {
    display: flex;
    flex-direction: column;
    gap: 4px;  /* Increased gap between thumbnails */
    scroll-snap-type: y mandatory;
    }

  .thumbnail img {
    width: 100px;  /* Made smaller */
    cursor: pointer;
    scroll-snap-align: start;
  }

  /* Add a media query for smaller screens */
@media (max-width: 768px) {
  .hero img {
    max-width: 100%;
  }
  .thumbnail-frame {
    max-width: 100%;
    flex-direction: row;
    overflow-x: auto;
  }
  .thumbnails {
    flex-direction: row;
    gap: 4px;
  }
  .thumbnail img {
    width: 100px;
    height: auto;
  }
}
</style>
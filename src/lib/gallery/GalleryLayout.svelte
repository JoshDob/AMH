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
      const imgThumb = new Image();
      imgThumb.src = getThumbnailSrc(image.src);

      const imgActive = new Image();
      imgActive.src = image.src;
    });
  })
</script>

          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<div class='layout'> 
  <div class='space-left'/>
  <div class='hero-and-titles'>
    <div class='hero'>
      <img src={images[activeImage]?.src} alt='' in:fade={{ delay: 500, duration: 1000, easing: elasticOut }} />
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

          <img src={getThumbnailSrc(image.src)} alt={image.title} on:click={() => activeImage = i} />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
.layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
    flex: 1;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    min-height: 300px;
    align-items: center; /* New line for vertically centering the .hero */

    }

  .hero img {
    object-fit: cover;
    margin: auto;
    max-width: 100%;
    max-height: 555px;

    
  }

  .titles {
    display: flex;
    text-wrap: nowrap;
    justify-content: center; 
    align-self: center;
    width: auto;
    max-width: 100%;
    font-family: 'Merriweather', serif;
    color: var(--color2);
    font-size: var(--a1);
    font-weight: 300;
    margin-top: var(--a3);
  }
  .titles p {
    transition: fade-in 1s ease-in-out;
  margin-right: var(--d1); /* Space between titles */
  margin-left: var(--d1);  /* Space between titles */
}

  .latin {
    font-style: italic;
  }

  .thumbnail-frame {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-right: var(--c);
    max-height: 306px;
    scroll-behavior: smooth;
    margin-left: var(--d2);  /* Same distance from hero */
    justify-self: flex-end;
    scroll-snap-type: y mandatory;
  }

  .thumbnails {
    gap: 4px;  /* Increased gap between thumbnails */
    scroll-snap-type: y mandatory;
    }

  .thumbnail img {
    object-fit: cover;
    height: 100px;
    width: 100px;
    margin: 0.5px;
    cursor: pointer;
    scroll-snap-align: start;
  }

  /* Add a media query for smaller screens */
@media (max-width: 768px) {
  .layout {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hero-and-titles {
    align-items: center;
    max-width: 100%;
  }

  .hero img {
    max-width: 100%;
    max-height: 300px;
  }
  .thumbnail-frame {
    max-width: 454px;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    margin: var(--a1) 0;
    scroll-snap-type: x mandatory;
  }
  .thumbnails {
    display: flex;
    flex-direction: row;
    scroll-snap-type: x mandatory;
    overflow-x: auto;  /* Enable horizontal scrolling */
    overflow-y: hidden;  /* Disable vertical scrolling */
  }

  .thumbnail img{
    height: 80px;
    width: 80px;
  }

  .space-left {
    display: none;
  }

  .titles {
    text-align: center;
    margin-top: var(--a1);
    margin-bottom: var(--a);
    font-size: var(--a1);
  }
}
</style>
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
      new Image().src = getThumbnailSrc(image.src);
      new Image().src = image.src;
    });
  });
</script>

<div class='layout'> 
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
  align-items:center;
  justify-items: space-evenly;
}

.hero-and-titles {
  display: flex;
  width: auto;
  height: auto;
  align-items: flex-start;
  flex-direction: column;
}

  .hero {
    max-height: 100%;
    max-width: 100%;
    display: flex;
    flex: 1;
    /* New line for vertically centering the .hero */

    }

  .hero img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    flex-shrink: 0;

    
  }

  .titles {
    display: flex;
    background-color: var(--color1) ;
    text-wrap: nowrap;
    align-self: center;
    width: auto;
    font-family: 'Merriweather', serif;
    color: var(--color2);
    font-size: var(--a1);
    font-weight: 300;
    margin-top: var(--b);
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
    max-width: 100%;
    max-height: 248px;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
  }

  .thumbnails {
    scroll-snap-type: y mandatory;
    flex-wrap: nowrap;  
    flex-shrink: 0;
    flex-grow: 0;
    }

  .thumbnail img {
    object-fit: cover;
    height: 80px;
    width: 80px;
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
    max-width: 100%;
  }

  .hero img {
    width: 100vw;
    max-width: 100%;
    height: 480px;
  }
  .thumbnail-frame {
    display: flex;
    max-width: 90vw;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }
  .thumbnails {
    gap: 4px;
    display: flex;
    flex-wrap: nowrap;
    width:auto;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: row;
    scroll-snap-type: x mandatory;
    overflow-x: auto;  /* Enable horizontal scrolling */
    overflow-y: hidden;  /* Disable vertical scrolling */
  }

  .thumbnail img{
    flex-shrink: 0;
    height: 80px;
    width: 80px;
  }

.titles {
    display: flex;
    align-items: center;
    font-family: var(--merri);
    font-size: var(--a1);
    font-weight: 300;
    color: var(--color2);
    /* opacity: 0; */
    transition: opacity 0.6s ease;
    justify-content: space-around;
    width: 100vw;
}
}

</style>
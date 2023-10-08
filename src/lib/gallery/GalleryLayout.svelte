<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<script>
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

  const heroImageWidth = writable('auto')
  let imgElement
  let isPortrait = false
  let activeImage = 0
  let contentAreaWidth
  let timeout
  export let images = []

  const debouncedHandleResize = () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      handleResize()
    }, 100) // 100ms delay
  }

  const updateContentAreaWidth = () => {
    contentAreaWidth = window.innerWidth * 0.9
  }

  const getThumbnailSrc = src => src.replace('.', '-T.')

  const handleKeydown = e => {
    if (['ArrowRight', 'ArrowLeft'].includes(e.key)) {
      const direction = e.key === 'ArrowRight' ? 1 : -1
      activeImage = (activeImage + direction + images.length) % images.length
    }
  }

  const setImageWidth = () => {
    heroImageWidth.set('auto')
    requestAnimationFrame(() => {
      if (imgElement) {
        const aspectRatio = imgElement.naturalWidth / imgElement.naturalHeight
        isPortrait = aspectRatio < 1
        heroImageWidth.set(
          isPortrait
            ? `${imgElement.offsetHeight}px`
            : `${imgElement.offsetWidth}px`
        )
      }
    })
  }

  $: {
    if (images?.length && imgElement?.complete) {
      setImageWidth()
      if (typeof contentAreaWidth !== 'undefined') {
        const aspectRatio = imgElement.naturalWidth / imgElement.naturalHeight
        const calculatedWidth = contentAreaWidth * (isPortrait ? 0.7 : 1)
        if (calculatedWidth < contentAreaWidth) {
          heroImageWidth.set(`${calculatedWidth}px`)
        }
      }
    }
  }

  const handleResize = () => {
    updateContentAreaWidth()
    setImageWidth()
  }

  onMount(() => {
    images.forEach(image => {
      new Image().src = getThumbnailSrc(image.src)
      new Image().src = image.src
    })
    updateContentAreaWidth()
    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })
</script>

<div class="gallery-layout">
  <div class="hero-and-titles" style="width: {$heroImageWidth};">
    <div class="hero">
      <img
        bind:this={imgElement}
        role="button"
        tabindex="0"
        src={images[activeImage]?.src}
        alt={images[activeImage]?.title}
        on:keydown={handleKeydown}
        on:load={setImageWidth}
        style="width: {$heroImageWidth};"
      />
    </div>
    <div class="titles">
      <p>{images[activeImage]?.title}</p>
      <p class="latin">{images[activeImage]?.latinName}</p>
    </div>
  </div>
  <div class="thumbnail-container">
    <div class="thumbnail-list">
      {#each images as image, i}
        <div class="thumbnail" on:click={() => (activeImage = i)}>
          <img
            role="button"
            src={getThumbnailSrc(image.src)}
            alt={`Thumbnail of ${image.title}`}
          />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .gallery-layout {
    display: grid;
    gap: var(--b);
    grid-template-areas: 'hero-and-titles thumbnail-container';
    grid-template-columns: 1fr 128px;
    grid-template-rows: auto;
    align-items: center;
    justify-items: center;
  }

  .hero-and-titles {
    grid-area: hero-and-titles;
  }

  .hero {
    display: flex;
    justify-content: center;
  }

  .hero img {
    object-fit: contain;
    max-width: 90vh;
    max-height: 78vh;
    cursor: pointer;
    justify-self: start;
  }

  .titles {
    display: flex;
    justify-content: space-evenly;
    background-color: var(--color1);
    color: var(--color2);
    font-family: 'Merriweather', serif;
    font-size: var(--a1);
    font-weight: 300;
    white-space: nowrap;
    padding: var(--a3);
  }

  .titles p {
    margin: 0;
  }

  .latin {
    font-style: italic;
  }

  .thumbnail-container {
    grid-area: thumbnail-container;
    display: flex;
    justify-content: center;
    overflow-y: auto;
    max-height: calc((88px * 4) + 4px * 3);
  }

  .thumbnail-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .thumbnail {
    height: 88px;
    width: 100%;
  }

  .thumbnail img {
    object-fit: cover;
    height: 88px;
    width: 88px;
    cursor: pointer;
  }

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    .gallery-layout {
      grid-template-areas:
        'hero-and-titles'
        'thumbnail-container';
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
    }

    .hero img {
      height: auto;
    }

    .thumbnail-list {
      flex-direction: row;
      justify-content: flex-start;
    }

    .thumbnail-container {
      justify-content: center;
      overflow-x: auto;
      max-width: calc((88px * 4) + 4px * 3);
    }
  }
</style>

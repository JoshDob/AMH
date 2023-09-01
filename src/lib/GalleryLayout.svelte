<script>
  import Roses from './gallery/1-Roses.svelte';
  import Arboretum from './gallery/2-TheArboretum.svelte';
  import BotanicaPrelude from './gallery/3-BotanicaPrelude.svelte';
  import BotanicaSymphony from './gallery/4-BotanicaSymphony.svelte';
  import BotanicaEnigma from './gallery/5-BotanicaEnigma.svelte';
  import InTheGarden from './gallery/6-InTheGarden.svelte';

  let currentGallery = 'Roses'; // Default gallery

  function setGallery(gallery) {
    currentGallery = gallery;
  }
</script>

<div class="gallery-layout">
  <div class="gallery-navigation">
    <button on:click={() => setGallery('Roses')}>Roses</button>
    <button on:click={() => setGallery('Arboretum')}>Arboretum</button>
    <button on:click={() => setGallery('BotanicaPrelude')}>Botanica Prelude</button>
    <button on:click={() => setGallery('BotanicaSymphony')}>Botanica Symphony</button>
    <button on:click={() => setGallery('BotanicaEnigma')}>Botanica Enigma</button>
    <button on:click={() => setGallery('InTheGarden')}>In The Garden</button>
  </div>

  <div class="gallery-content">
    {#if currentGallery === 'Roses'}
      <Roses />
    {:else if currentGallery === 'Arboretum'}
      <Arboretum />
    {:else if currentGallery === 'BotanicaPrelude'}
      <BotanicaPrelude />
    {:else if currentGallery === 'BotanicaSymphony'}
      <BotanicaSymphony />
    {:else if currentGallery === 'BotanicaEnigma'}
      <BotanicaEnigma />
    {:else if currentGallery === 'InTheGarden'}
      <InTheGarden />
    {/if}
  </div>
</div>

<style>
  .gallery-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .gallery-navigation {
    display: flex;
    gap: 1rem;
  }
  .gallery-content {
    margin-top: 2rem;
    width: 100%;
  }
</style>

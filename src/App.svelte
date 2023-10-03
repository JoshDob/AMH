<script>
  import { Router, Route } from "svelte-routing";
  import Navigation from './lib/Navigation.svelte';
  import NavigationMobile from './lib/NavigationMobile.svelte';
  import Home from './lib/Home.svelte';
  import * as Galleries from './lib/gallery/galleryImports.js';
  import Photographer from './lib/about/1-Photographer.svelte';
  import ArchivalPrints from './lib/about/2-ArchivalPrints.svelte';
  import Background from './lib/about/3-Background.svelte';
  import GetInTouch from './lib/GetInTouch.svelte';
  import Header from "./lib/Header.svelte";
  import Footer from "./lib/Footer.svelte";
  import { firstImages } from "./lib/gallery/galleries";
  import { onMount } from "svelte";

  let isMobile = window.innerWidth <= 768;

  onMount(() => {
  const handleResize = () => {
    isMobile = window.innerWidth <= 768;
  };

  firstImages.forEach((image) => {
    const img = new Image();
    img.src = image.src;
  });

  window.addEventListener('resize', handleResize);

  // Cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
  };
});



  $: if (isMobile) {
    document.documentElement.style.setProperty('--nav-width', '0px');
  } else {
    document.documentElement.style.setProperty('--nav-width', '248px');
  }
</script>

<div class="app" >
  <Router>
    <Header />
    <Navigation class="navigation" />
    {#if isMobile}
      <NavigationMobile />
    {/if}
    <div class="content" >
      <Route path="/" component={Home} />
      <Route path="/gallery/roses" component={Galleries.GalleryRoses} />
      <Route path="/gallery/arboretum" component={Galleries.GalleryArboretum} />
      <Route path="/gallery/botanica-prelude" component={Galleries.GalleryBotanicaPrelude} />
      <Route path="/gallery/botanica-symphony" component={Galleries.GalleryBotanicaSymphony} />
      <Route path="/gallery/botanica-enigma" component={Galleries.GalleryBotanicaEnigma} />
      <Route path="/gallery/in-the-garden" component={Galleries.GalleryInTheGarden} />
      <Route path="/about/photographer" component={Photographer} />
      <Route path="/about/archival-prints" component={ArchivalPrints} />
      <Route path="/about/background" component={Background} />
      <Route path="/get-in-touch" component={GetInTouch} />
    </div>
    <Footer class="footer" style="grid-area: footer;" />
  </Router>
</div>

<style>
  .app {
    display: grid;
    grid-template-areas: 
      'header header'
      'navigation content'
      'footer footer';
    
    grid-template-columns: var(--nav-width) 1fr;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
  }

  .content {
  grid-area: content;
  display: grid;
  width: calc(100vw - var(--nav-width));
  height: calc(100vh - var(--header-height));
}

  


  @media (max-width: 768px) {
    .app {
      grid-template-areas:
        'header'
        'navigation-mobile'
        'content'
        'footer';
    }
  }
</style>
<script>
    import { Router, Route, Link } from "svelte-routing";
    import Navigation from './lib/Navigation.svelte';
    import NavigationMobile from './lib/NavigationMobile.svelte';
    import Home from './lib/Home.svelte';
    import GalleryRoses from './lib/gallery/1-Roses.svelte';
    import GalleryArboretum from './lib/gallery/2-TheArboretum.svelte';
    import GalleryBotanicaPrelude from './lib/gallery/3-BotanicaPrelude.svelte';
    import GalleryBotanicaSymphony from './lib/gallery/4-BotanicaSymphony.svelte';
    import GalleryBotanicaEnigma from './lib/gallery/5-BotanicaEnigma.svelte';
    import GalleryInTheGarden from './lib/gallery/6-InTheGarden.svelte';
    import Photographer from './lib/about/1-Photographer.svelte';
    import ArchivalPrints from './lib/about/2-ArchivalPrints.svelte';
    import Background from './lib/about/3-Background.svelte';
    import GetInTouch from './lib/GetInTouch.svelte';
    import Header from "./lib/Header.svelte";
    import Footer from "./lib/Footer.svelte";
    import { firstImages } from "./lib/gallery/galleries";
    import { onMount } from "svelte";

    onMount(() => {
    firstImages.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  })
  </script>
  
  
  <Router>
    <Header />
    <div class='page'>
    <Navigation />
    <NavigationMobile />
    <div class='content'>
    <Route path="/" component={Home} />
    <Route path="/gallery/roses" component={GalleryRoses} />
    <Route path="/gallery/arboretum" component={GalleryArboretum} />
    <Route path="/gallery/botanica-prelude" component={GalleryBotanicaPrelude} />
    <Route path="/gallery/botanica-symphony" component={GalleryBotanicaSymphony} />
    <Route path="/gallery/botanica-enigma" component={GalleryBotanicaEnigma} />
    <Route path="/gallery/in-the-garden" component={GalleryInTheGarden} />
    <Route path="/about/photographer" component={Photographer} />
    <Route path="/about/archival-prints" component={ArchivalPrints} />
    <Route path="/about/background" component={Background} />
    <Route path="/get-in-touch" component={GetInTouch} />
    </div>
    <div class='space' />
  </div>
  <Footer />
  </Router>

<style>
.space {
  flex-grow: 1;
}



.page {
display: flex;
align-items: flex-start;
}


.content {
  display: flex;


}

@media (max-width: 768px) {
  .page {
    flex-direction: column;
  }
  .space {
    display: none;
  }
}
</style>
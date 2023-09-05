<script>
    import { Router, Route, Link } from "svelte-routing";
    import Navigation from './lib/Navigation.svelte';
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
    import JournalSpring from './lib/journal/Spring.svelte';
    import JournalSummer from './lib/journal/Summer.svelte';
    import JournalFall from './lib/journal/Fall.svelte';
    import JournalWinter from './lib/journal/Winter.svelte';
    import GetInTouch from './lib/GetInTouch.svelte';
    import Header from "./lib/Header.svelte";
  </script>
  
  
  
  <Router>
    <Header />
    <div class='page'>
    <Navigation />
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
    <Route path="/journal/spring" component={JournalSpring} />
    <Route path="/journal/summer" component={JournalSummer} />
    <Route path="/journal/fall" component={JournalFall} />
    <Route path="/journal/winter" component={JournalWinter} />
    <Route path="/get-in-touch" component={GetInTouch} />
    </div>
  </div>
  </Router>
<style>
.page {
  display: grid;
  grid-template-columns: min-content 1fr;
}


.content {
  display: flex;
  justify-content: center; /* Center align the flex items */
  flex-grow: 1; /* Take up all remaining space in the flex container */
}



</style>
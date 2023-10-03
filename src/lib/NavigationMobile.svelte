<script>
  import { slide } from 'svelte/transition';
  import { Link } from 'svelte-routing';
  
  let menuOpen = false;
  let dragStartX = 0;
  let openSection = null;
  let activeLink = 'home';

  function handleDragStart(event) {
    dragStartX = event.clientX;
  }

  function handleDragEnd(event) {
    if (event.clientX - dragStartX > 50) {
      menuOpen = false;
    }
  }
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
  function toggleSection(section) {
    openSection = openSection === section ? null : section;
    activeLink = section;
  }

  function setActiveLink(link) {
    activeLink = link;
  }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-missing-attribute -->
  
<nav class="navigation" aria-label="Main Navigation" class:closed={!menuOpen}
on:mousedown={handleDragStart} on:mouseup={handleDragEnd}>
  <Link to="/">
    
    <p class="nav-item" on:click={toggleMenu} class:active={activeLink === 'home'}>Home</p></Link>
  
  <a on:click={() => toggleSection('galleries')}><p class="nav-item" class:open-nav-item={openSection === 'galleries'} class:active={activeLink === 'galleries'}>Galleries</p></a>
  <div class="submenu" class:open={openSection === 'galleries'}>
    <Link to="/gallery/roses"><p on:click={toggleMenu} class:active={activeLink === 'roses'} class="submenu-item">Roses</p></Link>
    <Link to="/gallery/arboretum"><p on:click={toggleMenu} class:active={activeLink === 'arboretum'} class="submenu-item">The Arboretum</p></Link>
    <Link to="/gallery/botanica-prelude"><p on:click={toggleMenu} class:active={activeLink === 'botanica-prelude'} class="submenu-item">Botanica Prelude</p></Link>
    <Link to="/gallery/botanica-symphony"><p on:click={toggleMenu} class:active={activeLink === 'botanica-symphony'} class="submenu-item">Botanica Symphony</p></Link>
    <Link to="/gallery/botanica-enigma"><p on:click={toggleMenu} class:active={activeLink === 'botanica-enigma'} class="submenu-item">Botanica Enigma</p></Link>
    <Link to="/gallery/in-the-garden"><p on:click={toggleMenu} class:active={activeLink === 'in-the-garden'} class="submenu-item">In The Garden</p></Link>
  </div>
  <a on:click={() => toggleSection('about')}><p class="nav-item" class:open-nav-item={openSection === 'about'} class:active={activeLink === 'about'}>About</p></a>
  <div class="submenu" class:open={openSection === 'about'}>
    <Link to="/about/photographer"><p on:click={toggleMenu} class:active={activeLink === 'photographer'} class="submenu-item">Photographer</p></Link>
    <Link to="/about/archival-prints"><p on:click={toggleMenu} class:active={activeLink === 'archival-prints'} class="submenu-item">Prints</p></Link>
    <Link to="/about/background"><p on:click={toggleMenu} class:active={activeLink === 'background'} class="submenu-item">Background</p></Link>
  </div>
  <a on:click={() => toggleSection('journal')}><p class="nav-item" class:open-nav-item={openSection === 'journal'} class:active={activeLink === 'journal'}>Journal</p></a>
  <div class="submenu" class:open={openSection === 'journal'}>
    <!-- <Link to="/journal/spring"><p class:active={activeLink === 'spring'} class="submenu-item">Spring</p></Link>
    <Link to="/journal/summer"><p class:active={activeLink === 'summer'} class="submenu-item">Summer</p></Link>
    <Link to="/journal/fall"><p class:active={activeLink === 'fall'} class="submenu-item">Fall</p></Link>
    <Link to="/journal/winter"><p class:active={activeLink === 'winter'} class="submenu-item">Winter</p></Link> -->
  </div>
  <Link to="/get-in-touch" on:click={() => setActiveLink('get-in-touch')}><p class="nav-item" on:click={toggleMenu} class:active={activeLink === 'get-in-touch'}>Get In Touch</p></Link>
</nav>

<button class="nav-toggle-button {menuOpen ? 'flex-end' : 'flex-start'}" on:click={toggleMenu} aria-label="Toggle Navigation">
  {#if menuOpen}
    ✖
  {:else}
    ☰
  {/if}
</button>


<style>
  .flex-start {
  align-self: flex-start;
}

.flex-end {
  align-self: flex-end;
}


.navigation {
  display: flex;
  bottom: 0;
  width: auto;  /* Changed from fixed width */
  top: var(--header-height); /* Set the top value to the height of the header */
  height: calc(100vh - (var(--header-height) + var(--footer-height))); /* Set the height to the height of the viewport minus the header and footer */
  min-width: 160px;  /* Set a minimum width */
  max-width: 20%;  /* Will not take more than 20% of the parent width */
  flex-shrink: 0;
  background: none;
  flex-direction: column;
  font-family: var(--cinzel);
  padding-top: var(--b);
}

.nav-item
{
  cursor: pointer;
  padding: var(--a1) var(--b);
  position: sticky;
  display: flex;
  color: var(--color2);
  align-content: center;
 }

.submenu-item {
  cursor: pointer;
  padding: 0.5rem var(--b);
  position: relative;
  display: flex;
  color: var(--color2);
}

.nav-item::before,
.submenu-item::before {
  content: "";
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: var(--crimson);
  visibility: hidden;
  transition: all 0.5s ease;
}

.submenu-item:hover:active,
.nav-item:hover:active {
  color: var(--crimson);
}

.nav-item:hover::before,
.submenu-item:hover::before {
  width: 75%;
  visibility: visible;
}

.submenu {
  display: none;
  flex-direction: column;
  padding-left: var(--b1);
}

.submenu.open {
  display: block;
}

.submenu-item {
  border-left: 1px solid var(--crimson);
  padding-left: 1rem;
}

.open-nav-item:hover::before {
  width: 0;
  visibility: hidden;
}

/* Mobile Styles */
@media (min-width: 769px) {
  .navigation {
    display: none;
  }

  .nav-toggle-button
  {
    display: none;
  }
}

@media (max-width: 768px) {
  .navigation {
    position: fixed;
    min-width: none;
    max-width: none;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: var(--e3);
    width: 100vw;
    background: var(--color1);
    z-index: 1000;
    align-items: center; /* Center the items horizontally */
    justify-content: stretch; /* Center the items vertically */
    font-size: 140%;
    gap: var(--a1);
  }

  
  .closed {
    transform: translateX(-100%);
    transition: transform 0.4s ease-in-out;
  }

  .navigation:not(.closed) {
    transform: translateX(0);
    transition: transform 0.4s ease-in-out;
  }

  .nav-toggle-button {
    position: flex;
    top: var(--header-height);
    left: var(--a1);
    padding: var(--a1);
    z-index: 1003;
    color: var(--color2);
    border: none;
    background-color: var(--color1);
    font-size: 140%;
  }

  .nav-item,
  .submenu-item {
    text-wrap: nowrap; /* Prevent text wrapping */
    padding: var(--a) var(--b); /* Add padding to the top and bottom */
  }

  .submenu {
    align-items: center; /* Center the submenu items horizontally */
  }

  .submenu-item::before {
    display: none; /* Hide the underline */
  }

 
  .submenu-item:hover:active,
.nav-item:hover:active {
  color: var(--crimson);
}

.nav-item:hover::before,
.submenu-item:hover::before {
  width: 75%;
  visibility: visible;
  left: -var(--b);
}
}

</style>
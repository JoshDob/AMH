  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-missing-attribute -->
  <script>
    import { Link } from 'svelte-routing';
  
    let openSection = null;
    let activeLink = 'home';
  
    function toggleSection(section) {
      openSection = openSection === section ? null : section;
      activeLink = section;
    }
    
    function setActiveLink(link) {
      activeLink = link;
    }
  </script>

<nav class="navigation" aria-label="Main Navigation">
  <Link to="/" on:click={() => setActiveLink('home')}><p class="nav-item" class:active={activeLink === 'home'}>Home</p></Link>
  <a on:click={() => toggleSection('galleries')}><p class="nav-item" class:open-nav-item={openSection === 'galleries'} class:active={activeLink === 'galleries'}>Galleries</p></a>
  <div class="submenu" class:open={openSection === 'galleries'}>
    <Link to="/gallery/roses"><p class:active={activeLink === 'roses'} class="submenu-item">Roses</p></Link>
    <Link to="/gallery/arboretum"><p class:active={activeLink === 'arboretum'} class="submenu-item">The Arboretum</p></Link>
    <Link to="/gallery/botanica-prelude"><p class:active={activeLink === 'botanica-prelude'} class="submenu-item">Botanica Prelude</p></Link>
    <Link to="/gallery/botanica-symphony"><p class:active={activeLink === 'botanica-symphony'} class="submenu-item">Botanica Symphony</p></Link>
    <Link to="/gallery/botanica-enigma"><p class:active={activeLink === 'botanica-enigma'} class="submenu-item">Botanica Enigma</p></Link>
    <Link to="/gallery/in-the-garden"><p class:active={activeLink === 'in-the-garden'} class="submenu-item">In The Garden</p></Link>
  </div>
  <a on:click={() => toggleSection('about')}><p class="nav-item" class:open-nav-item={openSection === 'about'} class:active={activeLink === 'about'}>About</p></a>
  <div class="submenu" class:open={openSection === 'about'}>
    <Link to="/about/photographer"><p class:active={activeLink === 'photographer'} class="submenu-item">Photographer</p></Link>
    <Link to="/about/archival-prints"><p class:active={activeLink === 'archival-prints'} class="submenu-item">Prints</p></Link>
    <Link to="/about/background"><p class:active={activeLink === 'background'} class="submenu-item">Background</p></Link>
  </div>
  <a on:click={() => toggleSection('journal')}><p class="nav-item" class:open-nav-item={openSection === 'journal'} class:active={activeLink === 'journal'}>Journal</p></a>
  <div class="submenu" class:open={openSection === 'journal'}>
    <!-- <Link to="/journal/spring"><p class:active={activeLink === 'spring'} class="submenu-item">Spring</p></Link>
    <Link to="/journal/summer"><p class:active={activeLink === 'summer'} class="submenu-item">Summer</p></Link>
    <Link to="/journal/fall"><p class:active={activeLink === 'fall'} class="submenu-item">Fall</p></Link>
    <Link to="/journal/winter"><p class:active={activeLink === 'winter'} class="submenu-item">Winter</p></Link> -->
  </div>
  <Link to="/get-in-touch" on:click={() => setActiveLink('get-in-touch')}><p class="nav-item" class:active={activeLink === 'get-in-touch'}>Get In Touch</p></Link>
</nav>

<style>

.navigation {
  display: flex;
  bottom: var(--footer-height);
  top: var(--header-height); /* Set the top value to the height of the header */
  height: calc(100vh - (var(--header-height) + var(--footer-height))); /* Set the height to the height of the viewport minus the header and footer */
  min-width: 207px;  /* Set a minimum width */
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
  align-content: flex-end;
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
  transition: all 0.6s ease;
  
}

.submenu-item:hover:active,
.nav-item:hover:active {
  color: var(--crimson);
}

.nav-item:hover::before,
.submenu-item:hover::before {
  width: 60%;
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
@media (max-width: 769px) {
  .navigation{
    display: none;
  }
}
</style>
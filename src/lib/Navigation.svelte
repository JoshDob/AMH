<script>
    import { link } from 'svelte-routing';
    let galleriesOpen = false;
    let aboutOpen = false;
    let journalOpen = false;
</script>

<nav class="navigation">
    <a href="/" use:link>Home</a>
    <div class="nav-section" on:click={() => galleriesOpen = !galleriesOpen}>
        <span>Galleries</span>
        <div class="submenu" class:open={galleriesOpen}>
            <!-- Gallery links -->
        </div>
    </div>
    <div class="nav-section" on:click={() => aboutOpen = !aboutOpen}>
        <span>About</span>
        <div class="submenu" class:open={aboutOpen}>
            <!-- About links -->
        </div>
    </div>
    <div class="nav-section" on:click={() => journalOpen = !journalOpen}>
        <span>Journal</span>
        <div class="submenu" class:open={journalOpen}>
            <!-- Journal links -->
        </div>
    </div>
    <a href="/get-in-touch" use:link>Get In Touch</a>
</nav>
<style>
.navigation {
    width: 15rem;
    background-color: #FAFAFA;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    font-family: 'EB Garamond', serif;
}

.nav-section > span {
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.5rem 0;
    display: block; /* Make the entire area clickable */
}

.submenu {
    display: none; /* Initially hidden */
    padding-left: 1rem;
}

.nav-section.open > .submenu {
    display: block; /* Shown when parent section is open */
}

a {
    text-decoration: none;
    color: #333;
    padding: 0.25rem 0;
    font-size: 1rem;
}

a:hover {
    text-decoration: underline;
    color: #000;
}

</style>

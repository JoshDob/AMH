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
            <a href="/gallery/roses" use:link>Roses</a>
            <a href="/gallery/arboretum" use:link>The Arboretum</a>
            <a href="/gallery/botanica-prelude" use:link>Botanica Prelude</a>
            <a href="/gallery/botanica-symphony" use:link>Botanica Symphony</a>
            <a href="/gallery/botanica-enigma" use:link>Botanica Enigma</a>
            <a href="/gallery/in-the-garden" use:link>In The Garden</a>
        </div>
    </div>
    <div class="nav-section" on:click={() => aboutOpen = !aboutOpen}>
        <span>About</span>
        <div class="submenu" class:open={aboutOpen}>
            <a href="/about/photographer" use:link>Photographer</a>
            <a href="/about/archival-prints" use:link>Archival Prints</a>
        </div>
    </div>
    <div class="nav-section" on:click={() => journalOpen = !journalOpen}>
        <span>Journal</span>
        <div class="submenu" class:open={journalOpen}>
            <a href="/journal/spring" use:link>Spring</a>
            <a href="/journal/summer" use:link>Summer</a>
            <a href="/journal/fall" use:link>Fall</a>
            <a href="/journal/winter" use:link>Winter</a>
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
    }

    .submenu {
        display: none; /* Initially hidden */
        padding-left: 1rem;
        flex-direction: column; /* List items vertically */
    }

    .submenu.open {
        display: flex; /* Show the submenu when the .open class is applied */
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

<script>
    export let sectionTitle = "Fine Art Photography";
</script>

<header class="header">
    <div class="client-name">AnneMarie Hunter</div>
    <div class="section">
        <div class="section-title">{sectionTitle}</div>
        <div class="underline"></div>
    </div>
</header>

<style>
    .header {
        display: flex;
        width: 90rem;
        height: 2rem;
        padding: 1.5rem 1rem;
        align-items: flex-end;
        gap: 3.75rem;
        background-color: #FFF;
    }

    .client-name {
        color: #000;
        font-family: 'EB Garamond', serif;
        font-size: 1.5rem;
        font-weight: 400;
        font-variant: small-caps;
    }

    .section {
        position: relative;
    }

    .section-title {
        color: #000;
        font-family: 'Muli', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 0.175rem;
        text-transform: uppercase;
    }

    .underline {
        position: absolute;
        left: -15rem;
        top: 105%; /* Positioned right below the text */
        width: 34rem;
        height: 1px; /* Specifying the height for the line */
        background-color: #c61313;
    }
</style>

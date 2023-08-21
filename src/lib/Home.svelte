<script>
    export let mainImage = "/public/15-8345.JPG";
</script>

<div class="home-container">
    <div class="main-image-container">
        <img src={mainImage} alt="Selected by the Artist" class="main-image" />
    </div>
</div>

<style>
    .home-container {
        /* Adjust container styling as needed */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .main-image-container {
        /* Styles for the container holding the main image */
        max-width: 100%;
        overflow: hidden;
    }
    .main-image {
        /* Styles for the main image */
        max-width: 100%;
        /* Add more styling as per design */
    }
</style>

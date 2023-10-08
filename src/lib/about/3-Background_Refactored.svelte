<!-- src/lib/about/3-Background.svelte -->

<script>
  import { onMount } from 'svelte'
  let backgroundSealImage = '/Seal.png' // Replace this with the actual path

  onMount(() => {
    // Any initialization logic can go here
  })
</script>

<div class="background-page">
  <div class="content">
    <h2>Photography Clients</h2>
    <ul class="client-list">
      <!-- Client list goes here -->
    </ul>
    <!-- More content -->
  </div>
</div>

<style>
  .background-page {
    /* Your general styles here */
  }
  h2 {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
  }
  strong {
    font-family: 'Cinzel', serif;
  }
  .content {
    /* Other styles */
  }
</style>

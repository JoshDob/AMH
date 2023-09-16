<script>

let footerRef;
  let footerHeight;
  $: if (footerRef) {
    footerHeight = footerRef.offsetHeight;
    document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
  }

</script>

<footer class="footer" bind:this={footerRef}>
    <p style="text-align: left; font-size: 0.81rem;">All Images ©AnneMarie Hunter</p>
</footer>

<style>

footer.footer {
    display: none;
    font-family: var(--muli);
    z-index: 1002;
   background: none;
   height: var(--b);
   padding-left: var(--a1)
  }

  @media (max-width: 768px) {
    footer.footer {
      display: none;
    }
  }

</style>
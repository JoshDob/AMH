<!-- header.svelte -->
<script>
  export let sectionTitle = "Fine Art Photography";

  let headerRef;
  let headerHeight;
  $: if (headerRef) {
    headerHeight = headerRef.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
  }
</script>

<header class="header" bind:this={headerRef}>
  <div class="text-wrapper">
    <div class="client-name">AnneMarie Hunter</div>
    <div class="section-title">{sectionTitle}</div>
  </div>
  <div class="underline"></div>
</header>

<style>
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--b) var(--a1);
  width: 100%;
}

.text-wrapper {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: flex-end;
}

.client-name, .section-title {
  color: var(--color2);
  font-family: var(--merri);
  font-size: var(--a2);
  font-weight: 300;
  font-variant: small-caps;
  white-space: nowrap;
}

.section-title {
  text-align: right;
  font-family: 'Muli', sans-serif;
  font-size: var(--a);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-left: var(--d2);
}

.underline {
  height: 1px;
  width: 400px;
  margin-left: var(--c);
  background-color: var(--crimson);
}

@media (max-width:768px) {

  .header {
    flex-direction: column;
    align-items: space-between;
  }

  .underline {
    width: 310px;  /* Full width on mobile */
  }

  .section-title {
    margin-left: var(--c);
    letter-spacing: 0.1em;
  }
}

</style>

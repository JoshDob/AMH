<!-- header.svelte -->
<script>
  import { fade } from 'svelte/transition';
  import { useLocation } from 'svelte-routing';
  import { afterUpdate } from 'svelte';

  let headerRef;
  let headerHeight;
  let sectionTitle = '';
  let location = useLocation();
  let textWrapperWidth = 0;

  $: pathname = $location.pathname;
  $: sectionTitle = getPageName(pathname);

  afterUpdate(() => {
    if (headerRef) {
      headerHeight = headerRef.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    }
  });

  function getPageName(path) {
    if (!path || path === '/') return 'Fine Art Photography';
    const lastPart = path.split('/').pop();
    return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
  }
</script>

<header class="header" bind:this={headerRef}>
  <div class="text-wrapper" bind:clientWidth={textWrapperWidth}>
    <div class="client-name">AnneMarie Hunter</div>
    {#if sectionTitle}
      <div class="section-title" in:fade={{ duration: 300 }}>
        {sectionTitle}
      </div>
    {/if}
  </div>
  <div class="underline" style="width: {textWrapperWidth}px;"></div>
</header>

<style>
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--b) var(--a3);
}

.text-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.client-name, .section-title {
  color: var(--color2);
  font-weight: 300;
  font-variant: small-caps;
  white-space: nowrap;
}

.client-name {
  font-family: var(--merri);
  font-size: var(--a3);
  margin-right: auto;
  margin-bottom: -2px;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.section-title {
  text-align: right;
  font-family: 'Muli', sans-serif;
  font-weight: 400;
  font-size: var(--a);
  letter-spacing: 0.4em;
  text-transform:uppercase;
  margin-left: var(--d2);
}

.underline {
  height: 1px;
  margin-left: var(--c);
  margin-top: 2px;
  background-color: var(--crimson);
  max-width: 90%;
}

@media (max-width:768px) {

  .section-title {
    margin-left: var(--b2);
    letter-spacing: 0.08em;
  }

  .client-name {
    font-size: var(--a2); 
    margin-bottom: -1px;
  }
}

@media (max-width:400px) {

  .section-title {
    font-size: var(--a);
    margin-left: var(--b1);
    letter-spacing: 0.06em;
  }
  .client-name {
    font-size: var(--a2); 
    margin-bottom: -1px;
  }

}
</style>

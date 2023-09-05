<!-- header.svelte -->
<script>
  export let sectionTitle = "Fine Art Photography";
</script>

<header class="header">
<div class="section">
  <div class="client-name">AnneMarie Hunter</div>
  <div class="section-title">{sectionTitle}
    <div class="underline"></div>
  </div>
</div>
</header>

<style>
    .header {
  display: flex;
  padding: var(--b1) var(--a1);
  align-items: baseline;
  gap: var(--c2);
  background-color: transparent;
;}

.client-name {
  color: var(--color2);
  font-family: var(--merri);
  font-size: var(--a3);
  font-weight: 300;
  font-variant: small-caps;
}

.section {
  display: flex;
  align-items: baseline;
  flex-direction: row;
  gap: var(--d);
}

.section-title {
  color: var(--color2);
  font-family: 'Muli', sans-serif;
  font-size: var(--a);
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}

.underline {
  position: relative;
  height: 1px;
  left: -100%;
  width: 220%;
  background-color: var(--crimson);
  width: fill;
  margin-top: 0.5rem;
}
</style>

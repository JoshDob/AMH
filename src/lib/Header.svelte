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
  width: 100%;
  height: 10vh;
  padding: var(--e2) var(--d2);
  align-items: baseline;
  gap: var(--g2);
  background-color: var(--color1);
}

.client-name {
  color: var(--color2);
  font-family: var(--font-body);
  font-size: var(--d2);
  font-weight: 400;
  font-variant: small-caps;
}

.section {
  position: relative;
}

.section-title {
  color: var(--color2);
  font-family: 'Muli', sans-serif;
  font-size: var(--c);
  letter-spacing: var(--a);
  text-transform: uppercase;
}

.underline {
  position: absolute;
  left: -90%;
  top: 160%;
  width: 200%;
  height: 1px;
  background-color: var(--crimson);
}
</style>

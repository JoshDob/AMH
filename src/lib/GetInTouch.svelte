<script>
  let contactImage = "/getimg.jpeg";
</script>

<div class="contact-container">
  <p class="contact-text">
    Please get in touch if you’d like to learn more about my work. You can reach me at amh@annemariehunter.com
  </p>

  <div class="contact-image">
    <img src={contactImage} alt="Contact" />
  </div>
  
  <p class="contact-quote">
    "I have promised myself that I’m going to do everything I can for as long as can."
    Greta Thunberg
  </p>
</div>

<style>
  .contact-container {
    padding: var(--b);
  }
  
  .contact-image img {
    width: 200px;
    margin-top: var(--a);
  }
</style>

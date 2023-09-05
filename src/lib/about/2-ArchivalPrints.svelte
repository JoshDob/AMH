<!-- src/lib/about/2-ArchivalPrints.svelte -->

<script>
    let archivalPrintImage = "/Seal.png"; // Replace this with the actual path
  </script>
  
  <div class="archival-prints-page">
    <div class="content">
      <p>
        <strong>All images</strong> are archivally printed as either fine art giclée or metal prints. Available as limited editions in a wide range of sizes, prints are signed and numbered.
        <br><br>
        <strong>Fine Art Giclée</strong><br>
        Printed on a paper that resembles the surface of fine watercolor paper, these prints have excellent detail and color reproduction with exceptional depth, richness and vibrancy. The prints have white borders and arrive ready to be matted and framed. Giclée prints are signed and numbered on the front.
        <br><br>
        <strong>Metal Prints</strong><br>
        Available with a glossy or pearl finish, metal prints are made through a dye sublimation process, where dyes are infused directly into specially coated aluminized metal panels. The luminous coating is a waterproof, durable barrier against dirt, abrasion and harmful UV rays, thus eliminating the need for protective glass. The lightweight metal prints include invisible hangers mounted to the back. Metal prints are signed and numbered on the back.
        <br><br>
        <strong>Small Print Collection</strong><br>
        Choose six images from any gallery for a collection of 8x10 metal or giclée prints. Prints are shipped in a handcrafted, archival box in which they can be safely stored, presented as a gift or kept until they are displayed.         <br><br>
        <strong>Digital Licensing</strong><br>
        Images are available for digital media purposes and reproduction, including advertising, editorial or other usage. Options include royalty-free or single-usage rights. 
        <br><br>
      </p>
  
      <img src="{archivalPrintImage}" alt="AnneMarie Hunter's Seal" />
  
      <p class="contact-info">
        Please contact <a href="mailto:amh@annemariehunter.com">amh@annemariehunter.com</a> with questions, including pricing, print size availability or digital usage agreements.
      </p>
    </div>
  </div>
  
  <style>
    .archival-prints-page {
      max-width: 600px;
      margin: auto;
      text-align: center;
    }
  
    .content p {
      margin-bottom: var(--b);
      margin-top: var(--b);
      line-height: var(--a1);
      font-size: var(--a);
    }
  
    img {
      width: 100px; /* Adjust the size to fit the design */
      margin: var(--a) auto;
    }
  
    .contact-info {
      margin-top: var(--a);
    }
  </style>
  
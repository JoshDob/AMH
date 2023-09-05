<!-- src/lib/about/3-Background.svelte -->

<script>
    let backgroundSealImage = "/Seal.png"; // Replace this with the actual path
  </script>
  
  <div class="background-page">
    <div class="content">
  
      <h2>Photography Clients</h2>
      <ul class="client-list">
        <li>Children’s Defense Fund</li>
        <li>Ford Motor Company</li>
        <li>General Motors</li>
        <li>Harley-Davidson Motor Company, Inc.</li>
        <li>HNA Newspaper; Germany Photojournalist</li>
        <li>JazzTimes Magazine</li>
        <li>Kansas City Ballet</li>
        <li>Kansas City Star Photojournalist</li>
        <li>Nelson-Atkins Museum of Art</li>
        <li>Stowers Institute for Medical Research</li>
      </ul>
  
      <h2>Collections and Installations</h2>
      <ul class="collection-list">
        <li>Harley-Davidson Motor Company permanent collection</li>
        <li>“H-D Bike Builders”<br>
          55 large-scale images of H-D plants, motorcycles and those who build them.</li>
        <li>Harley-Davidson Motor Company Tour Centers<br>
          These comprehensive installation projects included images for mural-size prints and graphics included as permanent, integral elements of the building design.</li>
        <li>Gordon Parks Museum; Fort Scott, KS.</li>
        <li>Museum of Fine Arts; Houston</li>
        <li>Nelson-Atkins Museum of Art; Kansas City</li>
        <li>Portland Museum of Fine Arts; Portland</li>
      </ul>
  
      <h2>Exhibitions</h2>
      <ul class="exhibition-list">
        <li>New Voices Exhibit: Photographic Image Gallery; Portland</li>
        <li>Committee’s Choice Exhibit: Society for Contemporary Photography; Kansas City</li>
        <li>Artists’ Portraits: Group Exhibit: Photographic Image Gallery; Portland</li>
        <li>Solo Exhibit-Landscapes/Flowers: Unity Temple; Kansas City</li>
        <li>Kansas City Arts Commission Award Exhibit: Nelson-Atkins Museum of Art; Kansas City</li>
      </ul>
  
      <h2>Writing Clients Include</h2>
      <ul class="writing-clients">
        <li>Kansas City Business Journal</li>
        <li>KC Studio Magazine</li>
        <li>University of Missouri-Kansas City</li>
        <li>Washington State University</li>
      </ul>
  
      <h2>Education</h2>
      <p class="education-text">
        Northwestern University; Evanston, IL. B.S., Communications/Art History<br>
        Southern Oregon University; Ashland, OR. M.A., Art Education, Printmaking and Sculpture*<br>
        * Oregon was a journey of discovery for me. Every day in that extraordinary place, I taught and made art — and explored unimaginable natural beauty I’ve never seen or experienced anywhere else.
      </p>
  
      <img src="{backgroundSealImage}" alt="AnneMarie Hunter's Seal" />
  
      <p class="contact-info">
        Please contact me if you would like to learn more about any of these projects.
      </p>
  
    </div>
  </div>
  
  <style>
    .background-page {
      max-width: 600px;
      margin: auto;
      text-align: center;
    }
  
    .content h2 {
      font-family: var(--cinzel);
      color: var(--color3);
      font-weight: 300;
      font-size: var(--a1);
      text-align: left;
      margin-bottom: var(--a);
    }
  
    ul {
        list-style-type: none; /* removes bullet points */
      text-align: left;
      margin: 0 auto;
      padding-left: var(--a1);

    }
  
    ul li {
      margin-bottom: var(--a);
      line-height: var(--a);
    }
  
    .education-text {
      text-align: left;
      margin: 0 auto;
      line-height: var(--a);
      padding-left: var(--a1); /* removes default padding */

    }
  
    img {
      width: 100px;
      margin: var(--a) auto;
    }
  
    .contact-info {
      margin-top: var(--a);
    }
  </style>
  
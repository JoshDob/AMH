<!-- src/lib/about/1-Photographer.svelte -->

<script>
    let photographerImage = "/Seal.png"; // Replace this with the actual path
  </script>
  
  <div class="photographer-page">
    <div class="content">
      <p>
        <strong>My first photographs</strong> were of small birds perched on the branches of newly budded trees in Colorado’s Rocky Mountains. On a vacation with my family, I was seven or eight years old when I took these pictures. 
        <br><br>
        The camera was a 35mm Instamatic, loaded with grainy black and white Kodak film. Once back in Kansas City, my father had the film processed into glossy 3” x 5” prints for me. Every time I looked at those prints (which was often), I felt happy. As a child, the photos — and the camera — continually inspired me.
         <br><br>
        During my teenage years, I explored many career possibilities, from the sciences to the arts. Then, in college, a special gift was a compass that guided me back to photography. 
         <br><br>
        For my 20th birthday, my father visited me at school and bought me a beautiful Canon SLR 35mm camera. As he had when I was a child, my father shined a light on my truth.
        Within a few years, I was a photographer. My work has included commercial and editorial projects, individual assignments and fine art. Over the years, one theme has endured — a passion for earth’s botanical life. 
         <br><br>
        Much of this can be attributed to the fact that I was born into botany.
         <br><br>
        I come from generations dedicated to nurturing nature. Throughout my life, I’ve been surrounded by trees, plants and flowers. From an extended family of florists and growers, I inherited wonder and gratitude for nature’s immeasurable value.
        Each time I look through the lens, I see more of nature’s infinite beauty and fierce resilience. Discoveries happen with every opportunity to take pictures.
        
      </p>
  
      <img src="{photographerImage}" alt="AnneMarie Hunter's Seal" />
  
      <p class="quote">“All my life through, the new sights of nature made me rejoice like a child.”
        ― Marie Curie
      </p>
    </div>
  </div>
  
<style>
    .photographer-page {
      max-width: 600px;
      margin: auto;
      text-align: center;
      display: flex;
    }
  
    .content p {
      margin-top: var(--b);
      line-height: var(--a1);
      font-size: var(--a);
    }
  
    img {
      width: 80px; /* Adjust the size to fit the design */
      margin-top: var(--e3);
    }
  
    .quote {
      font-style: italic;
      margin-top: var(--a);
    }
  </style>
  
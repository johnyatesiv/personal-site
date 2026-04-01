<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <section id="main" class="section">
    <div class="header-box">
      <h1 class="glitch">John Yates</h1>
      <p class="subtitle">software developer / internet explorer / general enthusiast</p>
    </div>

    <div class="content-box">
      <div class="bio">
        Welcome to my website. <br /> Below you can find some links to check out what I'm up to.
      </div>

      <div class="links-section">
        <h2 class="section-title">Links</h2>
        <div class="links grid-links">
          <a class="retro-button github" href="https://github.com/johnyatesiv" target="_blank" rel="noopener noreferrer">
            [github]
          </a>
          <a class="retro-button gitlab" href="https://gitlab.com/johnyatesiv" target="_blank" rel="noopener noreferrer">
            [gitlab]
          </a>
          <a class="retro-button bluesky" href="https://bsky.app/profile/daguerro.bsky.social" target="_blank" rel="noopener noreferrer">
            [bluesky]
          </a>
          <a class="retro-button resume" href="https://jyiv-public.s3.us-east-1.amazonaws.com/John+Yates+Resume+2026.docx" target="_blank">
            [resume]
          </a>
          <a class="retro-button music" href="https://daguerro.bandcamp.com/" target="_blank">
            [music]
          </a>
        </div>
        <p class="inspiration-credit">
          Inspired by <a href="https://brutalistwebsites.com/" target="_blank" rel="noopener noreferrer">Brutalist web design</a>
        </p>
      </div>
    </div>
  </section>

  <div class="footer">
    <p>© {{ currentYear }} John Yates | <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></p>
    <p class="built-with">Built with Vue + Vite</p>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.bio {
  text-align: left;
  font-weight: 900;
  font-size: 1.1rem;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  line-height: 1.2;
  padding: 1rem 0;
}

.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #ffffff;
  color: #000000;
  border: 3px solid #000000;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  z-index: 1000;
}

.theme-toggle:hover {
  background: #000000;
  color: #ffffff;
}

/* Harsh brutalist header */
.header-box {
  background: #ffffff;
  border: 4px solid #000000;
  padding: 2rem 3rem;
  text-align: left;
  margin-bottom: 0;
  box-shadow: 6px 6px 0px #000000;
  width: 100%;
}

.glitch {
  font-size: 2.5rem;
  font-weight: 900;
  color: #000000;
  margin: 0;
  letter-spacing: -1px;
  text-transform: uppercase;
}

.subtitle {
  font-size: 1rem;
  color: #000000;
  margin: 0.5rem 0 0 0;
  font-style: normal;
  text-transform: lowercase;
  font-weight: 600;
}

/* Harsh brutalist content box */
.content-box {
  background: #ffffff;
  border: 3px solid #000000;
  /* border-top: none; */
  padding: 2rem 3rem;
  width: 100%;
  box-shadow: 6px 6px 0px #000000;
}

/* Softer marquee with warm accent */
.marquee-container {
  background: #353230;
  background: #353230;
  border: none;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
}

marquee {
  font-weight: 400;
  font-size: 0.9rem;
  color: #faf9f6;
}

/* Harsh brutalist section title */
.section-title {
  text-align: left;
  color: #000000;
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0 0 1rem 0;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  border-bottom: 3px solid #000000;
  padding-bottom: 0.5rem;
}

.links-section {
  margin: 1rem 0;
}

.links {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(90px, auto);
  gap: 12px;
  padding: 0;
  margin: 2rem 0;
}

.grid-links {
  /* Remove outer border */
}

.retro-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  border: 3px solid #000000;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  color: #000000;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.1s ease;
  position: relative;
  min-height: 80px;
  text-transform: lowercase;
}

/* Create Mondrian-style variations with grid spans */
.github {
  background: #ffffff;
  grid-column: span 3;
  grid-row: span 2;
}

.gitlab {
  background: #f0f0f0;
  grid-column: span 2;
  grid-row: span 2;
}

.bluesky {
  background: #ffffff;
  grid-column: span 1;
  grid-row: span 2;
}

.resume {
  background: #000000;
  color: #ffffff;
  grid-column: span 4;
}

.music {
  background: #f0f0f0;
  grid-column: span 2;
}

.button-icon {
  display: none;
}

.retro-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 0px #000000;
  z-index: 10;
}

.resume:hover {
  background: #ffffff;
  color: #000000;
}

/* Inspiration credit */
.inspiration-credit {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 3px solid #000000;
  font-size: 0.9rem;
  color: #000000;
  text-align: left;
  font-weight: 600;
}

.inspiration-credit a {
  color: #000000;
  text-decoration: underline;
  transition: all 0.2s ease;
  font-weight: 700;
}

.inspiration-credit a:hover {
  background: #000000;
  color: #ffffff;
  padding: 0 2px;
}

.built-with {
  font-style: normal;
  margin-top: 0.5rem;
}

/* Animations removed for brutalist aesthetic */

/* Medium desktop view */
@media screen and (max-width: 1200px) {
  .links {
    grid-template-columns: repeat(4, 1fr);
  }

  .github {
    grid-column: span 2;
    grid-row: span 2;
  }

  .gitlab {
    grid-column: span 1;
    grid-row: span 2;
  }

  .bluesky {
    grid-column: span 1;
    grid-row: span 2;
  }

  .resume {
    grid-column: span 3;
  }

  .music {
    grid-column: span 1;
  }
}

/* Tablet view */
@media screen and (max-width: 900px) {
  .links {
    grid-template-columns: repeat(3, 1fr);
  }

  .github {
    grid-column: span 2;
    grid-row: span 1;
  }

  .gitlab {
    grid-column: span 1;
    grid-row: span 2;
  }

  .bluesky {
    grid-column: span 1;
  }

  .resume {
    grid-column: span 2;
  }

  .music {
    grid-column: span 1;
    grid-row: span 1;
  }
}

@media screen and (max-width: 600px) {
  .section {
    padding: 1rem 1.5rem;
  }

  .header-box {
    margin: 0 1rem 1.5rem 1rem;
  }

  .content-box {
    margin: 0 1rem 2rem 1rem;
  }

  .glitch {
    font-size: 1.8rem;
  }

  .links {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .retro-button {
    min-height: 60px;
    padding: 1.5rem 1rem;
  }

  /* Mobile grid variations */
  .github {
    grid-column: span 2;
    grid-row: span 1;
  }

  .gitlab {
    grid-column: span 1;
    grid-row: span 2;
  }

  .bluesky {
    grid-column: span 1;
    grid-row: span 1;
  }

  .resume {
    grid-column: span 1;
    grid-row: span 1;
  }

  .music {
    grid-column: span 2;
    grid-row: span 1;
  }

  .retro-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 0px #000000;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .header-box, .content-box {
    padding: 1.5rem;
  }

  .footer {
    margin-top: 3rem;
  }
}
</style>

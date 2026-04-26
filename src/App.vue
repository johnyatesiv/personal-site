<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <section id="main" class="section">
    <div class="header-box">
      <img src="/name.svg" alt="John Yates" class="name-svg" />
      <p class="subtitle">software developer / internet explorer / general enthusiast</p>
    </div>

    <div class="content-box">
      <div class="bio">
        Welcome to my website. <br /> Below you can find some links to check out what I'm up to.
      </div>

      <div class="links-section">
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
          <a class="retro-button linkedin" href="https://www.linkedin.com/in/john-yates-web/" target="_blank" rel="noopener noreferrer">
            [linkedin]
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
    <p>© {{ currentYear }} john yates | <a href="https://creativecommons.org/licenses/by-nc/4.0/">cc by-nc 4.0</a></p>
    <p class="built-with">built with vue + vite</p>
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
  text-transform: lowercase;
  letter-spacing: -0.5px;
  line-height: 1.2;
  padding: 1rem 0;
  border-left: 6px solid #FFD700;
  padding-left: 1rem;
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
  border-left: 12px solid #FF3333;
  padding: 2rem 3rem;
  text-align: left;
  margin-bottom: 0;
  box-shadow: 6px 6px 0px #000000;
  width: 100%;
}

.name-svg {
  display: block;
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 0;
}

.subtitle {
  font-size: 1rem;
  color: #3366FF;
  margin: 0.5rem 0 0 0;
  font-style: normal;
  text-transform: lowercase;
  font-weight: 700;
}

/* Harsh brutalist content box */
.content-box {
  background: #ffffff;
  border: 3px solid #000000;
  border-right: 12px solid #3366FF;
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
  color: #FF3333;
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0 0 1rem 0;
  letter-spacing: -0.5px;
  text-transform: lowercase;
  border-bottom: 3px solid #FF3333;
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

/* Muted newsprint card backgrounds */
.github,
.gitlab,
.bluesky,
.linkedin,
.music {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  filter: grayscale(100%);
  transition: all 0.1s ease, filter 0.3s ease;
}

.github:hover,
.gitlab:hover,
.bluesky:hover,
.linkedin:hover,
.music:hover {
  filter: grayscale(0%) brightness(1.1);
}

/* Photo: unsplash.com/photo-1504328345606-18bbc8c9d7d1 — Unsplash License */
.github {
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/bg-github.jpg') center/cover no-repeat;
  color: #ffffff;
  grid-column: span 3;
  grid-row: span 2;
}

/* Photo: unsplash.com/photo-1451187580459-43490279c0fa — Unsplash License */
.gitlab {
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/bg-gitlab.jpg') center/cover no-repeat;
  color: #ffffff;
  grid-column: span 2;
  grid-row: span 2;
}

/* Photo: unsplash.com/photo-1518770660439-4636190af475 — Unsplash License */
.bluesky {
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/bg-bluesky.jpg') center/cover no-repeat;
  color: #ffffff;
  grid-column: span 1;
  grid-row: span 2;
}

/* Photo: unsplash.com/photo-1494145904049-0dca59b4bbad — Unsplash License */
.linkedin {
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/bg-linkedin.jpg') center/cover no-repeat;
  color: #ffffff;
  grid-column: span 4;
}

/* Photo: Komarov Egor via Unsplash (unsplash.com/photos/srD1kUfvV_0) — Unsplash License */
.music {
  background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/bg-music.jpg') center/cover no-repeat;
  color: #ffffff;
  grid-column: span 2;
}

.button-icon {
  display: none;
}

.retro-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 0px #000000;
  z-index: 10;
  filter: brightness(1.3) contrast(1.1);
}

/* Inspiration credit */
.inspiration-credit {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 3px solid #FF9933;
  font-size: 0.9rem;
  color: #000000;
  text-align: left;
  font-weight: 600;
}

.inspiration-credit a {
  color: #3366FF;
  text-decoration: underline;
  transition: all 0.2s ease;
  font-weight: 700;
}

.inspiration-credit a:hover {
  background: #3366FF;
  color: #ffffff;
  padding: 0 2px;
}

.built-with {
  font-style: normal;
  margin-top: 0.5rem;
  text-transform: lowercase;
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

  .linkedin {
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

  .linkedin {
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

  .name-svg {
    max-width: 100%;
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

  .linkedin {
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

  .header-box, .content-box {
    padding: 1.5rem;
  }

  .footer {
    margin-top: 3rem;

    p {
      text-transform: lowercase;
    }
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
const wikiContent = ref<string>('')

// Fake visitor counter that increments based on time
const visitorCount = computed(() => {
  // Base number + seconds since a fixed date to make it always increase
  const baseCount = 420690
  const secondsSinceEpoch = Math.floor(Date.now() / 1000)
  const offset = Math.floor(secondsSinceEpoch / 100) // Slower increment
  return (baseCount + offset).toString().padStart(7, '0')
})

// Fetch Wikipedia's featured article
const fetchWikipediaContent = async () => {
  try {
    // Use Wikipedia's API instead of scraping the page directly
    const response = await fetch('https://en.wikipedia.org/api/rest_v1/page/html/Main_Page')
    const html = await response.text()

    // Parse the HTML
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    // Get the mp-tfa div content
    const tfaDiv = doc.getElementById('mp-tfa')
    if (tfaDiv) {
      // Get just the text content, clean it up
      const text = tfaDiv.textContent?.trim().replace(/\s+/g, ' ') || ''
      // Take first few sentences to keep it reasonable
      const sentences = text.split('. ').slice(0, 3).join('. ')
      wikiContent.value = "Did you know that " + sentences + (sentences.endsWith('.') ? '' : '. Isn\'t that interesting?')
    }
  } catch (error) {
    console.error('Failed to fetch Wikipedia content:', error)
    // Fallback content
    wikiContent.value = 'Wikipedia is the free encyclopedia that anyone can edit.'
  }
}

onMounted(() => {
  // Fetch Wikipedia content
  fetchWikipediaContent()
})
</script>

<template>
  <section id="main" class="section">
    <div class="header-box">
      <h1 class="glitch">John Yates</h1>
      <p class="subtitle">software developer / internet explorer / general enthusiast</p>
    </div>

    <div class="content-box">
      <div class="marquee-container">
        <marquee v-if="wikiContent" :key="wikiContent" behavior="scroll" direction="left" scrollamount="6">
          {{ wikiContent }}
        </marquee>
        <marquee v-else behavior="scroll" direction="left" scrollamount="6">
          loading information...
        </marquee>
      </div>

      <div class="links-section">
        <h2 class="section-title">Links</h2>
        <div class="links">
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
        </div>
      </div>

      <div class="visitor-counter">
        <p class="counter-label">Visitor:</p>
        <div class="counter-digits">
          <span v-for="(digit, index) in visitorCount" :key="index" class="digit">{{ digit }}</span>
        </div>
      </div>
    </div>
  </section>

  <div class="footer">
    <p>© 2024 John Yates | <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></p>
    <p class="built-with">Built with Vue + Vite</p>
    <p class="built-with">Daily facts courtesy of Wikipedia</p>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #faf9f6;
  color: #2b2b2b;
  border: 2px solid #2b2b2b;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-weight: 400;
  cursor: pointer;
  z-index: 1000;
}

.theme-toggle:hover {
  background: #353230;
  color: #faf9f6;
}

/* Softer artistic header */
.header-box {
  background: #faf9f6;
  border: 3px solid #2b2b2b;
  padding: 2rem;
  text-align: left;
  margin-bottom: 0;
  box-shadow: 4px 4px 0px rgba(107, 93, 84, 0.15);
}

.glitch {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2b2b2b;
  margin: 0;
  letter-spacing: 0;
  text-transform: uppercase;
}

.subtitle {
  font-size: 1rem;
  color: #4a4a4a;
  margin: 0.5rem 0 0 0;
  font-style: normal;
  text-transform: lowercase;
}

/* Softer content box */
.content-box {
  background: #faf9f6;
  border: 3px solid #2b2b2b;
  border-top: none;
  padding: 2rem;
  width: 100%;
  box-shadow: 4px 4px 0px rgba(107, 93, 84, 0.15);
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

/* Artistic section title with warm accent */
.section-title {
  text-align: left;
  color: #2b2b2b;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  letter-spacing: 0;
  text-transform: uppercase;
  border-bottom: 2px solid #353230;
  padding-bottom: 0.5rem;
}

.links-section {
  margin: 1rem 0;
}

.links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.retro-button {
  display: block;
  padding: 1rem;
  border: 2px solid #2b2b2b;
  font-weight: 400;
  font-size: 1rem;
  text-decoration: none;
  color: #2b2b2b;
  background: #faf9f6;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
}

.button-icon {
  display: none;
}

.retro-button:hover {
  background: #353230;
  color: #faf9f6;
  transform: translateY(-2px);
  box-shadow: 2px 4px 0px rgba(107, 93, 84, 0.3);
}

/* Visitor counter with warm accent */
.visitor-counter {
  text-align: left;
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 2px solid #353230;
}

.counter-label {
  font-size: 0.8rem;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  font-weight: 400;
  color: #4a4a4a;
}

.counter-digits {
  display: flex;
  justify-content: flex-start;
  gap: 2px;
}

.digit {
  display: inline-block;
  width: 24px;
  height: 32px;
  line-height: 32px;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: 'Courier New', monospace;
  border: 2px solid #2b2b2b;
  text-align: center;
  background: #faf9f6;
  color: #2b2b2b;
}

.built-with {
  font-style: normal;
  margin-top: 0.5rem;
}

/* Animations removed for brutalist aesthetic */

@media screen and (max-width: 600px) {
  .glitch {
    font-size: 1.8rem;
  }

  .links {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .header-box {
    padding: 1.5rem;
  }
}
</style>

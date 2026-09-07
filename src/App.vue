<script setup lang="ts">
const currentYear = new Date().getFullYear();

const links = [
  { label: 'github', href: 'https://github.com/johnyatesiv', note: 'code' },
  { label: 'gitlab', href: 'https://gitlab.com/johnyatesiv', note: 'code' },
  { label: 'bluesky', href: 'https://bsky.app/profile/daguerro.bsky.social', note: 'social' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/john-yates-web/', note: 'work' },
  { label: 'music', href: 'https://daguerro.bandcamp.com/', note: 'bandcamp' },
];
</script>

<template>
  <div class="page">
    <header class="masthead">
      <picture>
        <source srcset="/header.webp" type="image/webp" />
        <img src="/header.png" alt="" class="portrait" width="450" height="597" />
      </picture>
      <div class="masthead-text">
        <h1 class="name">john yates</h1>
        <p class="subtitle">software developer / internet explorer / general enthusiast</p>
      </div>
    </header>

    <section class="intro">
      <p>Welcome to my website.</p>
      <p>Below you can find some links to check out what I'm up to.</p>
    </section>

    <nav class="index" aria-label="Links">
      <ul class="index-list">
        <li v-for="link in links" :key="link.label" class="index-item">
          <a :href="link.href" target="_blank" rel="noopener noreferrer">
            <span class="item-label">{{ link.label }}</span>
            <span class="item-note">{{ link.note }}</span>
            <span class="item-mark" aria-hidden="true">&#8599;</span>
          </a>
        </li>
      </ul>
    </nav>

    <footer class="footer">
      <p>&copy; {{ currentYear }} john yates</p>
      <p>
        <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">cc by-nc 4.0</a>
        &nbsp;/&nbsp; built with vue + vite
      </p>
    </footer>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  margin: 0;
  padding: 100px 50px 60px;
  box-sizing: border-box;
}

/* Masthead */
.masthead {
  display: flex;
  align-items: flex-end;
  gap: 30px;
  padding-bottom: 30px;
  border-bottom: solid 1px var(--rule);
}

/* Transparent cutout — sits directly on the ground, no frame.
   <picture> is the flex child, so it carries the sizing. */
.masthead picture {
  flex: 0 0 auto;
  display: block;
  width: 150px;
}

.portrait {
  display: block;
  width: 100%;
  height: auto;
}

.masthead-text {
  padding-bottom: 8px;
}

.name {
  margin: 0;
  font-size: 2.5rem;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.04em;
}

.subtitle {
  margin: 10px 0 0;
  color: var(--muted);
}

/* Intro */
/* Rule spans the full width; the prose itself stays at a readable measure. */
.intro {
  padding: 30px 0;
  border-bottom: solid 1px var(--rule);
}

.intro p {
  max-width: 60ch;
}

/* Index */
.index {
  padding-top: 60px;
}

.index-list {
  border-top: solid 1px var(--rule);
}

.index-item {
  border-bottom: solid 1px var(--rule);
}

.index-item a {
  display: flex;
  align-items: baseline;
  gap: 20px;
  padding: 18px 0;
  transition: padding 0.15s ease, color 0.15s ease;
}

/* Label takes the slack; the note sits in a fixed column so the
   arrow never drifts to the far edge on a wide viewport. */
.item-label {
  flex: 1 1 auto;
}

.item-note {
  flex: 0 0 auto;
  width: 10ch;
  color: var(--muted);
}

.item-mark {
  width: 1.2em;
  text-align: right;
  color: var(--muted);
}

@media (hover: hover) {
  .index-item a:hover {
    padding-left: 12px;
  }

  .index-item a:hover .item-mark,
  .index-item a:hover .item-note {
    color: var(--ink);
  }
}

.index-item a:focus-visible {
  outline: solid 1px var(--rule);
  outline-offset: 2px;
}

/* Footer */
.footer {
  margin-top: 100px;
  padding-top: 20px;
  border-top: solid 1px var(--rule);
  color: var(--muted);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.footer a {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.footer a:hover {
  color: var(--ink);
}

@media screen and (max-width: 600px) {
  .page {
    padding: 50px 25px 40px;
  }

  .item-note {
    display: none;
  }

  .masthead {
    gap: 20px;
  }

  .masthead picture {
    width: 90px;
  }

  .name {
    font-size: 1.875rem;
  }

  .footer {
    margin-top: 60px;
  }
}
</style>

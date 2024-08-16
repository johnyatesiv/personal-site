<script setup lang="ts">
</script>

<template>
  <div class="sparkle-background"></div>
  <div className="container">
    <div className="title fade-out">Hello out there</div>
    <div className="content fade-in">
      <p>$ I'm John, a <span className="role rotate">software developer<span className="blinking">_</span></span></p>
      <div className="portrait"></div>
    </div>    
    <div className="content slow-fade-in">
      Check out what I'm up to      
      <div className="links">
        <a className="link" href="https://github.com/johnyatesiv" target="blank" rel="noopener noreferrer">
          <v-icon name="px-git-commit" scale="2" /> Code
        </a>
        <a className="link" href="/resume.pdf" target="blank" rel="noopener noreferrer">
          <v-icon name="hi-document-download" scale="2" /> Resume
        </a>
        <a className="link" href="mailto:john.yatesiv@gmail.com?subject=Let's chat" target="blank" rel="noopener noreferrer">
          <v-icon name="fa-regular-handshake" scale="2" /> Hire me
        </a>
      </div>
      <div className="links mobile-hide">
        <a className="link" href="https://swordsandsoftware.substack.com" target="blank" rel="noopener noreferrer">
          <v-icon name="px-bookmark" scale="2" /> Writing
        </a>
        <a className="link" href="https://soundcloud.com/jryates" target="blank" rel="noopener noreferrer">
          <v-icon name="px-headphone" scale="2" /> Music
        </a>
      </div>
    </div>    
    <div className="amuse-bouche"></div>
  </div>
  <div className="footer slow-fade-in">
      <p><a href="https://creativecommons.org/licenses/by-nc/4.0/">
        <v-icon name="fa-creative-commons"></v-icon> BY-NC</a>
        2024
      </p>
      <p>Site designed with Vue + Vite</p>
  </div>
</template>

<style scoped>
.blinking {
  animation: blink 1s linear infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
    font-size: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    font-size: 1rem;
  }
  to {
    opacity: 1;
    font-size: 2rem;
  }
}

@keyframes slowFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pop {
  from {
    scale: 1;
  }
  to {
    scale: 1.1;
  }
}

@keyframes unpop {
  to {
    scale: 1;
  }
}

@media screen and (max-width: 600px) {
  @keyframes fadeIn {
    from {
      opacity: 0;
      margin-top: 9999px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }

  .mobile-hide {
    display: none !important;
  }

  .container {
    flex-direction: column;
  }

  .portrait {
    background-image: url(/sloth.jpg);
    background-size: contain;
    width: 300px !important;
    height: 300px !important;
    text-align: center;
    border-radius: 60px;
    border: 5px solid rgba(0, 0, 0, 0.8);
  }

  .links {
    margin-top: 30px;
    flex-direction: column;
    font-size: 1.2rem;
  }


}

@media screen and (min-width: 600px) {
  .links {
    flex-direction: row;
  }
}

.container {
  height: 100vh;
  display: flex;
  align-items: center;
}

.title {
  align-self: center;
  font-size: 2rem;
}

.fade-out {
  animation-name: fadeOut;
  animation-timing-function: ease;
  animation-duration: 6s;
  animation-fill-mode: forwards;
}

.fade-in {
  opacity: 0;
  animation-name: fadeIn;
  animation-timing-function: ease;
  animation-delay: 2s;
  animation-duration: 4s;
  animation-fill-mode: forwards;
}

.slow-fade-in {
  opacity: 0;
  animation-name: slowFadeIn;
  animation-timing-function: ease;
  animation-delay: 4s;
  animation-duration: 4s;
  animation-fill-mode: forwards;
}

.links {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 8%;
  min-height: 20vh;
}

.link {
  display: flex;
  min-width: 10vw;
  align-items: center;
  gap: 10px;
  animation-name: unpop;
  animation-duration: 750ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

.link:hover {
  animation-name: pop;
  animation-duration: 750ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.portrait {
  background-image: url(sloth.jpg);
  background-size: contain;
  width: 400px;
  height: 400px;
  text-align: center;
  border-radius: 60px;
  border: 5px solid rgba(0, 0, 0, 0.8);
}
</style>

<script setup lang="ts"></script>

<template>
  <section id="main" class="section">
    <!-- <div class="container"> -->
      <div class="content">
        <p>$ Hello there. I'm John, a <span class="role rotate">software developer<span class="blinking">_</span></span></p>
      </div>    
      <div class="content">
        Check out what I'm up to
        <div class="links">
          <a class="link" href="https://github.com/johnyatesiv" target="blank" rel="noopener noreferrer">
            <v-icon name="px-git-commit" scale="2" /> Code
          </a>
          <a class="link" href="/public/resume.pdf" target="blank">
            <v-icon name="hi-document-download" scale="2" /> Resume
          </a>
          <a class="link" href="mailto:johnyates-dev@proton.me?subject=Let's chat" target="blank" rel="noopener noreferrer">
            <v-icon name="fa-regular-handshake" scale="2" /> Work with me
          </a>
        </div>      
      </div>
    <!-- </div> -->
  </section>  
  <div class="footer">
    <p>
      <a href="https://creativecommons.org/licenses/by-nc/4.0/">
        <v-icon name="fa-creative-commons"></v-icon> BY-NC 2024
      </a>
    </p>
    <p>Site designed with Vue + Vite</p>
</div>
</template>

<style scoped>

@media screen and (max-width: 600px) {
  .mobile-hide {
    display: none !important;
  }

  .container {
    flex-direction: column;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 5%;
    min-height: 20vh;
    color: white;
    margin-top: 30px;
    font-size: 1.4rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: black;
    z-index: 9999;
    padding: 1rem;

  }
}

@media screen and (min-width: 600px) {
  .links {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 5%;
    min-height: 20vh;
    font-size: 1rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: white;
  }

  .resume-job:hover {
    animation-name: pop;
    animation-duration: 750ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  align-self: center;
  font-size: 1rem;
}

.content {
  color: white;
  font-weight: bold;
}

.section {
  color: white;
}

.link {
  display: flex;
  min-width: 10vw;
  align-items: center;
  gap: 8px;
  animation-name: unpop;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  color: white;
}

.link:hover {
  animation-name: pop;
  animation-duration: 750ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

.button-download:hover {
  background-color: #2980b9;
  box-shadow: 0 6px 8px rgba(52, 152, 219, 0.4);
  transform: translateY(-2px);
}

.button-download:active {
  background-color: #2472a4;
  box-shadow: 0 2px 4px rgba(52, 152, 219, 0.2);
  transform: translateY(0);
}
</style>

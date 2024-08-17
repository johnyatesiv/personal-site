<script setup lang="ts">
</script>

<template>
  <div class="sparkle-background"></div>
  <div className="container">
    <!-- <div className="title fade-out">Hello out there</div> -->
    <div className="content fade-in">
      <p>$ Hello there. I'm John, a <span className="role rotate">software developer<span className="blinking">_</span></span></p>
      <div className="portrait"></div>
    </div>    
    <div className="content">
      Check out what I'm up to      
      <div className="links">
        <a className="link" href="https://github.com/johnyatesiv" target="blank" rel="noopener noreferrer">
          <v-icon name="px-git-commit" scale="2" /> Code
        </a>
        <a className="link" href="#resume-section">
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
    <section id="resume-section" class="section">
      <div class="resume-job">
        <h2>2021 - Present: BallerTV</h2>
        <ul>
          <li>Lead developer for operations and scalability team</li>
          <li>Leader in steering committees improving developer experience, DevOps and test automation</li>
          <li>Provided on-call support to operations team executing content production nationwide</li>
          <li>Improved tech stack leading to improved developer experience and faster feature turnaround</li>
        </ul>
      </div>
      <div class="resume-job">
        <h2>2019 - 2021: Alpha Ori</h2>
        <ul>
          <li>Lead development for onboard and cloud enterprise maritime analysis systems</li>
          <li>Trained teams in test-driven methodologies</li>
          <li>Collaborated with DevOps team on reducing product install time by days</li>
          <li>Lead and mentored cross-cultural teams in multiple time zones</li>
        </ul>
      </div>
      <div class="resume-job">
        <h2>2016 - 2019: Tech Lead @ Driven Deliveries</h2>
        <ul>
          <li>Lead technology team at a publicly traded company (merged with OTC:STMH)</li>
          <li>Created ecommerce sites, delivery logistics software and shared microservices</li>
          <li>Audited regulatory compliance for the company's brand portfolio</li>
          <li>Reported on development activities and strategy to the board of directors</li>
        </ul>
      </div>
      <div class="resume-job">
        <h2>2012 - 2016: Tech Lead @ Locbit</h2>
        <ul>
          <li>
              Architected and implemented a scalable product capable of protocol agnostic
              building automation control using the MEAN stack
          </li>
          <li>
            Led technical analysis and development of a commercial IoT solution in conjunction with Panasonic CPBD
          </li>
          <li>
            Z-wave, ZigBee and DECT ULE network design and testing
          </li>
        </ul>
      </div>
      <div>
        <a href="/resume.pdf" target="blank" rel="noopener noreferrer">
          Download a copy
        </a>
      </div>
    </section>
    <div className="footer">
      <p><a href="https://creativecommons.org/licenses/by-nc/4.0/">
        <v-icon name="fa-creative-commons"></v-icon> BY-NC</a>
        2024
      </p>
      <p>Site designed with Vue + Vite</p>
  </div>
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
    opacity: 0.2;
    font-size: 1.4rem;
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
  flex-direction: column;
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
  /* animation-delay: 2s; */
  animation-duration: 3s;
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
  background-image: url(/sloth.jpg);
  background-size: contain;
  width: 400px;
  height: 400px;
  text-align: center;
  border-radius: 60px;
  border: 5px solid rgba(0, 0, 0, 0.8);
}
</style>

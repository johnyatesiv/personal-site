<script setup lang="ts">
</script>

<template>
  <div class="sparkle-background"></div>
  <section id="main" className="section">
    <div className="container">
    <!-- <div className="title fade-out">Hello out there</div> -->
    <div className="content">
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
    </div>
  </div>
  </section>  
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
    <a href="/resume.pdf" className="button-download" target="blank" rel="noopener noreferrer">
        Download a copy
    </a>
  </section>
    <div className="footer">
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
    border: 4px solid black;
  }

  .links {
    margin-top: 30px;
    flex-direction: column;
    font-size: 1rem;
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
  font-size: 1rem;
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
  gap: 5%;
  min-height: 20vh;
  font-size: 1rem;
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
  font-size: 1rem;
}

.portrait {
  background-image: url(/sloth.jpg);
  background-size: contain;
  width: 400px;
  height: 400px;
  text-align: center;
  border-radius: 60px;
  border: 4px solid black;
}

.resume-job {
  z-index: 9999;
  padding: 2rem;
  background-color: skyblue;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 2px 4px rgba(0,0,0,0.4);
  margin-top: 20px;
}

.resume-job:hover {
  animation-name: pop;
  animation-duration: 750ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

.button-download {
  background-color: skyblue;
  color: black;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(52, 152, 219, 0.2);
  cursor: pointer;
  outline: none;
  margin-top: 24px;
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

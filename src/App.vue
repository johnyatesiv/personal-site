<script setup lang="ts">
  const jobs = [
    {
      start: "2021",
      end: "Present",
      companyName: "BallerTV",
      title: "Tech Lead",
      bulletPoints: [
        "Lead developer for operations and scalability team",
        "Leader in steering committees improving developer experience, DevOps and test automation",
        "Provided on-call support to operations team executing content production nationwide",
        "Improved tech stack leading to improved developer experience and faster feature turnaround"
      ]
    },
    {
      start: "2019",
      end: "2021",
      companyName: "Alpha Ori",
      title: "Tech Lead",
      bulletPoints: [
        "Lead development for onboard and cloud enterprise maritime analysis systems",
        "Trained teams in test-driven methodologies",
        "Collaborated with DevOps team on reducing product install time by days",
        "Lead and mentored cross-cultural teams in multiple time zones"
      ]
    },
    {
      start: "2016",
      end: '2019',
      companyName: "Driven",
      title: "Lead Developer",
      bulletPoints: [
        "Lead technology team at a publicly traded company (merged with OTC:STMH)",
        "Created ecommerce sites, delivery logistics software and shared microservices",
        "Audited regulatory compliance for the company's brand portfolio",
        "Reported on development activities and strategy to the board of directors"
      ]
    },
    {
      start: "2012",
      end: '2016',
      companyName: "Locbit",
      title: "Full Stack Developer",
      bulletPoints: [
        "Architected and implemented a scalable product capable of protocol agnostic building automation control using the MEAN stack",
        "Led technical analysis and development of a commercial IoT solution in conjunction with Panasonic CPBD",
        "Z-wave, ZigBee and DECT ULE network design and testing",
        "Led "
      ]
    }
  ]
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
    <h2>Experience</h2>
    <div v-for="job in jobs" class="resume-job">
      <h2>{{ job.start }} - {{ job.end }}: {{ job.title }} @ {{ job.companyName }}</h2>
      <ul>
        <li v-for="point in job.bulletPoints" class="resume-job__description">
          {{ point }}
        </li>
      </ul>
    </div>
    <div>
      <button className="button-download">
        <a href="/resume.pdf" target="blank" rel="noopener noreferrer">Download a copy</a>
      </button>
    </div>
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

  .resume-job {
    padding: 1rem;
    background-color: skyblue;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 4px rgba(0,0,0,0.4);
    margin-top: 20px;
    font-size: 1rem;
    margin: 1rem;

    h2 {
      font-size: 1rem;
    }
  }

  .resume-job__description {
    display: none;
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
    font-size: 1rem;
    color: white;
  }

  .resume-job {
    z-index: 9999;
    padding: 2rem;
    background-color: skyblue;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 4px rgba(0,0,0,0.4);
    margin-top: 20px;
    margin: 4rem;
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

.content {
  color: white;
  font-weight: bold;
}

.section {
  color: white;
}

.resume-job {
  color: black;
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

.portrait {
  background-image: url(/sloth.jpg);
  background-size: contain;
  width: 400px;
  height: 400px;
  text-align: center;
  border-radius: 60px;
  border: 4px solid black;
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

<script setup lang="ts">
</script>

<template>
  <div className="container">
    <div className="title fade-out shrink">Hello there</div>
    <div className="content fade-in">
      I'm John, a <span className="role rotate">software developer</span>
    </div>
    <div className="content slow-fade-in">
      Check out what I'm up to
      <div className="links">
        <a className="link" href="https://github.com/johnyatesiv">
          <v-icon name="px-git-commit" scale="2" /> Code
        </a>
        <a className="link" href="https://swordsandsoftware.substack.com">
          <v-icon name="px-bookmark" scale="2" /> Writing
        </a>
        <a className="link" href="https://soundcloud.com/jryates">
          <v-icon name="px-headphone" scale="2" /> Music
        </a>
      </div>
    </div>
    <div className="amuse-bouche"></div>
  </div>
</template>

<style scoped>
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
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

@keyframes grow {
  to {
    height: 80vh;
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
    scale: 1.2;
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

  .links {
    margin-top: 50px;
    flex-direction: column;
  }
}

@media screen and (min-width: 600px) {
  .links {
    flex-direction: row;
  }
}

.container {
  height: 20vh;
  animation: grow;
  animation-timing-function: ease;
  animation-delay: 8s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
.title {
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
  animation-duration: 8s;
  animation-fill-mode: forwards;
}

.slow-fade-in {
  opacity: 0;
  animation-name: slowFadeIn;
  animation-timing-function: ease;
  animation-delay: 10s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.links {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 20vh;
}

.link {
  display: flex;
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
</style>

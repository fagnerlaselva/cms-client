<template>
  <div class="loader">
    <p class="heading fw-medium">Carregando</p>
    <div class="loading">
      <div class="load"></div>
      <div class="load"></div>
      <div class="load"></div>
      <div class="load"></div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.heading {
  margin-top: 40vh;
  margin-bottom: 2rem;
}

.loading {
  display: flex;
  width: 5em;
  align-items: center;
  justify-content: center;
}

.load {
  width: 23px;
  height: 4px;
  background-color: var(--bs-primary);
  animation: 1s move_5011 infinite;
  border-radius: 5px;
  margin: 0.1em;
}

.load:nth-child(1) {
  animation-delay: 0.2s;
}

.load:nth-child(2) {
  animation-delay: 0.4s;
}

.load:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes move_5011 {
  0% {
    width: 0.2em;
  }

  25% {
    width: 0.7em;
  }

  50% {
    width: 1.5em;
  }

  100% {
    width: 0.2em;
  }
}
</style>

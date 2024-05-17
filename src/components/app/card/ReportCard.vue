<template>
  <div class="row py-4">
    <div v-for="(item, index) in cardData" :key="index"
      :class="['col-sm-6 col-md-4 col-lg-4', { 'first-class': index === 0, 'second-class': index === 1 }]">
      <div class="card border mb-3">
        <div class="card-body text-secondary">
          <h5 class="card-title text-primary-emphasis">{{ item.value }}</h5>
          <p class="card-text">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportCard',
  props: {
    cardData: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.card-title {
  font-weight: 600;
}

/* Adicione seus estilos aqui */
.first-class .card {
  /* Estilos para o primeiro card 
  background-color: lightblue !important;
  */
}

.second-class .card {
  /* Estilos para o segundo card 
  background-color: lightgreen !important;
  */
}
</style>

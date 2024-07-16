<template>
  <div class="row pt-2">
    <div v-for="(item, index) in cardData" :key="index"
      :class="['col-6 col-sm-6 col-md-4 col-lg-4 col-xl-2', { 'first-class': index === 0, 'second-class': index === 1 }]">
      <div class="card border-none mb-3 p-0 py-0">
        <div class="card-body text-secondary">
          <h5 class="card-title text-primary-emphasis">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            {{ item.value }}
          </h5>
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

.border-none {
  border: none;
}
</style>

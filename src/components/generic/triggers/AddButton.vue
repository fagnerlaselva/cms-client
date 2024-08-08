<template>
  <div @click="teste" class="buttom-action-add d-flex align-items-center">
    <div class="rounded-3 border bg-primário bg-gradiente d-inline-flex p-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="feather feather-plus">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </div>
    <div class="px-2">{{ buttonText }}</div>
  </div>
</template>

<script>

export default {
  name: 'AddButton',
  props: {
    link: {
      type: Object,
      default: () => ({ name: 'ArticleEditor' }),
    },
    buttonText: {
      type: String,
      default: 'Adicionar',
    },
  },
  methods: {
    teste() {
      this.$router.push(this.link)
    }
  }

};
</script>
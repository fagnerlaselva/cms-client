<template>
  <div class="search-container d-lg-block">
    <input class="form-control input-group-sm" :list="listId" :id="inputId" :placeholder="placeholder"
      data-bs-theme-value="dark" @input="onInput" />
    <datalist :id="listId">
      <option v-for="option in options" :key="option" :value="option"></option>
    </datalist>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: 'Search...',
    },
    listId: {
      type: String,
      default: 'datalistOptions',
    },
    inputId: {
      type: String,
      default: 'exampleDataList',
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style scoped>
.search-container input {
  padding: 15px !important;
  background: var(--bs-tertiary-bg);
  border-radius: 14px;
  border: none;
}
</style>

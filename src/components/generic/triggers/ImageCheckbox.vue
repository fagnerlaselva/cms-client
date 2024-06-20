<template>
  <li class="list-group-item">
    <input class="form-check-input d-none" type="checkbox" :id="id" v-model="checked">
    <label class="form-check-label" :for="id">
      <div class="checkbox-image" :class="{ checked: checked }" @click="toggleCheck">
        <img :src="image" alt="Checkbox Image" class="me-2">
        {{ name }}
      </div>
    </label>
  </li>
</template>

<script>
export default {
  name: 'ImageCheckbox',
  props: {
    id: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: this.value
    };
  },
  methods: {
    toggleCheck() {
      this.checked = !this.checked;
      this.$emit('input', this.checked);
    }
  }
}
</script>

<style scoped>
.checkbox-image {
  display: flex;
  align-items: center;
  cursor: pointer;

}

.checkbox-image.checked {
  color: var(--bs-primary-rgb);
}

.checkbox-image.checked img {
  border: 3px solid var(--bs-primary-rgb);

}

.checkbox-image img {
  width: 40px;
  height: 40px;
  background-size: cover;
  border-radius: 10rem;
}
</style>

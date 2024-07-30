<template>

    <div class="mb-3">
        <input v-model="value" :onchange="onChangeValue" type="email"
            class="form-control focus-ring focus-ring-secondary" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="E-mail" required>
    </div>

</template>

<script>

export default {
    name: 'EmailField',
    data() {
        return {
            value: "",
        }
    },
    methods: {
        onChangeValue() {
            this.$emit("onEmailField", this.value)
        }
    }
}
</script>
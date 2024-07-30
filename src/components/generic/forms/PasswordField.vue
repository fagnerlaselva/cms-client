<template>
    <div class="mb-3">
        <input v-model="value" :onchange="onChangeValue" class="form-control form-control-lg" placeholder="Senha"
            type="password" id="exampleInputPassword2" required>
    </div>
</template>

<script>
export default {
    props: ["password"],
    name: 'PasswordField',
    data() {
        return {
            value: this.password,
        }
    },
    methods: {
        onChangeValue() {
            this.$emit("onPasswordField", this.value)
        }
    },
}
</script>
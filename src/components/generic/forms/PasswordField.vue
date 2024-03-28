<template>
    <div class="mb-3">
        <input class="form-control form-control-lg" :value="value" placeholder="Confirme a Senha" type="password"
            id="exampleInputPassword2" required>
    </div>
</template>

<script>
export default {
    props: ['value'],
    name: 'PasswordField'
}
</script>
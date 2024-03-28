<template>
    <div class="mb-3">
        <input class="form-control form-control-lg" :value="value" placeholder="Confirme a Senha" type="password"
            id="exampleInputPassword1" required>
    </div>

</template>

<script>
export default {
    props: ['value'],
    name: 'PasswordConfirmField'
}
</script>
<template>
    <div class="box-boder">
        <form action="/perfil">
            <EmailField :value="email"></EmailField>
            <PasswordField :value="password"></PasswordField>
            <span><a href="recuperar-senha">Esqueci minha senha</a></span>
            <button :disabled="isButtonDisabled">Entrar</button>
            <span>Não tem uma conta? <a href="registrar-se"> Registre-se</a></span>
        </form>
    </div>
</template>
<style>
span {
    font-size: 14px;
    font-weight: 300;
}
</style>


<script>
import EmailField from "../../components/generic/forms/EmailField.vue"
import PasswordField from "../../components/generic/forms/PasswordField.vue"

export default {
    components: { EmailField, PasswordField },
    name: 'UserLogin',
    data: () => ({
        email: '',
        password: ''
    }),
    methods: {
        login() {
            alert('Entrou')
        },
    }
}
</script>
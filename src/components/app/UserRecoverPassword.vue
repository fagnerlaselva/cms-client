<template>
    <div class="box-boder">
        <form action="/recuperacao-senha-solicitada">
            <EmailField :value="email"></EmailField>
            <PasswordField :value="password"></PasswordField>
            <button>redefinir senha</button>
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

export default {
    components: { EmailField },
    name: 'UserRecoverPassword',
    data: () => ({
        email: '',
    }),

}
</script>
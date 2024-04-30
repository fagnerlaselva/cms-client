<template>
    <div class="box-boder">
        <form action="/recuperacao-senha-solicitada">
            <EmailField :value="email"></EmailField>
            <PasswordField :value="password"></PasswordField>
            <ButtonForm buttonMsg="Redefinir Senha" iconTeste="bg-green"></ButtonForm>
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
import ButtonForm from "../generic/forms/ButtonForm.vue";

export default {
    components: { ButtonForm, EmailField },
    name: 'UserRecoverPassword',
    data: () => ({
        email: '',
    }),

}
</script>
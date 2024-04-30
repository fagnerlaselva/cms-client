<!-- eslint-disable no-irregular-whitespace -->
<template>
    <div class="box-boder">
        <form action="/perfil">
            <EmailField :value="email"></EmailField>
            <NameField :value="name"></NameField>
            <surnameField :value="name"></surnameField>
            <PasswordField :value="password"></PasswordField>
            <PasswordConfirmField :value="password"></PasswordConfirmField>
            <span class="text-left">
                Ao criar uma conta, você concorda com nossos Condições e afirma que leu e concorda
                com nossa Declaração de Privacidade privacidade.
            </span>
            <ButtonForm buttonMsg="Registrar" iconTeste="bg-green"></ButtonForm>
            <span>Já tem uma conta? <a href="login">Faça login</a></span>
        </form>
    </div>
</template>
<style>
span {
    font-size: 14px;
    font-weight: 300;
}

span.text-left {
    text-align: left;
    display: block;
    font-size: 13px;
    padding-bottom: 10px;
    line-height: 16px;
}
</style>


<script>
import EmailField from "../../components/generic/forms/EmailField.vue"
import PasswordField from "../../components/generic/forms/PasswordField.vue"
import NameField from "../../components/generic/forms/NameField.vue"
import PasswordConfirmField from "../../components/generic/forms/PasswordConfirmField.vue"
import surnameField from "../../components/generic/forms/surnameField.vue"
import ButtonForm from "../generic/forms/ButtonForm.vue"

export default {
    components: { ButtonForm, EmailField, PasswordField, NameField, PasswordConfirmField, surnameField },
    name: 'UserRegister',
    data: () => ({
        email: '',
        password: '',
        name: ''
    }),

}
</script>
<template>
    <div class="box-boder">
        <form action="/">
            <EmailField :value="email"></EmailField>
            <PasswordField :value="password"></PasswordField>
            <span><a href="recuperar-senha">Esqueci minha senha</a></span>
            <ButtonForm buttonMsg="Entrar" iconTeste="bg-green"></ButtonForm>
            <span>Não tem uma conta? <a href="registrar-se"> Registre-se</a></span>
        </form>
    </div>
</template>
<style>
.hover-elevate-up {
    transition: transform 0.3s ease;
}

.hover-elevate-up:hover {
    transform: translateY(-2.5%);
    transition: transform 0.3s ease;
    will-change: transform;
}

span {
    font-size: 14px;
    font-weight: 300;
}
</style>


<script>

import EmailField from "../../components/generic/forms/EmailField.vue"
import PasswordField from "../../components/generic/forms/PasswordField.vue"
import ButtonForm from "../../components/generic/forms/ButtonForm.vue"

export default {
    components: { ButtonForm, EmailField, PasswordField },
    name: 'UserLogin',
    data: () => ({
        email: '',
        password: '',

    }),
    methods: {
        login() {
            alert('Entrou')
        },
    }
}
</script>
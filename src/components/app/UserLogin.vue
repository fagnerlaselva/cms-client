<template>
    <div class="box-boder border">
        <form action="/dashboard" enctype="multipart/form-data">
            <EmailField :value="email"></EmailField>
            <PasswordField :value="password"></PasswordField>
            <span>
                <RouterLink :to="{ name: 'RecoverPassword' }">Esqueci minha senha</RouterLink>
            </span>
            <ButtonForm buttonMsg="Entrar" iconTeste="bg-green" class="text-light"></ButtonForm>
            <span>Não tem uma conta?
                <RouterLink :to="{ name: 'Register' }">Registre-se</RouterLink>
            </span>
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
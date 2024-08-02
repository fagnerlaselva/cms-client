<template>
    <div class="box-boder border">
        <form @submit="login" class="needs-validation">
            <div class="mb-3">
                <input v-model="email" type="email" class="form-control focus-ring focus-ring-secondary"
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" required>
            </div>
            <div class="mb-3">
                <input v-model="password" class="form-control form-control-lg" placeholder="Senha" type="password"
                    id="exampleInputPassword2" required>
            </div>
            <span class="d-none">
                <RouterLink :to="{ name: 'RecoverPassword' }">Esqueci minha senha</RouterLink>
            </span>
            <ButtonForm buttonMsg="Entrar" iconTeste="bg-green" class="text-light"></ButtonForm>
            <span class="d-none">Não tem uma conta?
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
import ButtonForm from "../../components/generic/forms/ButtonForm.vue"
import axios from 'axios';

export default {
    components: { ButtonForm },
    name: 'UserLogin',
    data: () => ({
        email: '',
        password: '',
    }),
    methods: {
        login(e) {
            e.preventDefault()
            axios
                .post("https://api-cms.assisty24h.com.br/user/signin", { email: this.email, password: this.password })
                .then(response => {
                    if (response.status === 200) {
                        localStorage.setItem("x-access-token", response.data.accessToken)
                        // Salvar token no localStorage
                        this.$router.push('/dashboard')
                        // Enviar para rota após login
                    }
                })
                .catch(error => {
                    if (error.response.status === 401) {
                        console.error("E-mail ou senha estão incorretos")
                        // Mostrar mensagem de erro ou executar outras ações

                        this.password = ""
                    } else {
                        console.error("Alguma coisa aconteceu.  IXXI")
                    }

                })
        },
        onEmailField(data) {
            this.email = data
        },
        onPasswordField(data) {
            this.password = data
        }
    },
}
</script>

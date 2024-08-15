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
import axios from 'axios'

export default {
    components: { ButtonForm },
    name: 'UserLogin',
    data: () => ({
        email: '',
        password: '',
    }),
    methods: {
        async isAuthenticated() {
            const accessToken = localStorage.getItem('x-access-token')
            if (!accessToken) {
                return false
            }

            const responseUserData = await axios.get(`${import.meta.env.VITE_CMS_API_URL}/user`, {
                headers: {
                    'x-access-token': accessToken
                }
            })
            if (responseUserData.status !== 200) {
                return false
            }
            this.$router.push('/dashboard')
        },
        async login(e) {
            e.preventDefault()
            try {
                const responseAccessToken = await axios.post(`${import.meta.env.VITE_CMS_API_URL}/user/signin`, { email: this.email, password: this.password })
                if (responseAccessToken.status !== 200) {
                    return false
                }
                localStorage.setItem("x-access-token", responseAccessToken.data.accessToken)
                const payloadB64 = responseAccessToken.data.accessToken.split('.')[1]
                const payloadJSON = atob(payloadB64)
                const payload = JSON.parse(payloadJSON)

                payload.accounts.forEach(account => {
                    if (account.isOwner) {
                        localStorage.setItem('currentAccountId', account.id)
                    }
                });

                const responseUserData = await axios.get(`${import.meta.env.VITE_CMS_API_URL}/user`, {
                    headers: {
                        'x-access-token': localStorage.getItem('x-access-token')
                    }
                })
                if (responseUserData.status !== 200) {
                    return false
                }
                localStorage.setItem('userData', JSON.stringify(responseUserData.data))
                this.$router.push('/dashboard').then(() => {
                    this.$router.go()
                })
            } catch (error) {
                console.log(error)
                if (error.response.status === 401) {
                    alert("E-mail ou senha estão incorretos")
                    // Mostrar mensagem de erro ou executar outras ações

                    this.password = ""
                } else {
                    alert("Alguma coisa aconteceu.")
                }
            }
        },
        onEmailField(data) {
            this.email = data
        },
        onPasswordField(data) {
            this.password = data
        }
    },
    mounted() {
        this.isAuthenticated()
    }
}
</script>

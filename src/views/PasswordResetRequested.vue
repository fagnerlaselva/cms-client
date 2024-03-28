<template>
    <div class="page">
        <div>
            <TitleBanner message="Redefinição de Senha Solicitada"></TitleBanner>
            <p>Acabamos de enviar um e-mail para o endereço fornecido com instruções sobre como redefinir sua senha. Por
                favor, verifique sua caixa de entrada e sua pasta de spam se não encontrar o e-mail imediatamente. Se
                ainda não recebeu o e-mail em alguns minutos, por favor, entre em contato conosco para assistência.</p>
        </div>
    </div>
</template>


<style>
.page {
    height: 100vh;

    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center
}

p {
    padding: 60px 0;
    text-align: center;
}

.page div {
    max-width: 900px;
}
</style>
<script>

import TitleBanner from "../components/app/TitleBanner.vue"


export default {
    components: { TitleBanner },
    name: 'ViewPasswordResetRequested',
}
</script>
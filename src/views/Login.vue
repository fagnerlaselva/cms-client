<template>
    <div class="page d-flex flex-column flex-sm-row">
        <div class="item p-4">
            <TitleBanner message="Faça seu login <br> na plataforma"></TitleBanner>
        </div>
        <div class="item">
            <UserLogin></UserLogin>
        </div>
    </div>
</template>

<style>
.sidebar,
.nav-bar-mobile {
    display: none !important;
}

.box-form span {
    display: block;
    font-size: 14px;
    text-align: center;
    width: 100%;
}
</style>

<script>
import UserLogin from "../components/app/UserLogin.vue"
import TitleBanner from "../components/app/TitleBanner.vue"

export default {
    components: { UserLogin, TitleBanner },
    name: 'ViewUserLogin',
}
</script>
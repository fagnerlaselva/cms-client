<template>
    <div class="page d-flex flex-column flex-sm-row">
        <div class="item p-4">
            <TitleBanner message="Vamos redefinir sua senha"></TitleBanner>
        </div>
        <div class="item">
            <UserRecoverPassword></UserRecoverPassword>
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
import UserRecoverPassword from "../components/app/UserRecoverPassword.vue"
import TitleBanner from "../components/app/TitleBanner.vue"


export default {
    components: { UserRecoverPassword, TitleBanner },
    name: 'ViewRecoverPassword',
}
</script>
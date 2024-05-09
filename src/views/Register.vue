<template>
    <div class="page d-flex flex-column flex-sm-row">
        <div class="item p-4">
            <TitleBanner message="Registre-se para <br> começar a escrever"></TitleBanner>
        </div>
        <div class="item">
            <UserRegister></UserRegister>
        </div>
    </div>
</template>

<style>
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
import UserRegister from "../components/app/UserRegister.vue"
import TitleBanner from "../components/app/TitleBanner.vue"


export default {
    components: { UserRegister, TitleBanner },
    name: 'ViewRegister',
}
</script>
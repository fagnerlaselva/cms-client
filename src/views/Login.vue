<template>
    <div class="page d-flex flex-column flex-sm-row">
        <div class="item">
            <TitleBanner message="Faça seu login <br> na plataforma"></TitleBanner>
        </div>
        <div class="item">
            <UserLogin></UserLogin>
        </div>
    </div>
</template>

<style>
.navbar-expand-lg {
    display: none !important;
}

.page {
    height: 100vh;
    grid-template-columns: 50% 50%;
    align-items: center;

}

.item {
    text-align: center;
    flex: 1 1;
}


.box-form span {
    display: block;
    font-size: 14px;
    text-align: center;
    width: 100%;
}

.box-boder {
    padding: 1rem;
}

@media only screen and (min-width: 992px) {
    .box-boder {
        border: 1px solid #E6E6E6;
        padding: 60px;
        width: 100%;
        max-width: 480px;
        border-radius: 8px;
    }
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
<template>
    <div class="page">
        <div class="item">
            <TitleBanner message="Registre-se para <br> começar a escrever"></TitleBanner>
        </div>
        <div class="item">
            <UserRegister></UserRegister>
        </div>
    </div>
</template>


<style>
.page {
    height: 100vh;
    flex-direction: row;
    display: flex;
    grid-template-columns: 50% 50%;
    align-items: center;
    justify-content: center
}

.item {
    text-align: center;
    flex: 1 1;
}

.box-boder {
    border: 1px solid #E6E6E6;
    padding: 60px;
    width: 100%;
    max-width: 480px;
    border-radius: 8px;
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
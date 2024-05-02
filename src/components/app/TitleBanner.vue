<template>
    <h1 v-html="message"></h1>
</template>
<style>
@media only screen and (min-width: 992px) {
    h1 {
        font-size: 54px;
        line-height: 54px;
    }
}
</style>
<script>
export default {
    props: ['message'],
    name: 'TitleBanner'
}
</script>
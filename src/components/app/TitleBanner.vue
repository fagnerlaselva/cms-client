<template>
    <h1 v-html="message"></h1>
</template>
<style>
h1 {
    color: --bs-secondary;
    font-size: 54px;
    line-height: 54px;
}
</style>
<script>
export default {
    props: ['message'],
    name: 'TitleBanner'
}
</script>
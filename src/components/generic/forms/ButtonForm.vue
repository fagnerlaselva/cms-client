<template>
    <div class="mb-3">
        <button class="button-login hover-elevate-up" :class="iconTeste">{{ buttonMsg }}</button>
    </div>
</template>

<script>
export default {
    props: ['buttonMsg', 'iconTeste'],
    name: 'ButtonForm'
}
</script>
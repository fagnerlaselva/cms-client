<template>
    <div class="mb-3">
        <button class="hover-elevate-up" :class="iconTeste">{{ buttonMsg }}</button>
    </div>
</template>

<script>
export default {
    props: ['buttonMsg', 'iconTeste'],
    name: 'ButtonForm'
}
</script>
<template>
    <div class="mb-3">
        <input class="form-control form-control-lg" :value="value" type="text" placeholder="Nome" aria-label="Nome"
            required />
    </div>
</template>

<script>
export default {
    props: ['value'],
    name: 'NameField'
}
</script>
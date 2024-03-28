<template>
    <div class="mb-3">
        <input class="form-control form-control-lg" :value="value" type="text" placeholder="Sobrenome" required words />
    </div>
</template>

<script>
export default {
    props: ['value'],
    name: 'surnameField'
}
</script>
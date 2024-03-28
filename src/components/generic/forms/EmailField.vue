<template>

    <div class="mb-3">
        <input :value="value" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="E-mail" required>
    </div>

</template>

<script>
export default {
    props: ['value'],
    name: 'EmailField'
}
</script>
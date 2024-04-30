<template>
    <ul class="nav nav-underline tabFilter py-2">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Todos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Admin</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Author</a>
        </li>
    </ul>
</template>

<style>
.dropdown {
    margin-left: 10px;
}
</style>

<script>
export default {
    name: 'TabMember',
}
</script>
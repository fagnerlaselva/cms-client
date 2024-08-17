<!-- eslint-disable no-irregular-whitespace -->
<template>
    <div class="box-boder border">
        <form>
            <PasswordField :value="password"></PasswordField>
            <PasswordConfirmField :value="password"></PasswordConfirmField>
            <ButtonForm buttonMsg="Redefinir" iconTeste="bg-green" class="text-light"></ButtonForm>
        </form>
    </div>
</template>
<style>
span {
    font-size: 14px;
    font-weight: 300;
}

span.text-left {
    text-align: left;
    display: block;
    font-size: 13px;
    padding-bottom: 10px;
    line-height: 16px;
}
</style>


<script>
import PasswordField from "../../components/generic/forms/PasswordField.vue"
import PasswordConfirmField from "../../components/generic/forms/PasswordConfirmField.vue"
import ButtonForm from "../generic/forms/ButtonForm.vue";

export default {
    components: { PasswordField, PasswordConfirmField, ButtonForm },
    name: 'UserRegister',
    data: () => ({
        email: '',
        password: '',
        name: ''
    }),

}
</script>
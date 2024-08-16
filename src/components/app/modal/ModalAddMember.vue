<template>
  <div ref="ModalAddMember" class="modal fade" id="addUser" tabindex="-1" data-bs-backdrop="static"
    data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true" style="z-index: 99999;">
    <div class="modal-dialog modal-dialog-scrollable  modal-dialog-centered  modal-dialog-scrollabl">
      <div class="modal-content rounded-5">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Adicionar um autor</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form class="p-3 rounded-4" style="background: var(--bs-tertiary-bg);">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="col-sm-13 col-form-label text-md-end">Endereço
                de email</label>
              <input v-model="email" type="email" class="form-control" id="exampleFormControlInput1"
                placeholder="nome@exemplo.com">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary" @click="inviteAccountMember">Adicionar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    async inviteAccountMember() {
      const accessToken = localStorage.getItem('x-access-token');
      const body = {
        email: this.email
      };
      await axios.post(`${import.meta.env.VITE_CMS_API_URL}/account/${localStorage.getItem('currentAccountId')}/member/invite`, body, {
        headers: {
          'x-access-token': accessToken
        }
      });
      this.$router.go();
    }
  }
}
</script>

<style scoped>
/* Adicione estilos específicos para este componente aqui */
</style>

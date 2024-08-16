<template>
  <div ref="changerAccount" class="modal fade" id="changerAccount" tabindex="-1" data-bs-backdrop="static"
    data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true" style="z-index: 99999;">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content rounded-5">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 8V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.0799 2 5.2V12.8C2 13.9201 2 14.4802 2.21799 14.908C2.40973 15.2843 2.71569 15.5903 3.09202 15.782C3.51984 16 4.0799 16 5.2 16H8M12 15L14 17L18.5 12.5M11.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V11.2C22 10.0799 22 9.51984 21.782 9.09202C21.5903 8.71569 21.2843 8.40973 20.908 8.21799C20.4802 8 19.9201 8 18.8 8H11.2C10.0799 8 9.51984 8 9.09202 8.21799C8.71569 8.40973 8.40973 8.71569 8.21799 9.09202C8 9.51984 8 10.0799 8 11.2V18.8C8 19.9201 8 20.4802 8.21799 20.908C8.40973 21.2843 8.71569 21.5903 9.09202 21.782C9.51984 22 10.0799 22 11.2 22Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Escolha uma Conta
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            <ul class="list-group rounded-4">
              <li class="list-group-item p-3" v-for="account in accounts" :key="account.id">
                <div :for="id" @click="setCurrentAccount(account.id)" class="checkbox-image d-flex align-items-center"
                  style="line-height: normal;">
                  <div class="image-container rounded-4" :style="'background-image: url(' + account.avatarUrl + ');'">
                  </div>
                  <div class="px-4 text-primary-emphasis fw-medium">
                    {{ account.name }}
                  </div>
                </div>
              </li>
            </ul>
            <div class="vstack row-gap-4 d-flex justify-content-between flex-column flex-sm-row py-4"
              data-bs-theme="auto">
              <AddButton :link="{ name: 'AddBucket' }" buttonText="Adicionar nova conta" data-bs-dismiss="modal"
                aria-label="Close" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AddButton from '../../generic/triggers/AddButton.vue';
export default {

  name: 'ModalChangerAccount',
  components: { AddButton },
  data() {
    return {
      accounts: [],
    };
  },
  methods: {
    async setCurrentAccount(accountId) {
      localStorage.setItem("currentAccountId", accountId);
      // Execute ações adicionais conforme necessário
      this.$router.go();
    },
    async listAccounts() {
      const accessToken = localStorage.getItem('x-access-token');
      const response = await axios.get(`${import.meta.env.VITE_CMS_API_URL}/account`, {
        headers: {
          'x-access-token': accessToken
        }
      });
      this.accounts = response.data;
    }
  },
  async mounted() {
    await this.listAccounts();
  }
};
</script>

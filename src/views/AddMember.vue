<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part">
    <div class="container">
      <div class="py-4 d-flex justify-content-between">
        <a href="/editor-artigo" class="buttom-action-add d-flex">
          <div class="rounded-circle bg-primário bg-gradiente d-inline-flex p-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1V11" stroke="#191919" stroke-width="2" stroke-linecap="round" />
              <path d="M1 6L11 6" stroke="#191919" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>
          <div class="px-2">Adicionar um Membro</div>
        </a>
      </div>

      <ul class="nav nav-underline tabFilter  border-bottom py-2">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Complete as informações do novo membro</a>
        </li>
      </ul>

      <form>
        <div class="row my-3 py-4">
          <label for="colFormLabelName" class="col-sm-2 col-form-label">Adicionar imagem:</label>
          <div class="col-sm-8">
            <div class="thubnail-member rounded position-relative">
              <div class="img-membro-upload rounded-circle float-start position-absolute">
                <!-- <img src="https://avatars.githubusercontent.com/u/34191081?v=4" class="rounded-circle"
                  alt="Fagner Mendes" height="155" width="155"> -->
              </div>
            </div>

          </div>
        </div>

        <div class="row my-3">
          <label for="colFormLabelName" class="col-sm-2 col-form-label">Nome:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelName" placeholder="">
          </div>
        </div>

        <div class="row my-3">
          <label for="colFormLabelSurname" class="col-sm-2 col-form-label">Sobre Nome:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelSurname" placeholder="">
          </div>
        </div>

        <div class="row my-3">
          <label for="colFormLabelEmail" class="col-sm-2 col-form-label">Email:</label>
          <div class="col-sm-8">
            <input type="email" class="form-control" id="colFormLabelEmail" placeholder="">
          </div>
        </div>

        <div class="row mb-3">
          <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Biografia do Autor:</label>
          <div class="col-sm-8">
            <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            <small class="text-muted">{{ message.length }} caracteres de 200</small>
          </div>
          <p></p>
        </div>


        <div class="p-4 add-link">
          <div class="row my-3">
            <div class="col-sm-2 col-form-label"></div>
            <div class="col-sm-7">
              <span>
                Links para as contas de redes sociais, como Twitter, Facebook, LinkedIn, entre outros, são
                fundamentais neste espaço. Sinta-se à vontade para adicionar quantos forem relevantes para sua
                presença online.
              </span>
            </div>
          </div>
          <div class="row my-3">
            <label for="colFormLabelLink" class="col-sm-2 col-form-label"> Link:</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="colFormLabelLink" placeholder="">
            </div>
          </div>
          <div class="row my-3">
            <label for="colFormLabelName" class="col-sm-2 col-form-label">Nome do link:</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="colFormLabelLink" placeholder="">
            </div>
            <div class="col-sm-1">
              <button type="button" class="btn btn-link buttom-action-add d-flex">
                <div class="rounded-circle bg-primário bg-gradiente d-inline-flex p-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M1 6L11 6" stroke="#FF4655" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-sm-4">
            <div class="py-4 d-flex justify-content-between">
              <button type="button" class="btn btn-link buttom-action-add d-flex">
                <div class="rounded-circle bg-primário bg-gradiente d-inline-flex p-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1V11" stroke="#35A936" stroke-width="2" stroke-linecap="round" />
                    <path d="M1 6L11 6" stroke="#35A936" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>
                <div class="px-2">Adicionar mais um link</div>
              </button>
            </div>
          </div>
        </div>
        <!-- Button trigger modal -->
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-primary justify-content-end" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            Adicionar membro
          </button>
        </div>
      </form>
    </div>
  </section>

</template>
<style>
.img-membro-upload {
  background: #EDEDED;
  width: 155px;
  height: 155px;
  top: 90px;
  left: 20px;
  border: #E6E6E6;

}

.thubnail-member {
  margin-bottom: 80px;
  width: 100%;
  height: 170px;
  background-image:
    -moz-linear-gradient(45deg, #E6E6E6 25%, transparent 25%, transparent 75%, #E6E6E6 75%, #E6E6E6 100%),
    -moz-linear-gradient(45deg, #E6E6E6 25%, transparent 25%, transparent 75%, #E6E6E6 75%, #E6E6E6 100%);
  background-image:
    -webkit-linear-gradient(45deg, #E6E6E6 25%, transparent 25%, transparent 75%, #E6E6E6 75%, #E6E6E6 100%),
    -webkit-linear-gradient(45deg, #E6E6E6 25%, transparent 25%, transparent 75%, #E6E6E6 75%, #E6E6E6 100%);
  -moz-background-size: 24px 24px;
  background-size: 24px 24px;
  -webkit-background-size: 24px 24px;
  background-position: 0 0, 12px 12px;
  border: 1px solid #e6e6e6;
}

.dashboard_part .container {
  width: 100%;
  max-width: 910px;
  margin: 0 auto;
}

form {
  font-weight: 400;
  font-size: 16px;
}

.add-link {
  background: #F9F9F9;
}

.add-link span {
  font-size: 13px;
  font-weight: 300;
}
</style>
<script>
import NavSidebar from "../components/app/nav/NavSidebar.vue"

export default {
  components: { NavSidebar, },
  name: 'ViewProfile',

  data() {
    return {
      message: '',
      SeoPalavrasIdeial: 700,
    }
  },

  computed: {
    QuantideDePalavras() {
      return this.message.length
    },
    SeoPalavrasFalta() {
      return this.SeoPalavrasIdeial - this.QuantideDePalavras
    }
  }
}
</script>
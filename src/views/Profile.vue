<template>


  <NavSidebar></NavSidebar>

  <section class="mmain_content dashboard_part">
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

      <ul class="nav nav-underline tabFilter py-2">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Meu Perfil</a>
        </li>
      </ul>


      <form>

        <div class="row my-3">
          <label for="colFormLabelName" class="col-sm-2 col-form-label">Nome:</label>
          <div class="col-sm-7">
            <input type="text" class="form-control" id="colFormLabelName" placeholder="">
          </div>
        </div>

        <div class="row my-3">
          <label for="colFormLabelSurname" class="col-sm-2 col-form-label">Sobre Nome:</label>
          <div class="col-sm-7">
            <input type="text" class="form-control" id="colFormLabelSurname" placeholder="">
          </div>
        </div>

        <div class="row my-3">
          <label for="colFormLabelEmail" class="col-sm-2 col-form-label">Email:</label>
          <div class="col-sm-7">
            <input type="email" class="form-control" id="colFormLabelEmail" placeholder="">
          </div>
        </div>

        <div class="row mb-3">
          <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Biografia do Autor:</label>
          <div class="col-sm-7">
            <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            <small class="text-muted">{{ message.length }} caracteres de 160</small>
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
          </div>
        </div>


        <div class="row my-3">
          <div class="col-sm-2"></div>
          <div class="col-sm-4">
            <div class="py-4 d-flex justify-content-between">
              <button type="button" class="btn btn-link buttom-action-add d-flex">
                <div class="rounded-circle bg-primário bg-gradiente d-inline-flex p-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1V11" stroke="#191919" stroke-width="2" stroke-linecap="round" />
                    <path d="M1 6L11 6" stroke="#191919" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>
                <div class="px-2">Adicionar mais link</div>
              </button>
            </div>
          </div>
        </div>


        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Salvar
        </button>
      </form>
    </div>
  </section>




</template>
<style>
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
  color: #292929;
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
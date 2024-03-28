<template>


  <NavSidebar></NavSidebar>



  <section class="main_content dashboard_part">
    <div class="container">
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Biografia do Autor:</label>
        <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <small class="text-muted">{{ message.length }} caracteres de 160</small>
        <p></p>
      </div>

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Salvar
      </button>
    </div>



    <aside class="aside border-start">
      <ul>
        <li class="position-relative">
          Artigos no rascunho
          <small class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam non aperiam
            cupiditate. Cupiditate amet nulla consequuntur, ipsam iusto ducimus consequatur blanditiis, eum optio,
            dolore doloremque perspiciatis nisi magni itaque. Odio.</small>

          <span
            class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
            <span class="visually-hidden">New alerts</span>
          </span>
        </li>
        <li>
          Categorias criadas: 6
        </li>
        <li>
          Categorias criadas: 6
        </li>
        <li>
          Categorias criadas: 6
        </li>
      </ul>
    </aside>
    <!-- Modal -->
    <div class="modal fade modal-dialog modal-dialog-centered" id="staticBackdrop" data-bs-backdrop="static"
      data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Perfil atualizado com sucesso
          </div>
          <div class="modal-footer">

            <button type="button" class="btn btn-primary">Tudo bem</button>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import NavSidebar from "../components/app/NavSidebar.vue"


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
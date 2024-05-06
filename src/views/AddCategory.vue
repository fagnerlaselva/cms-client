<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part" data-bs-theme="auto">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb pt-4">
          <li class="breadcrumb-item">
            <RouterLink :to="{ name: 'Home' }" class="buttom-action-add d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              &nbsp; Home
            </RouterLink>

          </li>
          <li class="breadcrumb-item">
            <RouterLink :to="{ name: 'Category' }" class="buttom-action-add d-flex">Categoria</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Adicionar categoria</li>
        </ol>
      </nav>

      <div class="tabFilter border-bottom py-2">
        <div class="">Complete as informações da sua nova categoria</div>
      </div>

      <form>
        <div class="row my-3">
          <label for="colFormLabelName" class="col-sm-3 col-form-label">Categoria:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelName" placeholder="" value="Mailing list">
          </div>
        </div>

        <div class="row my-4">
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label">Titulo da página:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelSurname" placeholder=""
              value="Maling list e tudo que você precisa saber">
            <span class="text-muted">
              *As melhores title tags têm até, no máximo, 60 caracteres, para não extrapolar o limite permitido para
              visualização no Google, Bing, etc.
            </span>
          </div>
        </div>

        <div class="row mb-4">
          <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label">Descrição página:</label>
          <div class="col-sm-8">
            <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            <small class="text-muted">{{ message.length }} caracteres de 160</small>
          </div>
        </div>

        <div class="row my-4">
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label">Slug URL:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelSurname" placeholder="" value="blog/mailing-list">
            <span class="text-muted">
              *Uma URL amigável para SEO é uma URL simples e compreensível que contém palavras-chave relevantes e
              descreve claramente o conteúdo da página.
            </span>
          </div>
        </div>

        <div class="row my-4">
          <label for="colFormLabelSurname" class="col-sm-3 col-form-label">Canonicol URL:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelSurname" placeholder="" value="blog/mailing-list">
            <span class="text-muted">
              *O Link Canonical é uma tag que define a URL preferida de uma página, evitando conteúdo duplicado e
              ajudando na classificação nos mecanismos de busca.
            </span>
          </div>
        </div>

        <!-- Button trigger modal -->
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-primary justify-content-end" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            Adicionar Categoria
          </button>
        </div>
      </form>
    </div>
  </section>

</template>
<style>
.text-muted {
  font-weight: 300;
  font-size: 13px;
}

.img-membro-upload {
  width: 155px;
  height: 155px;
  top: 90px;
  left: 20px;

}


form {
  font-weight: 400;
  font-size: 0.9rem;
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
  name: 'ViewAddCategory',

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
<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb py-4">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/categoria">Categoria</a></li>
          <li class="breadcrumb-item active" aria-current="page">Adicionar categoria</li>
        </ol>
      </nav>
      <ul class="nav nav-underline tabFilter py-2">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Complete as informações da sua nova categoria</a>
        </li>
      </ul>

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
  color: #292929;
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
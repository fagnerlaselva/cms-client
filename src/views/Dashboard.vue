<template>
  <section class="main_content dashboard_part">
    <div class="container-lg">
      <h1 class="pt-4 text-primary-emphasis d-flex flex-row justify-content-between">
        <div class="col-md-4">Dashboard</div>
        <div class="col-md-1 offset-md-4">
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown" style="display: none;">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <button class="btn dropdown-toggle float-end" data-bs-toggle="dropdown" aria-expanded="false">
                  Adicionar
                </button>
                <ul class="dropdown-menu dropdown-menu ">
                  <li>
                    <div class="dropdown-item">
                      <AddButton :link="{ name: 'ArticleEditor' }" buttonText="Adicionar um artigo" />
                    </div>
                  </li>
                  <li>
                    <div class="dropdown-item">
                      <AddButton :link="{ name: 'AddCategory' }" buttonText="Adicionar uma Categoria" />
                    </div>
                  </li>
                  <li>
                    <div class="dropdown-item">
                      <AddButton :link="{ name: 'AddAuthor' }" buttonText="Adicionar um Autor" />
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown" style="display: block;">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <button class="btn dropdown-toggle float-end" data-bs-toggle="dropdown" aria-expanded="false">
                  Hoje
                </button>
                <ul class="dropdown-menu dropdown-menu ">
                  <li><a class="dropdown-item" href="#">Ontem</a></li>
                  <li><a class="dropdown-item" href="#">7 dias</a></li>
                  <li><a class="dropdown-item" href="#">30 dias</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </h1>

      <div class="py-2 d-flex justify-content flex-column flex-sm-row row-gap-2 column-gap-4 d-none">
        <AddButton :link="{ name: 'ArticleEditor' }" buttonText="Adicionar um artigo" />
        <AddButton :link="{ name: 'AddCategory' }" buttonText="Adicionar uma Categoria" />
        <AddButton :link="{ name: 'AddAuthor' }" buttonText="Adicionar um Autor" />
      </div>
      <ReportCard :cardData="cardData" />
      <div class="g-4 rounded-4">

        <div class="row">
          <div class="col-12 col-sm-6 col-lg-6 pb-4 top-list">
            <ol class="p-0 p-sm-3 list-group list-group-numbered rounded-4">
              <div class="h4 text-primary-emphasis pb-2 px-3 mt-4">Top categorias</div>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3"
                    style="background-image: url('https://contatus.net.br/blog-image/pog/melhores-lista-de-contatos-telemarketing.jpg');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Mailing</div>
                    15000 Previews
                  </div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3"
                    style="background-image: url('https://contatus.net.br/blog-image/mailing-de-clientes-9-dicas.webp');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Mailing List</div>
                    12000 Previews
                  </div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3"
                    style="background-image: url('https://contatus.net.br/blog-image/marketing-direto-notbook.webp');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Marketing Direto</div>
                    10000 Previews
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <div class="col-12 col-sm-6 col-lg-6 pb-4 top-list">
            <ol class="p-0 p-sm-3 list-group list-group-numbered rounded-4">
              <div class="h4 text-primary-emphasis pb-2 px-3 mt-4">Top Autores</div>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3" style="background-image: url('/images/foto-marca-cms.jpg');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Lu Maia</div>
                    10000 Previews
                  </div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3"
                    style="background-image: url('https://avatars.githubusercontent.com/u/34191081?v=4');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Fafa Mendes</div>
                    10000 Previews
                  </div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3"
                    style="background-image: url('https://avatars.githubusercontent.com/u/17029609?v=4');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Kratinho Lima</div>
                    10000 Previews
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <div class="col-12 col-sm-12 col-lg-6 pb-4 top-list">
            <ol class="p-0 p-sm-3 list-group list-group-numbered rounded-4">
              <div class="h4 text-primary-emphasis pb-2 px-3 mt-4">Top Artigos</div>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3"
                    style="background-image: url('https://contatus.net.br/blog-image/marketing-direto-notbook.webp');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Organizando sua empresa e implementando as...
                    </div>
                    5000 Previews
                  </div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3"
                    style="background-image: url('https://contatus.net.br/blog-image/marketing-direto-notbook.webp');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Organizando sua empresa e implementando as...
                    </div>
                    5000 Previews
                  </div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3"
                    style="background-image: url('https://contatus.net.br/blog-image/marketing-direto-notbook.webp');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Organizando sua empresa e implementando as...
                    </div>
                    5000 Previews
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="marquee">
      <div>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
      </div>
    </div>
  </section>
</template>

<script>
import ReportCard from '@/components/app/card/ReportCard.vue';
import AddButton from '@/components/generic/triggers/AddButton.vue';
export default {
  name: 'ViewReport',
  components: {
    ReportCard, AddButton
  },
  data() {
    return {
      cardData: [
        { label: 'Autores', value: 600 },
        { label: 'Previews', value: 35.729 },
        { label: 'Artigos', value: 37 },
        { label: 'Rascunhos', value: 2 },
        { label: 'Categorias', value: 6 },
        { label: 'Autores', value: 5 },

      ]
    };
  }
}
</script>

<style>
.marquee {
  height: 35px;
  width: 100%;
  margin-left: -20px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  padding: 8px 0 4px 0;
  background: var(--bs-tertiary-bg);
}

.marquee div {
  display: inline-block;
  width: 300%;
  height: 40px;
  position: absolute;
  overflow: hidden;
  animation: marquee 30s linear infinite;
}

.marquee span {
  float: left;
  width: 200px;
}

.marquee:hover div {
  animation-play-state: paused;
}

.list-group-item {
  border: none;
}



@keyframes marquee {
  0% {
    left: 0%;
  }

  100% {
    left: -1100px;
  }
}

.card:hover {
  flex: 2;
  transition: all 0.2s
}

.card,
.list-group-item,
.list-group {
  background: var(--bs-tertiary-bg);
  border: 0;
}
</style>

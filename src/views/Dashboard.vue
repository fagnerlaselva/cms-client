<template>
  <section class="main_content dashboard_part">
    <div class="container">
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
                      <AddButton :link="{ name: 'AddMember' }" buttonText="Adicionar um Membro" />
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

      <div class="py-3 d-flex justify-content flex-column flex-sm-row row-gap-3 column-gap-4">
        <AddButton :link="{ name: 'ArticleEditor' }" buttonText="Adicionar um artigo" />
        <AddButton :link="{ name: 'AddCategory' }" buttonText="Adicionar uma Categoria" />
        <AddButton :link="{ name: 'AddMember' }" buttonText="Adicionar um Membro" />
      </div>
      <ReportCard :cardData="cardData" />

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <ol class="list-group list-group-numbered text-secondary">
            <div class="h4 text-primary-emphasis pb-2 px-3 mt-4">Top categorias</div>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-secondary">
                <div class="fw-bold text-primary-emphasis">Mailing</div>
                5000 visualizações
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-secondary">
                <div class="fw-bold text-primary-emphasis">Mailing List</div>
                5000 visualizações
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-secondary">
                <div class="fw-bold text-primary-emphasis">Marketing Direto</div>
                5000 visualizações
              </div>
            </li>
          </ol>
        </div>

        <div class="col">

          <ol class="list-group list-group-numbered">
            <div class="h4 text-primary-emphasis pb-2 px-3 mt-4">Top Autores</div>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-secondary">
                <div class="fw-bold text-primary-emphasis">Lu Maia</div>
                5000 visualizações
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-secondary">
                <div class="fw-bold text-primary-emphasis">Fafa Mendes</div>
                5000 visualizações
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-secondary">
                <div class="fw-bold text-primary-emphasis">Kratinho Lima</div>
                5000 visualizações
              </div>
            </li>
          </ol>
        </div>
      </div>


      <div class="h4 text-primary-emphasis pt-4 mb-4 mt-2">Top Artigos</div>
      <div class="row row-cols-1 row-cols-md-2 g-4">

        <div class="col">
          <div class="card mb-3 border-0">
            <div class=" row g-0">
              <div class="col-md-5">
                <img src="https://contatus.net.br/blog-image/como-posso-segmentar-um-mailing-list.webp"
                  class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title" style="font-size: 1rem">Organizando sua empresa e implementando as...
                  </h5>
                  <p class="card-text"><small class="text-body-secondary">5000 visualizações</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card border-0 mb-3">
            <div class=" row g-0">
              <div class="col-md-5">
                <img src="https://contatus.net.br/blog-image/como-posso-segmentar-um-mailing-list.webp"
                  class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title" style="font-size: 1rem">Organizando sua empresa e implementando as...</h5>
                  <p class="card-text"><small class="text-body-secondary">4000 visualizações</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card border-0 mb-3">
            <div class=" row g-0">
              <div class="col-md-5">
                <img src="https://contatus.net.br/blog-image/como-posso-segmentar-um-mailing-list.webp"
                  class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title" style="font-size: 1rem">Organizando sua empresa e implementando as...
                  </h5>
                  <p class="card-text"><small class="text-body-secondary">3000 visualizações</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card  border-0 mb-3">
            <div class=" row g-0">
              <div class="col-md-5">
                <img src="https://contatus.net.br/blog-image/como-posso-segmentar-um-mailing-list.webp"
                  class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title" style="font-size: 1rem">Organizando sua empresa e implementando as regras...
                  </h5>
                  <p class="card-text"><small class="text-body-secondary">2000 visualizações</small></p>
                </div>
              </div>
            </div>
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
        { label: 'Membros', value: 600 },
        { label: 'Visualizações', value: 35.729 },
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
  margin-left: -28px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  padding: 8px 0 4px 0;
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

.list-group {
  background: var(--bs-tertiary-bg);
}
</style>

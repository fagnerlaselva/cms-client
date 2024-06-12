<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4 text-primary-emphasis">Dashboard</h1>
      <div class="py-3 d-flex justify-content flex-column flex-sm-row row-gap-3 column-gap-4">
        <AddButton :link="{ name: 'ArticleEditor' }" buttonText="Adicionar um artigo" />
        <AddButton :link="{ name: 'AddCategory' }" buttonText="Adicionar uma Categoria" />
        <AddButton :link="{ name: 'AddMember' }" buttonText="Adicionar um Membro" />
      </div>
      <ReportCard :cardData="cardData" />





      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <ol class="list-group list-group-numbered">
            <div class="h4 text-primary-emphasis pb-2 px-3 mt-4">Top categorias</div>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Mailing</div>
                5000 visualizações
              </div>
              <span class="badge text-bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Mailing List</div>
                5000 visualizações
              </div>
              <span class="badge text-bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">marketing Direto</div>
                5000 visualizações
              </div>
              <span class="badge text-bg-primary rounded-pill">14</span>
            </li>
          </ol>
        </div>

        <div class="col">

          <ol class="list-group list-group-numbered">
            <div class="h4 text-primary-emphasis pb-2 px-3 mt-4">Top Autores</div>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Lu Maia</div>
                5000 visualizações
              </div>
              <span class="badge text-bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Fafa Mendes</div>
                5000 visualizações
              </div>
              <span class="badge text-bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Kratinho Lima</div>
                5000 visualizações
              </div>
              <span class="badge text-bg-primary rounded-pill">14</span>
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
  background: var(--bs-tertiary-bg:);
}
</style>

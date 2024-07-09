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
                      <AddButton :link="{ name: 'ArticleEditor' }" buttonText="Adicionar artigo" />
                    </div>
                  </li>
                  <li>
                    <div class="dropdown-item">
                      <AddButton :link="{ name: 'AddCategory' }" buttonText="Adicionar Categoria" />
                    </div>
                  </li>
                  <li>
                    <div class="dropdown-item">
                      <AddButton :link="{ name: 'AddAuthor' }" buttonText="Adicionar Autor" />
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown" style="display: block;">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <button class="btn dropdown-toggle float-end" data-bs-toggle="dropdown" aria-expanded="true">
                  Mês atual
                </button>
                <ul class="dropdown-menu dropdown-menu ">
                  <li><a class="dropdown-item" href="#">Hoje</a></li>
                  <li><a class="dropdown-item" href="#">Ontem</a></li>
                  <li><a class="dropdown-item" href="#">Mês atual</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </h1>
      <div class="py-2 d-flex justify-content flex-row flex-sm-row row-gap-2 column-gap-4 ">
        <AddButton :link="{ name: 'ArticleEditor' }" buttonText="Artigo" />
        <AddButton :link="{ name: 'AddCategory' }" buttonText="Categoria" />
        <AddButton :link="{ name: 'AddAuthor' }" buttonText="Autor" />
      </div>

      <ReportCard :cardData="cardData" />
      <BarChart />
      <div class="g-4 rounded-4">
        <div class="row">
          <div class="col-12 col-sm-12 col-lg-6 pb-4 top-list">
            <ol class="p-0 p-sm-3 list-group list-group-numbered rounded-4">
              <div class="h4 text-primary-emphasis pb-2 px-3 mt-4 d-flex flex-row justify-content-between">
                <div>Top categorias</div>
                <div></div>
              </div>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3"
                    style="background-image: url('https://contatus.net.br/blog-image/pog/melhores-lista-de-contatos-telemarketing.jpg');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Mailing</div>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    15000 Views
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
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    12000 Views
                  </div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3"
                    style="background-image: url('https://contatus.net.br/blog-image/identificar-e-aumentar-vendas-expandir-negocios.webp');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Marketing Direto</div>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    10000 Views
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
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    5000 Views
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
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    5000 Views
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
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    5000 Views
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <div class="col-12 pb-4 top-list">
            <ol class="p-0 p-sm-3 list-group rounded-4 list-group-horizontal-lg">
              <div class="h4 text-primary-emphasis pb-2 px-3 mt-4 col-12 col-lg-2">Top Autores</div>
              <li class="list-group-item col-12 col-sm-3">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3" style="background-image: url('/images/foto-marca-cms.jpg');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Lu Maia</div>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    10000 Views
                  </div>
                </div>
              </li>
              <li class="list-group-item col-12 col-sm-3">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3"
                    style="background-image: url('https://avatars.githubusercontent.com/u/34191081?v=4');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Fafa Mendes</div>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    10000 Views
                  </div>
                </div>
              </li>
              <li class="list-group-item col-12 col-sm-3">
                <div class="me-auto text-secondary d-flex">
                  <div class="image-container rounded-3"
                    style="background-image: url('https://avatars.githubusercontent.com/u/17029609?v=4');">
                  </div>
                  <div class="px-2">
                    <div class="text-primary-emphasis fw-medium">Kratinho Lima</div>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    10000 Views
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="marquee d-none">
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
import BarChart from '@/components/app/charts/BarChart.vue';

BarChart
export default {
  name: 'ViewReport',
  components: {
    ReportCard, AddButton, BarChart
  },
  data() {
    return {
      cardData: [
        { label: 'Views', value: 35.729 },
        { label: 'Artigos', value: 37 },
        { label: 'Autores', value: 5 },
        { label: 'Categorias', value: 6 },
        { label: 'Rascunhos', value: 2 },
        { label: 'Arquivados', value: 2 },
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

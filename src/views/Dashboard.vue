<template>
  <section class="main_content dashboard_part">
    <div class="container-lg">
      <h1 class="pt-4 text-primary-emphasis d-flex flex-row justify-content-between">
        <div class="col-md-8">Dashboard: {{ currentBucket.name }}</div>
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
          <TopArticles :articles="topArticles" />
          <TopCategories :categories="TopCategories" />
          <div class="col-12 col-lg-4 pb-4 top-list">
            <ol class="p-2 mt-3 list-group rounded-4">
              <div class="h4 text-primary-emphasis px-3 mt-3 col-12">Top Autores</div>
              <TopAutor v-for="author in topAuthors" :key="author.id" :image-url="author.image"
                :author-name="author.name" :views="author.views" />
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
import TopArticles from '@/components/app/card/TopArticles.vue';
import TopAutor from '@/components/app/card/TopAutor.vue';
import TopCategories from '@/components/app/card/TopCategories.vue';
import AddButton from '@/components/generic/triggers/AddButton.vue';
import BarChart from '@/components/app/charts/BarChart.vue';
import axios from "axios"

export default {

  name: 'ViewReport',
  components: {
    ReportCard, TopArticles, TopCategories, TopAutor, AddButton, BarChart
  },
  data() {
    return {
      currentBucket: {},
      cardData: [
        { label: 'Views', value: 35.729 },
        { label: 'Artigos', value: 37 },
        { label: 'Autores', value: 5 },
        { label: 'Categorias', value: 6 },
        { label: 'Rascunhos', value: 2 },
        { label: 'Arquivados', value: 2 },
      ],
      topAuthors: [
        {
          id: 1,
          name: 'Lu Maia',
          image: '/images/foto-marca-cms.jpg',
          views: 10000
        },
        {
          id: 2,
          name: 'Fafa Mendes',
          image: 'https://avatars.githubusercontent.com/u/34191081?v=4',
          views: 10000
        },
        {
          id: 3,
          name: 'Kratinho Lima',
          image: 'https://avatars.githubusercontent.com/u/17029609?v=4',
          views: 10000
        }
      ],
      topArticles: [
        {
          id: 1,
          title: 'Prospecção de novos clientes com...',
          image: 'https://contatus.net.br/blog-image/prospeccao-novos-clientes.webp',
          views: 6000
        },
        {
          id: 2,
          title: 'Controle de Qualidade e suas ...',
          image: 'https://contatus.net.br/blog-image/pog/img-pog-controle-qualidade-contact-center.jpg',
          views: 5000
        },
        {
          id: 3,
          title: 'Organizando sua empresa e...',
          image: 'https://contatus.net.br/blog-image/marketing-direto-notbook.webp',
          views: 4000
        }
      ],
      TopCategories: [
        {
          id: 1,
          name: 'Mailing',
          image: 'https://contatus.net.br/blog-image/pog/protocolo-open-graph-mailing.jpg',
          views: 15000
        },
        {
          id: 2,
          name: 'Mailing List',
          image: 'https://contatus.net.br/blog-image/pog/protocolo-open-graph-mailing.jpg',
          views: 12000
        },
        {
          id: 3,
          name: 'Marketing Direto',
          image: 'https://contatus.net.br/blog-image/pog/protocolo-open-graph-mailing.jpg',
          views: 10000
        }
      ]
    };
  },
  methods: {
    getCurrentBucket() {
      const currentBucketId = localStorage.getItem("currentBucket")
      this.currentBucket = this.buckets.find(item => item.id === currentBucketId)
      console.log(currentBucketId)
    },
    setCurrentBucket(bucketId) {
      localStorage.setItem("currentBucket", bucketId);
      this.$router.push("/dashboard/").then(() => {
        // Forçar o refresh da página após o redirecionamento
        window.location.reload();
      });
    },
    async listBuckets() {
      const accessToken = localStorage.getItem('x-access-token')
      const response = await axios.get(`${import.meta.env.VITE_CMS_API_URL}/bucket`, {
        headers: {
          'x-access-token': accessToken
        }
      })
      this.buckets = response.data
    }
  },

  async mounted() {
    await this.listBuckets()
    this.getCurrentBucket()
  },


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

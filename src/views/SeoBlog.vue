<template>
  <div class="main_content dashboard_part ">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="mb-4">
            <nav aria-label="breadcrumb align-middle">
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
                  <RouterLink :to="{ name: 'Config' }" class="buttom-action-add d-flex">Configurações</RouterLink>
                </li>
                <li class="breadcrumb-item active text-primary-emphasis" aria-current="page">Seo Bucket</li>
              </ol>
            </nav>
            <h1 class="pt-4 text-primary-emphasis d-flex flex-row justify-content-between">SEO Bucket - Contatus</h1>
            <div class="tabFilter border-bottom py-2">
              <div class="">Complete as informações do seu Bucket</div>
            </div>
          </div>
        </div>

        <!-- Aside com list-group sticky -->
        <aside class="col-lg-3">
          <div id="list-example" class="list-group sticky-top p-3 border-0 mb-4 mt-5" style="top: 60px;">
            <a class="list-group-item list-group-item-action border-0" href="#list-item-1">Informações Gerais</a>
            <a class="list-group-item list-group-item-action border-0" href="#list-item-2">Open Graph</a>
            <a class="list-group-item list-group-item-action border-0" href="#list-item-3">Redes Sociais</a>
            <a class="list-group-item list-group-item-action border-0" href="#list-item-4">Outras Configurações</a>
          </div>

        </aside>

        <!-- Section com conteúdo principal -->

        <section class="col-lg-9">

          <div class="row">
          </div>
          <div class="row">
            <!-- Conteúdo principal -->
            <div class="col-12">
              <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example">
                <!-- Informações Gerais -->
                <h5 id="list-item-1" class="pt-4">Informações Gerais</h5>
                <form enctype="multipart/form-data" class=" max-900 rounded mb-5 p-3 card border-0 form-small"
                  style="background: var(--bs-tertiary-bg);">
                  <div class="row my-4">
                    <label for="colFormLabelTitle" class="col-sm-3 col-form-label text-md-end">Título da
                      página:</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" id="colFormLabelTitle" placeholder=""
                        value="Mailing list e tudo que você precisa saber">
                      <span class="text-muted">*As melhores title tags têm até, no máximo, 60 caracteres, para não
                        extrapolar o limite permitido para visualização no Google, Bing, etc.</span>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label text-md-end">Descrição
                      página:</label>
                    <div class="col-sm-8">
                      <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1"
                        rows="4"></textarea>
                      <small class="text-muted">{{ message.length }} caracteres de 160</small>
                    </div>
                  </div>
                  <div class="row my-4">
                    <label for="colFormLabelSlug" class="col-sm-3 col-form-label text-md-end">Slug URL:</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" id="colFormLabelSlug" placeholder=""
                        value="blog/mailing-list">
                      <span class="text-muted">*Uma URL amigável para SEO é uma URL simples e compreensível que contém
                        palavras-chave relevantes e descreve claramente o conteúdo da página.</span>
                    </div>
                  </div>
                  <div class="row my-4">
                    <label for="colFormLabelCanonical" class="col-sm-3 col-form-label text-md-end">URL
                      Canônica:</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" id="colFormLabelCanonical" placeholder=""
                        value="blog/mailing-list">
                      <span class="text-muted">*O Link Canonical é uma tag que define a URL preferida de uma página,
                        evitando conteúdo duplicado e ajudando na classificação nos mecanismos de busca.</span>
                    </div>
                  </div>
                  <div class="row my-4">
                    <label for="colFormLabelKeywords"
                      class="col-sm-3 col-form-label text-md-end">Palavras-chave:</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" id="colFormLabelKeywords" placeholder=""
                        value="mailing, lista de e-mails, marketing">
                      <span class="text-muted">*Separe as palavras-chave por vírgulas. Escolha palavras-chave
                        relevantes
                        para o conteúdo da página.</span>
                    </div>
                  </div>
                  <div class="row my-4">
                    <label for="colFormLabelMetaRobots" class="col-sm-3 col-form-label text-md-end">Meta
                      Robots:</label>
                    <div class="col-sm-8">
                      <select class="form-control" id="colFormLabelMetaRobots">
                        <option value="index, follow">Indexar, Seguir</option>
                        <option value="noindex, nofollow">Não Indexar, Não Seguir</option>
                        <option value="index, nofollow">Indexar, Não Seguir</option>
                        <option value="noindex, follow">Não Indexar, Seguir</option>
                      </select>
                      <span class="text-muted">*As tags meta robots controlam como os mecanismos de busca indexam e
                        seguem links na página.</span>
                    </div>
                  </div>
                </form>

                <!-- Open Graph -->
                <h5 id="list-item-2" class="pt-4"> Open Graph</h5>
                <form enctype="multipart/form-data" class="max-900 rounded  mb-5 p-4 card border-0 form-small"
                  style="background: var(--bs-tertiary-bg);">
                  <ImageUploader labelText="Open Graph Image URL:" inputId="image-perfil" />
                  <div class="row my-4">
                    <label for="colFormLabelOgTitle" class="col-sm-3 col-form-label text-md-end">Open Graph
                      Title:</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" id="colFormLabelOgTitle" placeholder=""
                        value="Mailing list e tudo que você precisa saber">
                      <span class="text-muted">*O título Open Graph é usado ao compartilhar a página nas redes
                        sociais.</span>
                    </div>
                  </div>
                  <div class="row my-4">
                    <label for="colFormLabelOgDescription" class="col-sm-3 col-form-label text-md-end">Open Graph
                      Description:</label>
                    <div class="col-sm-8">
                      <textarea v-model="ogDescription" class="form-control" id="colFormLabelOgDescription"
                        rows="4"></textarea>
                      <small class="text-muted">{{ ogDescription.length }} caracteres de 200</small>
                      <span class="text-muted">*A descrição Open Graph é usada ao compartilhar a página nas redes
                        sociais.</span>
                    </div>
                  </div>
                </form>

                <h5 id="list-item-3" class="pt-4">Redes Sociais</h5>
                <!-- Redes Sociais -->
                <form enctype="multipart/form-data" class="max-900 rounded mb-5 p-3 card border-0 form-small"
                  style="background: var(--bs-tertiary-bg);">
                  <div class="row my-4">
                    <label for="colFormLabelTwitterCard" class="col-sm-3 col-form-label text-md-end">Twitter Card
                      Type:</label>
                    <div class="col-sm-8">
                      <select class="form-control" id="colFormLabelTwitterCard">
                        <option value="summary">Summary</option>
                        <option value="summary_large_image">Summary Large Image</option>
                      </select>
                      <span class="text-muted">*Escolha o tipo de cartão do Twitter para a visualização ao
                        compartilhar
                        a página.</span>
                    </div>
                  </div>


                  <div class="row my-4">
                    <label for="colFormLabelTwitterCard" class="col-sm-3 col-form-label text-md-end">Twitter Card
                      Type:</label>
                    <div class="col-sm-8">
                      <select class="form-control" id="colFormLabelTwitterCard">
                        <option value="summary">Summary</option>
                        <option value="summary_large_image">Summary Large Image</option>
                      </select>
                      <span class="text-muted">*Escolha o tipo de cartão do Twitter para a visualização ao
                        compartilhar
                        a página.</span>
                    </div>
                  </div>

                </form>

                <!-- Outras Configurações -->
                <h5 id="list-item-4" class="pt-4">Outras Configurações</h5>
                <form enctype="multipart/form-data" class="max-900 rounded mb-5 p-3 card border-0 form-small"
                  style="background: var(--bs-tertiary-bg);">

                  <div class="row my-4">
                    <label for="colFormLabelLang" class="col-sm-3 col-form-label text-md-end">Idioma da
                      Página:</label>
                    <div class="col-sm-8">
                      <select class="form-control" id="colFormLabelLang" v-model="selectedLang">
                        <option value="af">Afrikaans</option>
                        <option value="sq">Albanian</option>
                        <option value="am">Amharic</option>
                        <option value="ar">Arabic</option>
                        <option value="hy">Armenian</option>
                        <option value="az">Azerbaijani</option>
                        <option value="eu">Basque</option>
                        <option value="be">Belarusian</option>
                        <option value="bn">Bengali</option>
                        <option value="bs">Bosnian</option>
                        <option value="bg">Bulgarian</option>
                        <option value="ca">Catalan</option>
                        <option value="ceb">Cebuano</option>
                        <option value="ny">Chichewa</option>
                        <option value="zh-CN">Chinese (Simplified)</option>
                        <option value="zh-TW">Chinese (Traditional)</option>
                        <option value="co">Corsican</option>
                        <option value="hr">Croatian</option>
                        <option value="cs">Czech</option>
                        <option value="da">Danish</option>
                        <option value="nl">Dutch</option>
                        <option value="en">English</option>
                        <option value="eo">Esperanto</option>
                        <option value="et">Estonian</option>
                        <option value="tl">Filipino</option>
                        <option value="fi">Finnish</option>
                        <option value="fr">French</option>
                        <option value="fy">Frisian</option>
                        <option value="gl">Galician</option>
                        <option value="ka">Georgian</option>
                        <option value="de">German</option>
                        <option value="el">Greek</option>
                        <option value="gu">Gujarati</option>
                        <option value="ht">Haitian Creole</option>
                        <option value="ha">Hausa</option>
                        <option value="haw">Hawaiian</option>
                        <option value="he">Hebrew</option>
                        <option value="hi">Hindi</option>
                        <option value="hmn">Hmong</option>
                        <option value="hu">Hungarian</option>
                        <option value="is">Icelandic</option>
                        <option value="ig">Igbo</option>
                        <option value="id">Indonesian</option>
                        <option value="ga">Irish</option>
                        <option value="it">Italian</option>
                        <option value="ja">Japanese</option>
                        <option value="jw">Javanese</option>
                        <option value="kn">Kannada</option>
                        <option value="kk">Kazakh</option>
                        <option value="km">Khmer</option>
                        <option value="ko">Korean</option>
                        <option value="ku">Kurdish (Kurmanji)</option>
                        <option value="ky">Kyrgyz</option>
                        <option value="lo">Lao</option>
                        <option value="la">Latin</option>
                        <option value="lv">Latvian</option>
                        <option value="lt">Lithuanian</option>
                        <option value="lb">Luxembourgish</option>
                        <option value="mk">Macedonian</option>
                        <option value="mg">Malagasy</option>
                        <option value="ms">Malay</option>
                        <option value="ml">Malayalam</option>
                        <option value="mt">Maltese</option>
                        <option value="mi">Maori</option>
                        <option value="mr">Marathi</option>
                        <option value="mn">Mongolian</option>
                        <option value="my">Myanmar (Burmese)</option>
                        <option value="ne">Nepali</option>
                        <option value="no">Norwegian</option>
                        <option value="ps">Pashto</option>
                        <option value="fa">Persian</option>
                        <option value="pl">Polish</option>
                        <option value="pt-BR" selected>Portuguese (Brazil)</option>
                        <option value="pa">Punjabi</option>
                        <option value="ro">Romanian</option>
                        <option value="ru">Russian</option>
                        <option value="sm">Samoan</option>
                        <option value="gd">Scots Gaelic</option>
                        <option value="sr">Serbian</option>
                        <option value="st">Sesotho</option>
                        <option value="sn">Shona</option>
                        <option value="sd">Sindhi</option>
                        <option value="si">Sinhala</option>
                        <option value="sk">Slovak</option>
                        <option value="sl">Slovenian</option>
                        <option value="so">Somali</option>
                        <option value="es">Spanish</option>
                        <option value="su">Sundanese</option>
                        <option value="sw">Swahili</option>
                        <option value="sv">Swedish</option>
                        <option value="tg">Tajik</option>
                        <option value="ta">Tamil</option>
                        <option value="te">Telugu</option>
                        <option value="th">Thai</option>
                        <option value="tr">Turkish</option>
                        <option value="uk">Ukrainian</option>
                        <option value="ur">Urdu</option>
                        <option value="uz">Uzbek</option>
                        <option value="vi">Vietnamese</option>
                        <option value="cy">Welsh</option>
                        <option value="xh">Xhosa</option>
                        <option value="yi">Yiddish</option>
                        <option value="yo">Yoruba</option>
                        <option value="zu">Zulu</option>
                      </select>

                      <span class="text-muted">*Selecione o idioma principal da página.</span>
                    </div>
                  </div>
                  <div class="row my-4">
                    <label for="colFormLabelAuthor" class="col-sm-3 col-form-label text-md-end">Autor:</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" id="colFormLabelAuthor" placeholder="" value="Seu Nome">
                      <span class="text-muted">*Informe o nome do autor do conteúdo da página.</span>
                    </div>
                  </div>
                  <div class="row my-4">
                    <label for="colFormLabelPublishDate" class="col-sm-3 col-form-label text-md-end">Data de
                      Publicação:</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" id="colFormLabelPublishDate" placeholder=""
                        value="Atualizada automaticamente">
                      <span class="text-muted">*A data de publicação será atualizada automaticamente.</span>
                    </div>
                  </div>
                  <div class="row my-4">
                    <label for="colFormLabelModifiedDate" class="col-sm-3 col-form-label text-md-end">Data de
                      Modificação:</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" id="colFormLabelModifiedDate" placeholder=""
                        value="Atualizada automaticamente">
                      <span class="text-muted">*A data de modificação será atualizada automaticamente.</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </section>
      </div>
      <!-- Button trigger modal -->
      <div class="d-flex justify-content-end mb-5 px-3">
        <button type="button" class="btn btn-primary justify-content-end" data-bs-toggle="modal"
          data-bs-target="#staticBackdrop">
          Tudo Pronto
        </button>
      </div>
    </div>


    <div class="modal fade show" id="modal-subscribe" tabindex="-1" aria-modal="true" role="dialog"
      style="display: none;">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="d-flex align-items-center">
              <div class="d-none d-lg-block">
                <img src="https://freshcart.codescandy.com/assets/images/banner/modal_img.jpg" alt=""
                  class="img-fluid rounded-start">
              </div>
              <div class="px-4 py-4 py-lg-0">
                <div class="position-absolute end-0 top-0 m-4">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <span class="bg-light-danger text-danger badge rounded-pill mb-4 px-4 py-2">Últimos 7 dias!</span>
                <h2 class="display-6 fw-bold text-primary-emphasis">
                  Aproveite
                  <br>
                  <span class="text-primary">50%</span>
                  de desconto
                </h2>
                <p class="lead mb-5">Por 3 meses, para ter mais recurços escclusivos</p>

                <div class="d-grid">
                  <a href="#" class="btn btn-primary" data-bs-dismiss="modal">Aproveitar agora</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  </div>
</template>

<style scoped>
.text-muted {
  font-weight: 300;
  font-size: 13px;
}

form {
  font-weight: 400;
  font-size: 0.9rem;
}

.sticky-top {
  position: sticky;
  top: 20px;
  /* Ajuste conforme necessário */
}
</style>

<script>
import ImageUploader from '@/components/generic/forms/UploadBanner.vue';
export default {
  data() {
    return {
      message: '',
      ogDescription: '',
      selectedLang: 'pt-BR'
    };
  },
  components: { ImageUploader },
  name: 'SeoBlog',
}
</script>

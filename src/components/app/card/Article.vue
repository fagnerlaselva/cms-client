<template>

  <article class="d-flex flex-sm-column flex-lg-row px-3 border-bottom  align-items-center" data-bs-theme="auto">
    <div class=" d-flex justify-content-between">
      <RouterLink :to="{ name: 'ArticleEditor' }">
        <div class="flex">
          <div class="d-inline-flex align-items-center">
            <img src="https://avatars.githubusercontent.com/u/34191081?v=4" width="32" height="32"
              class="rounded-circle">
            <div class="d-flex flex-column flex-sm-row ">
              <div class="name-author px-2">Fagner Mendes</div>
              <div class="date-article px-2">Postado em 05 maio 2023</div>
            </div>
          </div>
        </div>
        <div class="mt-2">Mailing o que é e como utilizá-lo de maneira inteligente.</div>
        <div class="description-article">Mailing é um termo que tem origem do vocabulário inglês que é o
          ato de enviar uma correspondência ...</div>
        <div class="d-inline-flex category-article pt-2">
          <div class="">
            <div class="view-article px-2">#Mailing List</div>
          </div>
          <div class="">
            <div class="view-article px-2">400 visualizações</div>
          </div>
        </div>
      </RouterLink>
    </div>
    <div class="flex d-none d-xl-block">
      <img src="../../../../public/images/image-article.png" width="238" height="139" class="img-article-card">
    </div>
  </article>

  <article class="d-flex flex-sm-column flex-lg-row px-3 border-bottom align-items-center" data-bs-theme="auto">
    <RouterLink :to="{ name: 'ArticleEditor' }">
      <div class="flex">
        <div class="d-inline-flex align-items-center">
          <img src="https://avatars.githubusercontent.com/u/17029609?v=4" width="32" height="32" class="rounded-circle">
          <div class="d-flex flex-column flex-sm-row">
            <div class="name-author px-2">kratinho Lima</div>
            <div class="date-article px-2">Postado em 05 maio 2023</div>
          </div>
        </div>
      </div>
      <div class="mt-2">Mailing o que é e como utilizá-lo de maneira inteligente.</div>
      <div class="description-article">Mailing é um termo que tem origem do vocabulário inglês que é o
        ato de enviar uma correspondência ...
      </div>
      <div class="d-inline-flex category-article py-2">
        <div class="">
          <div class="view-article px-2">#Mailing</div>
        </div>
        <div class="">
          <div class="view-article px-2">400 visualizações</div>
        </div>
      </div>
    </RouterLink>
    <div class="flex d-none d-xl-block ">
      <img src="../../../../public/images/image-article-2.png" width="238" height="139" class="img-article-card">
    </div>
  </article>
</template>


<style>
.author-info * {
  float: left;
}

article {
  padding: 25px 0;
  font-weight: 400;
  box-sizing: border-box;

}

article:hover {
  background: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity));
}

article a {
  text-decoration: none;
}


.name-author {
  font-size: 14px;
}

.date-article {
  font-size: 13px;
}

.title-article {
  font-size: 22px;
  padding-top: 18px;
}

.description-article {
  padding-top: 12px;
  font-size: 0.9rem;
  font-weight: 300;
}

.category-article span {
  font-size: 13px;
  background-color: #FDF8F4;
  padding: 8px;
  border-radius: 8px;
  width: auto;
}

.view-article {
  font-size: 13px;
  color: #757575;
}
</style>
<script>

export default {
  name: 'CardArticle',
}
</script>
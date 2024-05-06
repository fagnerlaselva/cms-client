<template>

  <article class="d-flex flex-row mb-2  border-bottom">
    <div>
      <div class="flex">
        <div class="d-flex flex-row">
          <img src="https://avatars.githubusercontent.com/u/34191081?v=4" width="50" height="50" class="rounded-circle">
          <div class="name-member p-2">Fagner Mendes</div>
          <div><span class="badge text-bg-secondary">Admin</span></div>
        </div>
      </div>
      <div class="description-member ">Possuo 12 anos de experiência na área, sou criativo e apaixonado por
        desenvolvimento web, possuo facilidade para trabalhar em equipe</div>
      <div class="d-inline-flex category-article py-2">
        <div class="view-article">Escreveu <strong>8</strong> artigos e teve <strong>3300</strong> visualizações</div>
      </div>
    </div>
  </article>
  <article class="d-flex flex-row mb-2  border-bottom">
    <div>
      <div class="flex">
        <div class="d-flex flex-row">
          <img src="https://avatars.githubusercontent.com/u/17029609?v=4" width="50" height="50" class="rounded-circle">
          <div class="name-member p-2">kratinho Lima</div>
          <div><span class="badge text-bg-secondary">Admin</span></div>
        </div>
      </div>
      <div class="description-member">Possuo 12 anos de experiência na área, sou criativo e apaixonado por
        desenvolvimento web, possuo facilidade para trabalhar em equipe</div>
      <div class="d-inline-flex category-article py-2">
        <div class="view-article">Escreveu <strong>8</strong> artigos e teve <strong>3300</strong> visualizações</div>
      </div>
    </div>
  </article>
</template>

<style>
article {
  border-bottom: 1px solid #E6E6E6;
  padding: 25px 0;
  font-weight: 400;
}

.name-member {
  font-size: 22px;
}

.date-article {
  font-size: 13px;
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
  name: 'CardMember',
}
</script>
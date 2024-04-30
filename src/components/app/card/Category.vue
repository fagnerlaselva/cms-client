<template>

  <article class="d-flex flex-row mb-2">

    <div class="flex">
      <div class="d-block-flex">
        <div class="name-member py-1">Mailing</div>
        <div class="description-member">Possuo 12 anos de experiência na área, sou criativo e apaixonado por
          desenvolvimento web, possuo facilidade para trabalhar em equipe</div>
      </div>
    </div>
  </article>
  <article class="d-flex flex-row mb-2">
    <div class="d-block-flex">
      <div class="name-member py-1">Mailing list</div>
      <div class="description-member">Possuo 12 anos de experiência na área, sou criativo e apaixonado por
        desenvolvimento web, possuo facilidade para trabalhar em equipe</div>
    </div>
  </article>
  <article class="d-flex flex-row mb-2">
    <div class="d-block-flex">
      <div class="name-member py-1">Marketing Direto</div>
      <div class="description-member">Possuo 12 anos de experiência na área, sou criativo e apaixonado por
        desenvolvimento web, possuo facilidade para trabalhar em equipe</div>
    </div>
  </article>
  <article class="d-flex flex-row mb-2">
    <div class="d-block-flex">
      <div class="name-member py-1">Leads</div>
      <div class="description-member">Possuo 12 anos de experiência na área, sou criativo e apaixonado por
        desenvolvimento web, possuo facilidade para trabalhar em equipe</div>
    </div>
  </article>


</template>

<style>
.img-article-card {
  margin-left: 25px;
}

article {
  border-bottom: 1px solid #E6E6E6;
  padding: 25px 0;
  font-weight: 400;
}

.name-member {
  font-size: 22px;
  color: #292929;
}

.date-article {
  font-size: 13px;
  color: #757575;
}

.description-member {
  padding-top: 12px;
  font-size: 16px;
  max-width: 630px;
}

.category-article {
  padding-top: 25px;
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
  name: 'CardCategory',
}
</script>
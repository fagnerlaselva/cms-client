<template>
  <div>
    <article v-for="(item, index) in items" :key="index" class="d-flex flex-row border-bottom px-3">
      <div class="flex">
        <div class="d-block-flex">
          <div class="name-member py-1">{{ item.title }}</div>
          <div class="description-member">{{ item.description }}</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'CardCategory',
  data() {
    return {
      items: [
        { title: 'Mailing', description: 'Descrição do Mailing ' },
        { title: 'Mailing list', description: 'Descrição do Mailing list' },
        { title: 'Marketing Direto', description: 'Descrição do Marketing Direto' },
        { title: 'Leads', description: 'Descrição do Leads' }
      ]
    };
  }
}
</script>

<style>
article {
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

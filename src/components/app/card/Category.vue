<template>
  <div>
    <article v-for="(item, index) in items" :key="index"
      class="article-card d-flex flex-sm-column flex-lg-row px-sm-3  justify-content-between border-bottom align-items-center">
      <div class="flex">
        <div class="d-block-flex">
          <div class="name-member fw-medium py-1 text-primary-emphasis">{{ item.title }}</div>
          <div class="description-member">{{ item.description }}</div>
          <div class="d-inline-flex category-article pt-2 align-items-center">
            <div>
              <!-- Exemplo de link para edição -->
              <RouterLink :to="{ name: 'AddAuthor' }" class="view-article">
                Editar
              </RouterLink>
              <RouterLink :to="{ name: 'AddAuthor' }" class="view-article px-2">
                Desativar
              </RouterLink>
              <RouterLink :to="{ name: 'AddAuthor' }" class="view-article px-2">
                Deletar
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="flex d-none d-xl-block align-items-center">
        <img :src="item.image" :alt="item.altImg" width="190" height="100" class="img-article-card">
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
        {
          title: 'Mailing',
          description: 'O termo "Mailing" refere-se ao envio de materiais promocionais, como folhetos, catálogos ou cartas, para um grupo específico de destinatários por ...',
          image: 'https://contatus.net.br/blog-image/marketing-direto-notbook.webp',
        },
        {
          title: 'Mailing list',
          description: 'Uma "Mailing list" é uma lista de contatos ou endereços de e-mail de pessoas ou empresas que concordaram em receber informações ou materiais promocionais ...',
          image: 'https://contatus.net.br/blog-image/marketing-direto-notbook.webp',
        },
        {
          title: 'Marketing Direto',
          description: 'Marketing Direto é uma forma de publicidade na qual as empresas se comunicam diretamente com os consumidores, geralmente por meio de correio, telefone ...',
          image: 'https://contatus.net.br/blog-image/marketing-direto-notbook.webp',
        }
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
  font-size: 16px;
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

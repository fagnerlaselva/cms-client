<template>
  <div>
    <article v-for="(item, index) in items" :key="index" class="d-flex flex-row border-bottom px-3">
      <div class="flex">
        <div class="d-block-flex">
          <div class="name-member py-1 text-primary-emphasis">{{ item.title }}</div>
          <div class="description-member">{{ item.description }}</div>
          <div class="d-inline-flex category-article pt-2 align-items-center">
            <div>
              <!-- Exemplo de link para edição -->
              <RouterLink :to="{ name: 'ArticleEditor' }" class="view-article">
                Editar
              </RouterLink>
              <RouterLink :to="{ name: 'ArticleEditor' }" class="view-article">
                Deletar
              </RouterLink>
            </div>
          </div>
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
        {
          title: 'Mailing',
          description: 'O termo "Mailing" refere-se ao envio de materiais promocionais, como folhetos, catálogos ou cartas, para um grupo específico de destinatários por correio físico ou eletrônico.'
        },
        {
          title: 'Mailing list',
          description: 'Uma "Mailing list" é uma lista de contatos ou endereços de e-mail de pessoas ou empresas que concordaram em receber informações ou materiais promocionais de uma organização específica.'
        },
        {
          title: 'Marketing Direto',
          description: 'Marketing Direto é uma forma de publicidade na qual as empresas se comunicam diretamente com os consumidores, geralmente por meio de correio, telefone, e-mail ou mensagem direta em mídias sociais, para promover produtos ou serviços.'
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

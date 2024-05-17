<template>
  <div>
    <article v-for="(member, index) in members" :key="index" class="d-flex flex-row border-bottom px-3">
      <div>
        <div class="flex align-items-center">
          <div class="d-flex flex-row align-items-center">
            <img :src="member.image" width="50" height="50" class="rounded-circle">
            <div class="name-member p-2">{{ member.name }}</div>
            <div><span class="badge text-bg-secondary">{{ member.role }}</span></div>
          </div>
        </div>
        <div class="description-member">{{ member.description }}</div>
        <div class="d-inline-flex category-article py-2 align-items-center">
          <div class="view-article">Escreveu <strong>{{ member.articles }}</strong> artigos e teve <strong>{{
      member.views }}</strong> visualizações</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'CardMember',
  data() {
    return {
      members: [
        {
          name: 'Fafa Mendes',
          image: 'https://avatars.githubusercontent.com/u/34191081?v=4',
          role: 'Admin',
          description: 'Possuo 12 anos de experiência na área, sou criativo e apaixonado por desenvolvimento web, possuo facilidade para trabalhar em equipe',
          articles: 8,
          views: 3300
        },
        {
          name: 'Lu Maia',
          image: 'https://avatars.githubusercontent.com/u/17029609?v=4',
          role: 'Admin',
          description: 'Possuo 12 anos de experiência na área, sou criativo e apaixonado por desenvolvimento web, possuo facilidade para trabalhar em equipe',
          articles: 8,
          views: 3300
        },
        {
          name: 'kratinho Lima',
          image: 'https://avatars.githubusercontent.com/u/17029609?v=4',
          role: 'Admin',
          description: 'Possuo 12 anos de experiência na área, sou criativo e apaixonado por desenvolvimento web, possuo facilidade para trabalhar em equipe',
          articles: 8,
          views: 3300
        }
      ]
    }
  }
}
</script>

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
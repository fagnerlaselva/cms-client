<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <div class="row">
        <h1 class="col-12 col-sm-6 pt-4 pb-2 text-primary-emphasis">
          Configurações
        </h1>
        <div class="col-12 col-sm-6 pt-4 pb-2 text-primary-emphasis text-sm-end">
        </div>
      </div>
      <div class="align-items-center">
        <div class="card mb-3 rounded-4">
          <div class="card-body text-secondary">
            <div class="row mb-2  align-items-center">
              <div class="col-12 col-lg-1  text-sm-end  text-primary-emphasis fw-medium">Tema:</div>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-3 rounded-4">
          <div class="card-body text-secondary">
            <div class="text-secondary rounded-4">
              <RouterLink :to="{ name: 'Profile' }"
                class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center">
                <div class="col-2 col-sm-1 justify-content-center">
                  <div class="mx-auto" style="width: 35px">
                    <img src="https://avatars.githubusercontent.com/u/34191081?v=4" alt="Fagner Mendes" width="40"
                      height="40" class="rounded-4">
                  </div>
                </div>
                <div class="col-10 col-sm-11">
                  <div class="fw-medium">
                    {{ user.name }}
                  </div>
                  <span class="text-secondary">
                    {{ user.email }}
                  </span>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="card mb-3 rounded-4">
          <div class="card-body text-secondary">
            <RouterLink :to="{ name: 'Buckets' }"
              class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center"
              data-bs-target="#changerBucket">
              <div class="col-2 col-sm-1">
                <div class="mx-auto" style="width: 35px">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M14 20.889L12.777 21.5684C12.4934 21.726 12.3516 21.8047 12.2015 21.8356C12.0685 21.863 11.9315 21.863 11.7986 21.8356C11.6484 21.8047 11.5066 21.726 11.223 21.5684L3.82297 17.4573C3.52346 17.2909 3.37368 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V7.94153C3 7.59889 3 7.42757 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37368 6.79248 3.52345 6.70928 3.82297 6.54288L11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7986 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42757 21 7.59889 21 7.94153L21 12.5001M7.5 4.50008L16.5 9.50008M19 21.0001V15.0001M16 18.0001H22"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div class="col-10">
                <div class="fw-medium">Buckets</div>
                <span class="text-secondary">Editar uma Bucket</span>
              </div>
            </RouterLink>
            <div>
              <hr class="border border-1 opacity-50">
            </div>
            <RouterLink :to="{ name: 'AddBucket' }"
              class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center">
              <div class="col-2 col-sm-1">
                <div class="mx-auto" style="width: 35px">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M14 20.889L12.777 21.5684C12.4934 21.726 12.3516 21.8047 12.2015 21.8356C12.0685 21.863 11.9315 21.863 11.7986 21.8356C11.6484 21.8047 11.5066 21.726 11.223 21.5684L3.82297 17.4573C3.52346 17.2909 3.37368 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V7.94153C3 7.59889 3 7.42757 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37368 6.79248 3.52345 6.70928 3.82297 6.54288L11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7986 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42757 21 7.59889 21 7.94153L21 12.5001M7.5 4.50008L16.5 9.50008M19 21.0001V15.0001M16 18.0001H22"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div class="col-10">
                <div class="fw-medium">Adicionar uma nova Bucket</div>
                <span class="text-secondary">Personalizar seu Bucket</span>
              </div>
            </RouterLink>
            <div>
              <hr class="border border-1 opacity-50">
            </div>
            <button class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center"
              data-bs-toggle="modal" data-bs-target="#changerBucket">
              <div class="col-2 col-sm-1">
                <div class="mx-auto" style="width: 35px">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 12.0001V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37368 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37368 17.2077 3.52346 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L13 21.4445M7.5 4.50008L16.5 9.50008M22 21.5001L21 20.5001M22 18.0001C22 19.6569 20.6569 21.0001 19 21.0001C17.3431 21.0001 16 19.6569 16 18.0001C16 16.3432 17.3431 15.0001 19 15.0001C20.6569 15.0001 22 16.3432 22 18.0001Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div class="col-10">
                <div class="fw-medium">Ir para outra Bucket</div>
                <span class="text-secondary">Personalizar seu Bucket</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="card mb-3 rounded-4">
        <div class="card-body text-secondary">
          <div class="text-secondary rounded-4">
            <RouterLink :to="{ name: 'SeoBlog' }"
              class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center">
              <div class="col-2 col-sm-1 justify-content-center">
                <div class="mx-auto" style="width: 35px">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 11H8M10 15H8M16 7H8M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H11.5M22 22L20.5 20.5M21.5 18C21.5 19.933 19.933 21.5 18 21.5C16.067 21.5 14.5 19.933 14.5 18C14.5 16.067 16.067 14.5 18 14.5C19.933 14.5 21.5 16.067 21.5 18Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div class="col-10 col-sm-11">
                <div class="fw-medium"> SEO Bucket</div>
                <span class="text-secondary">Informações de SEO</span>
              </div>
            </RouterLink>
            <div>
              <hr class="border border-1 opacity-50">
            </div>
            <RouterLink :to="{ name: 'SeoBlog' }"
              class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center d-none">
              <div class="col-2 col-sm-1">
                <div class="mx-auto" style="width: 35px">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.5 6.5L6.5 6.5M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div class="col-10">
                <div class="fw-medium"> Layout </div>
                <span class="text-secondary">Personalizar seu Bucket</span>
              </div>
            </RouterLink>

            <RouterLink :to="{}"
              class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center">
              <div class="col-2 col-sm-1">
                <div class="mx-auto" style="width: 35px">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.5 6.5L6.5 6.5M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div class="col-10">
                <div class="fw-medium"> Layout </div>
                <span class="text-secondary">Personalizar seu Bucket</span>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="card mb-3 rounded-4">
        <div class="card-body text-secondary">
          <RouterLink :to="{ name: 'Buckets' }"
            class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center d-none">
            <div class="col-2 col-sm-1 justify-content-center">
              <div class="mx-auto" style="width: 35px">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 12.0001L11.6422 16.8212C11.7734 16.8868 11.839 16.9196 11.9078 16.9325C11.9687 16.9439 12.0313 16.9439 12.0922 16.9325C12.161 16.9196 12.2266 16.8868 12.3578 16.8212L22 12.0001M2 17.0001L11.6422 21.8212C11.7734 21.8868 11.839 21.9196 11.9078 21.9325C11.9687 21.9439 12.0313 21.9439 12.0922 21.9325C12.161 21.9196 12.2266 21.8868 12.3578 21.8212L22 17.0001M2 7.00006L11.6422 2.17895C11.7734 2.11336 11.839 2.08056 11.9078 2.06766C11.9687 2.05622 12.0313 2.05622 12.0922 2.06766C12.161 2.08056 12.2266 2.11336 12.3578 2.17895L22 7.00006L12.3578 11.8212C12.2266 11.8868 12.161 11.9196 12.0922 11.9325C12.0313 11.9439 11.9687 11.9439 11.9078 11.9325C11.839 11.9196 11.7734 11.8868 11.6422 11.8212L2 7.00006Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div class="col-10 col-sm-11">
              <div class="fw-medium">Editar Buckets</div>
              <span class="text-secondary">Criar uma nova bucket</span>
            </div>
          </RouterLink>

          <RouterLink :to="{ name: 'AddBucket' }"
            class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center d-none">
            <div class="col-2 col-sm-1 justify-content-center">
              <div class="mx-auto" style="width: 35px">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 12.0001L11.6422 16.8212C11.7734 16.8868 11.839 16.9196 11.9078 16.9325C11.9687 16.9439 12.0313 16.9439 12.0922 16.9325C12.161 16.9196 12.2266 16.8868 12.3578 16.8212L22 12.0001M2 17.0001L11.6422 21.8212C11.7734 21.8868 11.839 21.9196 11.9078 21.9325C11.9687 21.9439 12.0313 21.9439 12.0922 21.9325C12.161 21.9196 12.2266 21.8868 12.3578 21.8212L22 17.0001M2 7.00006L11.6422 2.17895C11.7734 2.11336 11.839 2.08056 11.9078 2.06766C11.9687 2.05622 12.0313 2.05622 12.0922 2.06766C12.161 2.08056 12.2266 2.11336 12.3578 2.17895L22 7.00006L12.3578 11.8212C12.2266 11.8868 12.161 11.9196 12.0922 11.9325C12.0313 11.9439 11.9687 11.9439 11.9078 11.9325C11.839 11.9196 11.7734 11.8868 11.6422 11.8212L2 7.00006Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div class="col-10 col-sm-11">
              <div class="fw-medium">Adicionar Bucket</div>
              <span class="text-secondary">Criar uma nova bucket</span>
            </div>
          </RouterLink>

          <RouterLink :to="{ name: 'AddBucket' }"
            class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center d-none">
            <div class="col-2 col-sm-1 justify-content-center">
              <div class="mx-auto" style="width: 35px">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 12.0001L11.6422 16.8212C11.7734 16.8868 11.839 16.9196 11.9078 16.9325C11.9687 16.9439 12.0313 16.9439 12.0922 16.9325C12.161 16.9196 12.2266 16.8868 12.3578 16.8212L22 12.0001M2 17.0001L11.6422 21.8212C11.7734 21.8868 11.839 21.9196 11.9078 21.9325C11.9687 21.9439 12.0313 21.9439 12.0922 21.9325C12.161 21.9196 12.2266 21.8868 12.3578 21.8212L22 17.0001M2 7.00006L11.6422 2.17895C11.7734 2.11336 11.839 2.08056 11.9078 2.06766C11.9687 2.05622 12.0313 2.05622 12.0922 2.06766C12.161 2.08056 12.2266 2.11336 12.3578 2.17895L22 7.00006L12.3578 11.8212C12.2266 11.8868 12.161 11.9196 12.0922 11.9325C12.0313 11.9439 11.9687 11.9439 11.9078 11.9325C11.839 11.9196 11.7734 11.8868 11.6422 11.8212L2 7.00006Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div class="col-10 col-sm-11">
              <div class="fw-medium">Adicionar Bucket</div>
              <span class="text-secondary">Criar uma nova bucket</span>
            </div>
          </RouterLink>

          <button @click="logout"
            class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row text-danger align-items-center">
            <div class="col-2 col-sm-1 justify-content-center">
              <div class="mx-auto" style="width: 35px">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 8L22 12M22 12L18 16M22 12H9M15 4.20404C13.7252 3.43827 12.2452 3 10.6667 3C5.8802 3 2 7.02944 2 12C2 16.9706 5.8802 21 10.6667 21C12.2452 21 13.7252 20.5617 15 19.796"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                    class="text-danger" />
                </svg>
              </div>
            </div>
            <div class="col-10 col-sm-11">
              <div class="fw-medium text-danger">Sair da Conta</div>
              <span class="text-secondary"></span>
            </div>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import ThemeSwitcher from '../components/app/ThemeSwitcher.vue'
export default {
  name: 'ViewConfig',
  components: {
    ThemeSwitcher,
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem('userData'))
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("x-access-token")
      this.$router.push('/login')
    }
  }
}
</script>
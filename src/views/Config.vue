<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4 pb-2 text-primary-emphasis">
        Configurações
      </h1>
      <div class="col">
        <div class="card mb-3 rounded-4">
          <div class="card-body text-secondary ">

            <div class="text-secondary rounded-4">
              <RouterLink :to="{ name: 'SeoBlog' }"
                class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center">
                <div class="col-2 col-sm-1 justify-content-center">
                  <div class="mx-auto" style="width: 35px">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14 11H8M10 15H8M16 7H8M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H11.5M22 22L20.5 20.5M21.5 18C21.5 19.933 19.933 21.5 18 21.5C16.067 21.5 14.5 19.933 14.5 18C14.5 16.067 16.067 14.5 18 14.5C19.933 14.5 21.5 16.067 21.5 18Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div class="col-10 col-sm-11">
                  <div class="fw-medium"> SEO Bucket</div>
                  <span class="text-secondary">Informações de SEO</span>
                </div>
              </RouterLink>

              <RouterLink :to="{ name: 'SeoBlog' }"
                class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center">
                <div class="col-2 col-sm-1">
                  <div class="mx-auto" style="width: 35px">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.5 17H6.5M17.5 13H6.5M3 9H21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
            <RouterLink :to="{ name: 'Profile' }"
              class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center">
              <div class="col-2 col-sm-1">
                <div class="mx-auto" style="width: 35px">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5ZM11 21L14.1014 20.1139C14.2499 20.0715 14.3241 20.0502 14.3934 20.0184C14.4549 19.9902 14.5134 19.9558 14.5679 19.9158C14.6293 19.8707 14.6839 19.8161 14.7932 19.7068L21.25 13.25C21.9404 12.5597 21.9404 11.4403 21.25 10.75C20.5597 10.0596 19.4404 10.0596 18.75 10.75L12.2932 17.2068C12.1839 17.3161 12.1293 17.3707 12.0842 17.4321C12.0442 17.4866 12.0098 17.5451 11.9816 17.6066C11.9497 17.6759 11.9285 17.7501 11.8861 17.8987L11 21Z"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div class="col-10">
                <div class="fw-medium"> Meu Perfil </div>
                <span class="text-secondary">Personalizar seu Bucket</span>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="card mb-3 rounded-4">
        <div class="card-body text-secondary">
          <RouterLink :to="{ name: 'SeoBlog' }"
            class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center">
            <div class="col-2 col-sm-1 justify-content-center">
              <div class="mx-auto" style="width: 35px">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 12.0001L11.6422 16.8212C11.7734 16.8868 11.839 16.9196 11.9078 16.9325C11.9687 16.9439 12.0313 16.9439 12.0922 16.9325C12.161 16.9196 12.2266 16.8868 12.3578 16.8212L22 12.0001M2 17.0001L11.6422 21.8212C11.7734 21.8868 11.839 21.9196 11.9078 21.9325C11.9687 21.9439 12.0313 21.9439 12.0922 21.9325C12.161 21.9196 12.2266 21.8868 12.3578 21.8212L22 17.0001M2 7.00006L11.6422 2.17895C11.7734 2.11336 11.839 2.08056 11.9078 2.06766C11.9687 2.05622 12.0313 2.05622 12.0922 2.06766C12.161 2.08056 12.2266 2.11336 12.3578 2.17895L22 7.00006L12.3578 11.8212C12.2266 11.8868 12.161 11.9196 12.0922 11.9325C12.0313 11.9439 11.9687 11.9439 11.9078 11.9325C11.839 11.9196 11.7734 11.8868 11.6422 11.8212L2 7.00006Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div class="col-10 col-sm-11">
              <div class="fw-medium"> Buckets</div>
              <span class="text-secondary">Informações de SEO</span>
            </div>
          </RouterLink>
          <RouterLink :to="{ name: 'Login' }"
            class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row text-danger align-items-center">
            <div class="col-2 col-sm-1 justify-content-center">
              <div class="mx-auto" style="width: 35px">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 8L22 12M22 12L18 16M22 12H9M15 4.20404C13.7252 3.43827 12.2452 3 10.6667 3C5.8802 3 2 7.02944 2 12C2 16.9706 5.8802 21 10.6667 21C12.2452 21 13.7252 20.5617 15 19.796"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="text-danger " />
                </svg>
              </div>
            </div>
            <div class="col-10 col-sm-11">
              <div class="fw-medium text-danger">Sair da Conta</div>
              <span class="text-secondary"></span>
            </div>
          </RouterLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ViewConfig',
}
</script>
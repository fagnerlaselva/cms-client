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

              <div>
                <hr class="border-1 opacity-80">
              </div>

              <RouterLink :to="{ name: 'Author' }" aria-current="true"
                class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center">
                <div class="col-2 col-sm-1 justify-content-center">
                  <div class="mx-auto" style="width: 35px">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div class="col-10 col-sm-10">
                  <div class="fw-medium">
                    Autores da conta
                  </div>
                  <span class="text-secondary">
                    Veja quem pode editar
                  </span>
                </div>
              </RouterLink>

              <div class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center">
                <div class="col-2 col-sm-1 justify-content-center" data-bs-toggle="modal"
                  data-bs-target="#changerAccount">

                  <div class="mx-auto" style="width: 35px">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 8V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.0799 2 5.2V12.8C2 13.9201 2 14.4802 2.21799 14.908C2.40973 15.2843 2.71569 15.5903 3.09202 15.782C3.51984 16 4.0799 16 5.2 16H8M12 15L14 17L18.5 12.5M11.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V11.2C22 10.0799 22 9.51984 21.782 9.09202C21.5903 8.71569 21.2843 8.40973 20.908 8.21799C20.4802 8 19.9201 8 18.8 8H11.2C10.0799 8 9.51984 8 9.09202 8.21799C8.71569 8.40973 8.40973 8.71569 8.21799 9.09202C8 9.51984 8 10.0799 8 11.2V18.8C8 19.9201 8 20.4802 8.21799 20.908C8.40973 21.2843 8.71569 21.5903 9.09202 21.782C9.51984 22 10.0799 22 11.2 22Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>

                <div class="col-10">
                  <div class="fw-medium">Mudar de Conta</div>
                  <span class="text-secondary">Vamos escrever em outro lugar</span>
                </div>



              </div>
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
              <hr class="border-1 opacity-80">
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
              <hr class="border-1 opacity-80">
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
            <RouterLink :to="{ name: 'Home' }"
              class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center">
              <div class="col-2 col-sm-1 justify-content-center">
                <div class="mx-auto" style="width: 35px">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 11H8M10 15H8M16 7H8M20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8Z"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div class="col-10 col-sm-11">
                <div class="fw-medium">Artigos Postados</div>
                <span class="text-secondary">Lorem Ipson</span>
              </div>
            </RouterLink>
            <div>
              <hr class="border-1 opacity-80">
            </div>
            <RouterLink :to="{ name: 'Draft' }"
              class=" dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center d-none">
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
                <div class="fw-medium"> Rascunhos </div>
                <span class="text-secondary">Personalizar seu Bucket</span>
              </div>
            </RouterLink>

            <RouterLink :to="{ name: 'Archive' }" exact
              class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center">
              <div class="col-2 col-sm-1">
                <div class="mx-auto" style="width: 35px">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 18L19.9999 19.094C19.4695 19.6741 18.7502 20 18.0002 20C17.2501 20 16.5308 19.6741 16.0004 19.094C15.4693 18.5151 14.75 18.1901 14.0002 18.1901C13.2504 18.1901 12.5312 18.5151 12 19.094M3.00003 20H4.67457C5.16376 20 5.40835 20 5.63852 19.9447C5.84259 19.8957 6.03768 19.8149 6.21663 19.7053C6.41846 19.5816 6.59141 19.4086 6.93732 19.0627L19.5001 6.49998C20.3285 5.67156 20.3285 4.32841 19.5001 3.49998C18.6716 2.67156 17.3285 2.67156 16.5001 3.49998L3.93729 16.0627C3.59139 16.4086 3.41843 16.5816 3.29475 16.7834C3.18509 16.9624 3.10428 17.1574 3.05529 17.3615C3.00003 17.5917 3.00003 17.8363 3.00003 18.3255V20Z"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div class="col-10">
                <div class="fw-medium"> Rascunhos </div>
                <span class="text-secondary">Personalizar seu Bucket</span>
              </div>
            </RouterLink>
            <div>
              <hr class="border-1 opacity-80">
            </div>
            <RouterLink :to="{}"
              class="dropdown-item text-primary-emphasis fs-6 py-2 border-none d-flex row align-items-center">
              <div class="col-2 col-sm-1">
                <div class="mx-auto" style="width: 35px">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 7.9966C3.83599 7.99236 3.7169 7.98287 3.60982 7.96157C2.81644 7.80376 2.19624 7.18356 2.03843 6.39018C2 6.19698 2 5.96466 2 5.5C2 5.03534 2 4.80302 2.03843 4.60982C2.19624 3.81644 2.81644 3.19624 3.60982 3.03843C3.80302 3 4.03534 3 4.5 3H19.5C19.9647 3 20.197 3 20.3902 3.03843C21.1836 3.19624 21.8038 3.81644 21.9616 4.60982C22 4.80302 22 5.03534 22 5.5C22 5.96466 22 6.19698 21.9616 6.39018C21.8038 7.18356 21.1836 7.80376 20.3902 7.96157C20.2831 7.98287 20.164 7.99236 20 7.9966M10 13H14M4 8H20V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V8Z"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div class="col-10">
                <div class="fw-medium"> Arquivados </div>
                <span class="text-secondary">Personalizar seu Bucket</span>
              </div>
            </RouterLink>
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
              <hr class="border-1 opacity-80">
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
  <ModalChangerAccount />
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
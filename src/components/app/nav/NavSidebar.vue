<template>
    <nav class="sidebar d-none d-lg-block" :class="{ 'off-sidebar': hideSidebar }">
        <div class="d-flex flex-column flex-shrink-0 border-end" style="width: 78px;">
            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li class="m-2 mt-3 rounded logo-li" data-bs-title="Tooltip on right">
                    <div class="image-logo rounded-4" data-bs-toggle="modal" data-bs-target="#changerBucket"
                        :style="'background-image: url(' + currentBucket.pictureUrl + ');'">
                    </div>
                </li>
                <li class="m-2 rounded-4">
                    <RouterLink :to="{ name: 'Dashboard' }" exact class="p-3 rounded-4 d-flex" aria-current="true"
                        data-bs-toggle="tooltip" data-bs-title="Default tooltip">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 17H16M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </RouterLink>
                </li>
                <li class="m-2">
                    <RouterLink :to="{ name: 'Home' }" exact
                        class="router-link-active router-link-exact-active  p-3 rounded-4 d-flex" aria-current="true">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14 11H8M10 15H8M16 7H8M20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </RouterLink>
                </li>
                <!-- Draft - Rascunho-->
                <li class="m-2">
                    <RouterLink :to="{ name: 'Draft' }" exact class="p-3 rounded-4 d-flex">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21 18L19.9999 19.094C19.4695 19.6741 18.7502 20 18.0002 20C17.2501 20 16.5308 19.6741 16.0004 19.094C15.4693 18.5151 14.75 18.1901 14.0002 18.1901C13.2504 18.1901 12.5312 18.5151 12 19.094M3.00003 20H4.67457C5.16376 20 5.40835 20 5.63852 19.9447C5.84259 19.8957 6.03768 19.8149 6.21663 19.7053C6.41846 19.5816 6.59141 19.4086 6.93732 19.0627L19.5001 6.49998C20.3285 5.67156 20.3285 4.32841 19.5001 3.49998C18.6716 2.67156 17.3285 2.67156 16.5001 3.49998L3.93729 16.0627C3.59139 16.4086 3.41843 16.5816 3.29475 16.7834C3.18509 16.9624 3.10428 17.1574 3.05529 17.3615C3.00003 17.5917 3.00003 17.8363 3.00003 18.3255V20Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </RouterLink>
                </li>


                <!--  Archive -->
                <li class="m-2">
                    <RouterLink :to="{ name: 'Archive' }" exact class="p-3 rounded-4 d-flex">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4 7.9966C3.83599 7.99236 3.7169 7.98287 3.60982 7.96157C2.81644 7.80376 2.19624 7.18356 2.03843 6.39018C2 6.19698 2 5.96466 2 5.5C2 5.03534 2 4.80302 2.03843 4.60982C2.19624 3.81644 2.81644 3.19624 3.60982 3.03843C3.80302 3 4.03534 3 4.5 3H19.5C19.9647 3 20.197 3 20.3902 3.03843C21.1836 3.19624 21.8038 3.81644 21.9616 4.60982C22 4.80302 22 5.03534 22 5.5C22 5.96466 22 6.19698 21.9616 6.39018C21.8038 7.18356 21.1836 7.80376 20.3902 7.96157C20.2831 7.98287 20.164 7.99236 20 7.9966M10 13H14M4 8H20V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V8Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </RouterLink>
                </li>

                <li class="m-2">
                    <RouterLink :to="{ name: 'Categories' }" exact class="p-3 rounded-4 d-flex" aria-current="true">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="svg-elem-1"></path>
                        </svg>
                    </RouterLink>
                </li>
                <!--  Author -->
                <li class="m-2">
                    <RouterLink :to="{ name: 'Author' }" exact class="p-3 rounded-4 d-flex" aria-current="true">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </RouterLink>
                </li>
                <li class="m-2">
                    <RouterLink :to="{ name: 'Buckets' }" exact class="p-3 rounded-4 d-flex" aria-current="true">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.5 9.5L7.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                    </RouterLink>
                </li>
            </ul>
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center justify-content-center p-3 align-items-center"
                    data-bs-toggle="dropdown" aria-expanded="true">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.5 9.5L7.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <img src="https://avatars.githubusercontent.com/u/34191081?v=4" alt="Fagner Mendes" width="50"
                        height="50" class="rounded-4">
                </a>

                <ul class="dropdown-menu dropdown-config text-small shadow rounded-4"
                    style="position: absolute; width: 330px; inset: auto auto 0px 0px; margin: 0px; transform: translate(0px, -38px);"
                    data-popper-placement="top-start">
                    <li>
                        <div class="row align-items-center p-3">
                            <div class="col-2">

                            </div>
                            <div class="col-12 text-start">
                                <ThemeSwitcher />
                            </div>
                        </div>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'Profile' }" class="dropdown-item p-3 d-flex row align-items-center">
                            <div class="col-2">
                                <img src="https://avatars.githubusercontent.com/u/34191081?v=4" alt="Fagner Mendes"
                                    width="40" height="40" class="rounded-4">
                            </div>
                            <div class="col-10">
                                <div class="fw-medium">
                                    {{ user.name }}
                                </div>
                                <span class="text-secondary">
                                    {{ user.email }}
                                </span>
                            </div>
                        </RouterLink>
                    </li>
                    <li class="py-1 d-none">
                        <RouterLink :to="{ name: 'Home' }" class="dropdown-item">Notificações</RouterLink>
                    </li>
                    <li class="">
                        <RouterLink :to="{ name: 'Config' }"
                            class="dropdown-item text-primary-emphasi p-3 d-flex row align-items-center">
                            <div class="col-2">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8ZM9 16L21 16M9 16C9 17.6569 7.65685 19 6 19C4.34315 19 3 17.6569 3 16C3 14.3431 4.34315 13 6 13C7.65685 13 9 14.3431 9 16Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="col-10">
                                <div class="fw-medium">Configurações</div>
                                <span class="text-secondary">Ganhe benefícios por indicação</span>
                            </div>
                        </RouterLink>
                    </li>
                    <li>
                        <button class="dropdown-item p-3 d-flex row align-items-center" data-bs-toggle="modal"
                            data-bs-target="#changerBucket">
                            <div class="col-2">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 12.0001V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37368 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37368 17.2077 3.52346 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L13 21.4445M7.5 4.50008L16.5 9.50008M22 21.5001L21 20.5001M22 18.0001C22 19.6569 20.6569 21.0001 19 21.0001C17.3431 21.0001 16 19.6569 16 18.0001C16 16.3432 17.3431 15.0001 19 15.0001C20.6569 15.0001 22 16.3432 22 18.0001Z"
                                        stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="col-10">
                                <div class="fw-medium">Mudar de Bucket</div>
                                <span class="text-secondary">Vamos escrever em outro lugar</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'AddBucket' }" class="dropdown-item p-3 d-flex row align-items-center">
                            <div class="col-2">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M14 20.889L12.777 21.5684C12.4934 21.726 12.3516 21.8047 12.2015 21.8356C12.0685 21.863 11.9315 21.863 11.7986 21.8356C11.6484 21.8047 11.5066 21.726 11.223 21.5684L3.82297 17.4573C3.52346 17.2909 3.37368 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V7.94153C3 7.59889 3 7.42757 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37368 6.79248 3.52345 6.70928 3.82297 6.54288L11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7986 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42757 21 7.59889 21 7.94153L21 12.5001M7.5 4.50008L16.5 9.50008M19 21.0001V15.0001M16 18.0001H22"
                                        stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="col-10">
                                <div class="fw-medium"> Adicionar Bucket</div>
                                <span class="text-secondary">Informações para artigos</span>
                            </div>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'SeoBlog' }" class="dropdown-item p-3 d-flex row align-items-center">
                            <div class="col-2">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14 11H8M10 15H8M16 7H8M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H11.5M22 22L20.5 20.5M21.5 18C21.5 19.933 19.933 21.5 18 21.5C16.067 21.5 14.5 19.933 14.5 18C14.5 16.067 16.067 14.5 18 14.5C19.933 14.5 21.5 16.067 21.5 18Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="col-10">
                                <div class="fw-medium">SEO Bucket - Contatus</div>
                                <span class="text-secondary">Informações de SEO</span>
                            </div>
                        </RouterLink>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li class="d-none">
                        <RouterLink :to="{ name: 'AddBucket' }" class="dropdown-item p-3 d-flex row align-items-center">
                            <div class="col-2">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2 12.0001L11.6422 16.8212C11.7734 16.8868 11.839 16.9196 11.9078 16.9325C11.9687 16.9439 12.0313 16.9439 12.0922 16.9325C12.161 16.9196 12.2266 16.8868 12.3578 16.8212L22 12.0001M2 17.0001L11.6422 21.8212C11.7734 21.8868 11.839 21.9196 11.9078 21.9325C11.9687 21.9439 12.0313 21.9439 12.0922 21.9325C12.161 21.9196 12.2266 21.8868 12.3578 21.8212L22 17.0001M2 7.00006L11.6422 2.17895C11.7734 2.11336 11.839 2.08056 11.9078 2.06766C11.9687 2.05622 12.0313 2.05622 12.0922 2.06766C12.161 2.08056 12.2266 2.11336 12.3578 2.17895L22 7.00006L12.3578 11.8212C12.2266 11.8868 12.161 11.9196 12.0922 11.9325C12.0313 11.9439 11.9687 11.9439 11.9078 11.9325C11.839 11.9196 11.7734 11.8868 11.6422 11.8212L2 7.00006Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="col-10">
                                <div class="fw-medium">Adicionar Bucket</div>
                                <span class="text-secondary">Alternar biblioteca de conteúdo</span>
                            </div>
                        </RouterLink>
                    </li>
                    <li>
                        <button @click="logout" class="dropdown-item p-3 d-flex row text-danger align-items-center">
                            <div class="col-2">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18 8L22 12M22 12L18 16M22 12H9M15 4.20404C13.7252 3.43827 12.2452 3 10.6667 3C5.8802 3 2 7.02944 2 12C2 16.9706 5.8802 21 10.6667 21C12.2452 21 13.7252 20.5617 15 19.796"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="col-10 fw-medium">Sair da conta</div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="modal fade" id="changerBucket" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel" aria-hidden="true" style="z-index: 99999;">
        <div class="modal-dialog modal-dialog-scrollable  modal-dialog-centered  modal-dialog-scrollabl">
            <div class="modal-content rounded-5">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Escolha uma Bucket</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div>
                        <ul class="list-group rounded-4">
                            <li class="list-group-item p-3" v-for="bucket in buckets" :key="bucket.id">
                                <div :for="id" @click="setCurrentBucket(bucket.id)"
                                    class="checkbox-image d-flex align-items-center" style="line-height: normal;">
                                    <div class="image-container rounded-4"
                                        :style="'background-image: url(' + bucket.pictureUrl + ');'">
                                    </div>
                                    <div class="px-4 text-primary-emphasis fw-medium">
                                        {{ bucket.name }}
                                    </div>
                                </div>

                            </li>
                        </ul>
                        <div class="vstack row-gap-4 d-flex justify-content-between flex-column flex-sm-row py-4"
                            data-bs-theme="auto">
                            <AddButton :link="{ name: 'AddBucket' }" buttonText="Adicionar Buckets"
                                data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ThemeSwitcher from '../../app/ThemeSwitcher.vue'
import axios from "axios"
import AddButton from '../../generic/triggers/AddButton.vue';

export default {
    name: 'NavSidebar',
    components: { ThemeSwitcher, AddButton },
    data() {
        return {
            checked: this.value,
            user: JSON.parse(localStorage.getItem('userData')),
            buckets: [],
            currentBucket: {}

        };
    },

    methods: {
        getCurrentBucket() {
            const currentBucketId = localStorage.getItem("currentBucket")
            this.currentBucket = this.buckets.find(item => item.id === currentBucketId)
            console.log(currentBucketId)
        },
        setCurrentBucket(bucketId) {
            localStorage.setItem("currentBucket", bucketId);
            this.$router.push("/dashboard/").then(() => {
                // Forçar o refresh da página após o redirecionamento
                window.location.reload();
            });
        },
        toggleCheck() {
            this.checked = !this.checked;
            this.$emit('input', this.checked);
        },
        logout() {
            localStorage.removeItem("x-access-token")
            localStorage.removeItem("userData")
            this.$router.push('/login')
        },
        async listBuckets() {
            const accessToken = localStorage.getItem('x-access-token')
            const response = await axios.get(`${import.meta.env.VITE_CMS_API_URL}/bucket`, {
                headers: {
                    'x-access-token': accessToken
                }
            })
            this.buckets = response.data
        }
    },

    async mounted() {
        await this.listBuckets()
        this.getCurrentBucket()
    },

    setup() {
        const router = useRouter();
        const hideSidebar = ref(true); // Estado para ocultar a barra lateral

        const checkRoute = () => {
            const currentPath = router.currentRoute.value.path;
            hideSidebar.value = ['/login', '/inicio', '/recuperar-senha', '/registrar-se', '/recuperacao-senha-solicitada', '/editor-artigo', '/editor-artigo-preview'].includes(currentPath);
        }

        // Executa checkRoute assim que o componente é montado
        onMounted(checkRoute);

        // Atualiza barra lateral sempre que a rota for alterada
        router.afterEach(() => {
            checkRoute();
        });

        return {
            hideSidebar
        };
    },

}
</script>

<style>
.sidebar {
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 99;
    padding-bottom: 50px;
    position: fixed;
    width: 100px;
    transition: width 0.5s;
    margin: 0 auto;
    /* Adiciona uma transição suave para a largura */
}

.off-sidebar {
    width: 0;
    display: none !important;
    /* Define a largura como 0 quando a barra lateral está oculta */
}

.sidebar>div {
    height: 100vh;
}

/* Esconde a barra lateral e a torna transparente */
.sidebar.loading {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s;
}

.main_content {
    padding-left: 0;
}

.logo-li:hover {
    background: none !important;
}

.nav-pills li.logo-li:hover {
    background: none !important;
}

.nav-pills li a {
    border-radius: 10rem;
}

.nav-pills li a:active,
.nav-pills li a.active,
.nav-pills li a:focus,
.nav-pills li a:hover {
    background: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important;
    border-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important;
    color: var(--bs-primary);
}
</style>
<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4 text-primary-emphasis d-flex flex-row justify-content-between">
        <div class="col-md-4 pb-4">Start Bucket: Assisty24h</div>
      </h1>
      <div class="g-4 rounded-4">
        <div class="row pb-4">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 pb-4">
            <div class="card-work ">
              <div class="card__wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 11H8M10 15H8M16 7H8M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H11.5M22 22L20.5 20.5M21.5 18C21.5 19.933 19.933 21.5 18 21.5C16.067 21.5 14.5 19.933 14.5 18C14.5 16.067 16.067 14.5 18 14.5C19.933 14.5 21.5 16.067 21.5 18Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="card__buttom">
                  <RouterLink :to="{ name: 'SeoBlog' }" class="btn btn-primary">Editar SEO</RouterLink>
                </div>
              </div>

              <div class="card__title text-primary-emphasis">SEO Bucket</div>
              <div class="card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
              <div class="card__indicator text-primary-emphasis"><span class="card__indicator-amount">15</span> Item /
                <span class="card__indicator-percentage">20%</span>
              </div>
              <div class="card__progress"><progress max="100" value="40"></progress></div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-6 pb-4">
            <div class="card-work ">
              <div class="card__wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.5 6.5L6.5 6.5M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="card__buttom">
                  <RouterLink :to="{ name: 'SeoBlog' }" class="btn btn-primary">Editar Layout</RouterLink>
                </div>
              </div>
              <div class="card__title text-primary-emphasis">layout</div>
              <div class="card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
              <div class="card__indicator text-primary-emphasis"><span class="card__indicator-amount">9</span> Works /
                <span class="card__indicator-percentage">45%</span>
              </div>
              <div class="card__progress"><progress max="100" value="40"></progress></div>
            </div>
          </div>
          <div class=" col-12 col-sm-6 col-md-4 col-lg-4  pb-4">
            <div class="card-work completed">
              <div class="card__wrapper">
                <div class="card___wrapper-acounts">
                  <div class="card__score">+3</div>
                  <div class="card__acounts"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                      <circle r="60" fill="#ffd8c9" cy="64" cx="64"></circle>
                      <circle r="48" opacity=".3" fill="#fff" cy="64" cx="64"></circle>
                      <path fill="#393c54"
                        d="m64 14a31 31 0 0 1 31 31v41.07a9.93 9.93 0 0 1 -9.93 9.93h-42.14a9.93 9.93 0 0 1 -9.93-9.93v-41.07a31 31 0 0 1 31-31z">
                      </path>
                      <circle r="7" fill="#fbc0aa" cy="60" cx="89"></circle>
                      <path fill="#00adfe"
                        d="m64 124a59.7 59.7 0 0 0 34.7-11.07l-3.33-10.29a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.33 10.29a59.7 59.7 0 0 0 34.7 11.07z">
                      </path>
                      <path fill="#ff8475" d="m46.54 121.45a59.93 59.93 0 0 0 34.92 0l-2.46-25.45h-30z"></path>
                      <path fill="#f85565" d="m48.13 105h31.74l-.39-4h-30.96z"></path>
                      <path fill="#ffd8c9" d="m76 96a12 12 0 0 1 -24 0z"></path>
                      <path stroke-width="14" stroke-linejoin="round" stroke-linecap="round" stroke="#fbc0aa"
                        fill="none" d="m64 83v12"></path>
                      <circle r="7" fill="#fbc0aa" cy="60" cx="39"></circle>
                      <path fill="#ffd8c9"
                        d="m64 90a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z"></path>
                      <path stroke-width="5" stroke-linejoin="round" stroke-linecap="round" stroke="#fbc0aa" fill="none"
                        d="m64 64.75v6.5"></path>
                      <path fill="#515570"
                        d="m64.83 18.35a27.51 27.51 0 0 0 -28.32 27.47v4.76a2 2 0 0 0 2 2h.58a1 1 0 0 0 .86-.49l4.05-7.09 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.47 4.13a1 1 0 0 0 1.72 0l2.47-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.47 4.13a1 1 0 0 0 1.72 0l2.47-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 4 7.09a1 1 0 0 0 .86.49h.58a2 2 0 0 0 2-2v-4.18c.05-14.95-11.66-27.61-26.61-28.05z">
                      </path>
                      <path fill="#f85565" d="m47.35 113h33.29l-.38-4h-32.52z"></path>
                      <path fill="#f85565" d="m46.58 121h34.84l-.39-4h-34.06z"></path>
                      <path opacity=".7" fill="#ff8475"
                        d="m58.52 79.39c0-.84 11-.84 11 0 0 1.79-2.45 3.25-5.48 3.25s-5.52-1.46-5.52-3.25z"></path>
                      <path opacity=".7" fill="#f85565"
                        d="m69.48 79.29c0 .78-11 .78-11 0 .04-1.79 2.52-3.29 5.52-3.29s5.48 1.5 5.48 3.29z"></path>
                      <circle r="3" fill="#515570" cy="58.75" cx="76.25"></circle>
                      <path stroke-linejoin="round" stroke-linecap="round" stroke="#515570" fill="none"
                        d="m70.75 59.84a6.61 6.61 0 0 1 11.5-1.31"></path>
                      <path
                        style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke:#515570;stroke-width:2;opacity:.2"
                        d="m72.11 51.46 5.68-.4a4.62 4.62 0 0 1 4.21 2.1l.77 1.21"></path>
                      <circle r="3" fill="#515570" cy="58.75" cx="51.75"></circle>
                      <g stroke-linecap="round" fill="none">
                        <path stroke-linejoin="round" stroke="#515570" d="m57.25 59.84a6.61 6.61 0 0 0 -11.5-1.31">
                        </path>
                        <path stroke-width="2" stroke-linejoin="round" stroke="#515570" opacity=".2"
                          d="m55.89 51.45-5.68-.39a4.59 4.59 0 0 0 -4.21 2.11l-.77 1.21"></path>
                        <path stroke-miterlimit="10" stroke="#f85565"
                          d="m57.25 78.76a17.4 17.4 0 0 0 6.75 1.12 17.4 17.4 0 0 0 6.75-1.12"></path>
                      </g>
                    </svg></div>
                  <div class="card__acounts"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                      <circle r="60" fill="#ff8475" cy="64" cx="64"></circle>
                      <circle r="48" opacity=".4" fill="#f85565" cy="64" cx="64"></circle>
                      <path fill="#7f3838"
                        d="m64 14a32 32 0 0 1 32 32v41a6 6 0 0 1 -6 6h-52a6 6 0 0 1 -6-6v-41a32 32 0 0 1 32-32z"></path>
                      <path opacity=".4" fill="#393c54"
                        d="m62.73 22h2.54a23.73 23.73 0 0 1 23.73 23.73v42.82a4.45 4.45 0 0 1 -4.45 4.45h-41.1a4.45 4.45 0 0 1 -4.45-4.45v-42.82a23.73 23.73 0 0 1 23.73-23.73z">
                      </path>
                      <circle r="7" fill="#fbc0aa" cy="65" cx="89"></circle>
                      <path fill="#4bc190"
                        d="m64 124a59.67 59.67 0 0 0 34.69-11.06l-3.32-9.3a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.32 9.3a59.67 59.67 0 0 0 34.69 11.06z">
                      </path>
                      <path opacity=".3" fill="#356cb6"
                        d="m45 110 5.55 2.92-2.55 8.92a60.14 60.14 0 0 0 9 1.74v-27.08l-12.38 10.25a2 2 0 0 0 .38 3.25z">
                      </path>
                      <path opacity=".3" fill="#356cb6"
                        d="m71 96.5v27.09a60.14 60.14 0 0 0 9-1.74l-2.54-8.93 5.54-2.92a2 2 0 0 0 .41-3.25z"></path>
                      <path fill="#fff" d="m57 123.68a58.54 58.54 0 0 0 14 0v-25.68h-14z"></path>
                      <path stroke-width="14" stroke-linejoin="round" stroke-linecap="round" stroke="#fbc0aa"
                        fill="none" d="m64 88.75v9.75"></path>
                      <circle r="7" fill="#fbc0aa" cy="65" cx="39"></circle>
                      <path fill="#ffd8c9"
                        d="m64 91a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z"></path>
                      <path fill="#bc5b57"
                        d="m91.49 51.12v-4.72c0-14.95-11.71-27.61-26.66-28a27.51 27.51 0 0 0 -28.32 27.42v5.33a2 2 0 0 0 2 2h6.81a8 8 0 0 0 6.5-3.33l4.94-6.88a18.45 18.45 0 0 1 1.37 1.63 22.84 22.84 0 0 0 17.87 8.58h13.45a2 2 0 0 0 2.04-2.03z">
                      </path>
                      <path
                        style="fill:none;stroke-linecap:round;stroke:#fff;stroke-miterlimit:10;stroke-width:2;opacity:.1"
                        d="m62.76 36.94c4.24 8.74 10.71 10.21 16.09 10.21h5"></path>
                      <path
                        style="fill:none;stroke-linecap:round;stroke:#fff;stroke-miterlimit:10;stroke-width:2;opacity:.1"
                        d="m71 35c2.52 5.22 6.39 6.09 9.6 6.09h3"></path>
                      <circle r="3" fill="#515570" cy="62.28" cx="76"></circle>
                      <circle r="3" fill="#515570" cy="62.28" cx="52"></circle>
                      <ellipse ry="2.98" rx="4.58" opacity=".1" fill="#f85565" cy="69.67" cx="50.42"></ellipse>
                      <ellipse ry="2.98" rx="4.58" opacity=".1" fill="#f85565" cy="69.67" cx="77.58"></ellipse>
                      <g stroke-linejoin="round" stroke-linecap="round" fill="none">
                        <path stroke-width="4" stroke="#fbc0aa" d="m64 67v4"></path>
                        <path stroke-width="2" stroke="#515570" opacity=".2" d="m55 56h-9.25"></path>
                        <path stroke-width="2" stroke="#515570" opacity=".2" d="m82 56h-9.25"></path>
                      </g>
                      <path opacity=".4" fill="#f85565" d="m64 84c5 0 7-3 7-3h-14s2 3 7 3z"></path>
                      <path fill="#f85565"
                        d="m65.07 78.93-.55.55a.73.73 0 0 1 -1 0l-.55-.55c-1.14-1.14-2.93-.93-4.27.47l-1.7 1.6h14l-1.66-1.6c-1.34-1.4-3.13-1.61-4.27-.47z">
                      </path>
                    </svg></div>
                </div>
                <div class="card__menu"><svg xmlns="http://www.w3.org/2000/svg" width="4" viewBox="0 0 4 20" height="20"
                    fill="none">
                    <g fill="#000">
                      <path d="m2 4c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2z"></path>
                      <path d="m2 12c1.10457 0 2-.8954 2-2 0-1.10457-.89543-2-2-2s-2 .89543-2 2c0 1.1046.89543 2 2 2z">
                      </path>
                      <path d="m2 20c1.10457 0 2-.8954 2-2s-.89543-2-2-2-2 .8954-2 2 .89543 2 2 2z"></path>
                    </g>
                  </svg></div>
              </div>
              <div class="card__title text-primary-emphasis">Adicione uma categoria</div>
              <div class="card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
              <div class="card__indicator text-primary-emphasis"><span class="card__indicator-amount">0</span> Works /
                <span class="card__indicator-percentage">0</span>
              </div>
              <div class="card__progress"><progress max="100" value="0"></progress></div>
            </div>
          </div>
          <div class=" col-12 col-sm-6 col-md-4 col-lg-4 pb-4">
            <div class="card-work">
              <div class="card__wrapper">
                <div class="card___wrapper-acounts">
                  <div class="card__score">+3</div>
                  <div class="card__acounts"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                      <circle r="60" fill="#ffd8c9" cy="64" cx="64"></circle>
                      <circle r="48" opacity=".3" fill="#fff" cy="64" cx="64"></circle>
                      <path fill="#393c54"
                        d="m64 14a31 31 0 0 1 31 31v41.07a9.93 9.93 0 0 1 -9.93 9.93h-42.14a9.93 9.93 0 0 1 -9.93-9.93v-41.07a31 31 0 0 1 31-31z">
                      </path>
                      <circle r="7" fill="#fbc0aa" cy="60" cx="89"></circle>
                      <path fill="#00adfe"
                        d="m64 124a59.7 59.7 0 0 0 34.7-11.07l-3.33-10.29a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.33 10.29a59.7 59.7 0 0 0 34.7 11.07z">
                      </path>
                      <path fill="#ff8475" d="m46.54 121.45a59.93 59.93 0 0 0 34.92 0l-2.46-25.45h-30z"></path>
                      <path fill="#f85565" d="m48.13 105h31.74l-.39-4h-30.96z"></path>
                      <path fill="#ffd8c9" d="m76 96a12 12 0 0 1 -24 0z"></path>
                      <path stroke-width="14" stroke-linejoin="round" stroke-linecap="round" stroke="#fbc0aa"
                        fill="none" d="m64 83v12"></path>
                      <circle r="7" fill="#fbc0aa" cy="60" cx="39"></circle>
                      <path fill="#ffd8c9"
                        d="m64 90a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z"></path>
                      <path stroke-width="5" stroke-linejoin="round" stroke-linecap="round" stroke="#fbc0aa" fill="none"
                        d="m64 64.75v6.5"></path>
                      <path fill="#515570"
                        d="m64.83 18.35a27.51 27.51 0 0 0 -28.32 27.47v4.76a2 2 0 0 0 2 2h.58a1 1 0 0 0 .86-.49l4.05-7.09 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.47 4.13a1 1 0 0 0 1.72 0l2.47-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.47 4.13a1 1 0 0 0 1.72 0l2.47-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 4 7.09a1 1 0 0 0 .86.49h.58a2 2 0 0 0 2-2v-4.18c.05-14.95-11.66-27.61-26.61-28.05z">
                      </path>
                      <path fill="#f85565" d="m47.35 113h33.29l-.38-4h-32.52z"></path>
                      <path fill="#f85565" d="m46.58 121h34.84l-.39-4h-34.06z"></path>
                      <path opacity=".7" fill="#ff8475"
                        d="m58.52 79.39c0-.84 11-.84 11 0 0 1.79-2.45 3.25-5.48 3.25s-5.52-1.46-5.52-3.25z"></path>
                      <path opacity=".7" fill="#f85565"
                        d="m69.48 79.29c0 .78-11 .78-11 0 .04-1.79 2.52-3.29 5.52-3.29s5.48 1.5 5.48 3.29z"></path>
                      <circle r="3" fill="#515570" cy="58.75" cx="76.25"></circle>
                      <path stroke-linejoin="round" stroke-linecap="round" stroke="#515570" fill="none"
                        d="m70.75 59.84a6.61 6.61 0 0 1 11.5-1.31"></path>
                      <path
                        style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke:#515570;stroke-width:2;opacity:.2"
                        d="m72.11 51.46 5.68-.4a4.62 4.62 0 0 1 4.21 2.1l.77 1.21"></path>
                      <circle r="3" fill="#515570" cy="58.75" cx="51.75"></circle>
                      <g stroke-linecap="round" fill="none">
                        <path stroke-linejoin="round" stroke="#515570" d="m57.25 59.84a6.61 6.61 0 0 0 -11.5-1.31">
                        </path>
                        <path stroke-width="2" stroke-linejoin="round" stroke="#515570" opacity=".2"
                          d="m55.89 51.45-5.68-.39a4.59 4.59 0 0 0 -4.21 2.11l-.77 1.21"></path>
                        <path stroke-miterlimit="10" stroke="#f85565"
                          d="m57.25 78.76a17.4 17.4 0 0 0 6.75 1.12 17.4 17.4 0 0 0 6.75-1.12"></path>
                      </g>
                    </svg></div>
                  <div class="card__acounts"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                      <circle r="60" fill="#ff8475" cy="64" cx="64"></circle>
                      <circle r="48" opacity=".4" fill="#f85565" cy="64" cx="64"></circle>
                      <path fill="#7f3838"
                        d="m64 14a32 32 0 0 1 32 32v41a6 6 0 0 1 -6 6h-52a6 6 0 0 1 -6-6v-41a32 32 0 0 1 32-32z"></path>
                      <path opacity=".4" fill="#393c54"
                        d="m62.73 22h2.54a23.73 23.73 0 0 1 23.73 23.73v42.82a4.45 4.45 0 0 1 -4.45 4.45h-41.1a4.45 4.45 0 0 1 -4.45-4.45v-42.82a23.73 23.73 0 0 1 23.73-23.73z">
                      </path>
                      <circle r="7" fill="#fbc0aa" cy="65" cx="89"></circle>
                      <path fill="#4bc190"
                        d="m64 124a59.67 59.67 0 0 0 34.69-11.06l-3.32-9.3a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.32 9.3a59.67 59.67 0 0 0 34.69 11.06z">
                      </path>
                      <path opacity=".3" fill="#356cb6"
                        d="m45 110 5.55 2.92-2.55 8.92a60.14 60.14 0 0 0 9 1.74v-27.08l-12.38 10.25a2 2 0 0 0 .38 3.25z">
                      </path>
                      <path opacity=".3" fill="#356cb6"
                        d="m71 96.5v27.09a60.14 60.14 0 0 0 9-1.74l-2.54-8.93 5.54-2.92a2 2 0 0 0 .41-3.25z"></path>
                      <path fill="#fff" d="m57 123.68a58.54 58.54 0 0 0 14 0v-25.68h-14z"></path>
                      <path stroke-width="14" stroke-linejoin="round" stroke-linecap="round" stroke="#fbc0aa"
                        fill="none" d="m64 88.75v9.75"></path>
                      <circle r="7" fill="#fbc0aa" cy="65" cx="39"></circle>
                      <path fill="#ffd8c9"
                        d="m64 91a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z"></path>
                      <path fill="#bc5b57"
                        d="m91.49 51.12v-4.72c0-14.95-11.71-27.61-26.66-28a27.51 27.51 0 0 0 -28.32 27.42v5.33a2 2 0 0 0 2 2h6.81a8 8 0 0 0 6.5-3.33l4.94-6.88a18.45 18.45 0 0 1 1.37 1.63 22.84 22.84 0 0 0 17.87 8.58h13.45a2 2 0 0 0 2.04-2.03z">
                      </path>
                      <path
                        style="fill:none;stroke-linecap:round;stroke:#fff;stroke-miterlimit:10;stroke-width:2;opacity:.1"
                        d="m62.76 36.94c4.24 8.74 10.71 10.21 16.09 10.21h5"></path>
                      <path
                        style="fill:none;stroke-linecap:round;stroke:#fff;stroke-miterlimit:10;stroke-width:2;opacity:.1"
                        d="m71 35c2.52 5.22 6.39 6.09 9.6 6.09h3"></path>
                      <circle r="3" fill="#515570" cy="62.28" cx="76"></circle>
                      <circle r="3" fill="#515570" cy="62.28" cx="52"></circle>
                      <ellipse ry="2.98" rx="4.58" opacity=".1" fill="#f85565" cy="69.67" cx="50.42"></ellipse>
                      <ellipse ry="2.98" rx="4.58" opacity=".1" fill="#f85565" cy="69.67" cx="77.58"></ellipse>
                      <g stroke-linejoin="round" stroke-linecap="round" fill="none">
                        <path stroke-width="4" stroke="#fbc0aa" d="m64 67v4"></path>
                        <path stroke-width="2" stroke="#515570" opacity=".2" d="m55 56h-9.25"></path>
                        <path stroke-width="2" stroke="#515570" opacity=".2" d="m82 56h-9.25"></path>
                      </g>
                      <path opacity=".4" fill="#f85565" d="m64 84c5 0 7-3 7-3h-14s2 3 7 3z"></path>
                      <path fill="#f85565"
                        d="m65.07 78.93-.55.55a.73.73 0 0 1 -1 0l-.55-.55c-1.14-1.14-2.93-.93-4.27.47l-1.7 1.6h14l-1.66-1.6c-1.34-1.4-3.13-1.61-4.27-.47z">
                      </path>
                    </svg></div>
                </div>
                <div class="card__menu"><svg xmlns="http://www.w3.org/2000/svg" width="4" viewBox="0 0 4 20" height="20"
                    fill="none">
                    <g fill="#000">
                      <path d="m2 4c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2z"></path>
                      <path d="m2 12c1.10457 0 2-.8954 2-2 0-1.10457-.89543-2-2-2s-2 .89543-2 2c0 1.1046.89543 2 2 2z">
                      </path>
                      <path d="m2 20c1.10457 0 2-.8954 2-2s-.89543-2-2-2-2 .8954-2 2 .89543 2 2 2z"></path>
                    </g>
                  </svg></div>
              </div>
              <div class="card__title text-primary-emphasis">Adicione um Autor</div>
              <div class="card__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
              <div class="card__indicator text-primary-emphasis"><span class="card__indicator-amount">10</span> Works /
                <span class="card__indicator-percentage">100%</span>
              </div>
              <div class="card__progress completed"><progress max="100" value="100"></progress></div>
            </div>
          </div>
        </div>

      </div>
    </div>


    <div class="marquee">
      <div>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
        <span>Em breve novidades</span>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'ViewStart',
  components: {

  },
  data() {
    return {

    };
  }
}
</script>

<style>
.marquee {
  height: 35px;
  width: 100%;
  margin-left: -28px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  padding: 8px 0 4px 0;
}

.marquee div {
  display: inline-block;
  width: 300%;
  height: 40px;
  position: absolute;
  overflow: hidden;
  animation: marquee 30s linear infinite;
}

.marquee span {
  float: left;
  width: 200px;
}

.marquee:hover div {
  animation-play-state: paused;
}

.list-group-item {
  border: none;
}

.card-work {
  --main-color: #000;
  --bg-color: var(--bs-tertiary-bg);
  padding: 25px;
  background: var(--bg-color);
  border-radius: 20px;
}

.card__wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.card___wrapper-acounts {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
  cursor: pointer;
}

.card___wrapper-acounts>div:nth-child(2) {
  position: absolute;
  left: 25px;
  z-index: -1;
}

.card___wrapper-acounts>div:nth-child(3) {
  position: absolute;
  left: 50px;
  z-index: -2;
}

.card__score {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: var(--main-color);
}

.card__acounts {
  width: 42px;
  height: 42px;
}

.card__acounts svg {
  width: 100%;
  height: 100%;
}

.card__menu {
  width: 40px;
  height: 40px;
  background: var(--bs-primary);
  /*background: #39d353;*/
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.card__buttom {
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
}

.card__title {
  margin-top: 50px;
  font-weight: 600;
  font-size: 25px;

}

.card__subtitle {
  margin-top: 15px;
  font-weight: 400;
  font-size: 15px;
}

.card__indicator {
  margin-top: 50px;
  font-weight: 500;
  font-size: 14px;
  color: var(--main-color);
}

.card__progress progress {
  width: 100%;
  height: 4px;
  border-radius: 100px;
}

.card__progress progress::-webkit-progress-bar {
  background-color: #00000030;
  border-radius: 100px;
}

.card__progress progress::-webkit-progress-value {
  background-color: #39d353;
  border-radius: 100px;
}



@keyframes marquee {
  0% {
    left: 0%;
  }

  100% {
    left: -1100px;
  }
}

.card:hover {
  flex: 2;
  transition: all 0.2s
}

.card,
.list-group-item,
.list-group {
  background: var(--bs-tertiary-bg);
}
</style>

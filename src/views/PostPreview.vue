<template>
  <section class="ezy__contents2">
    <div class="container">
      <div class="row justify-content-center">
        <!-- heading -->
        <div class="col-12 col-md-8 text-center">
          <h1 class="ezy__contents2-heading mb-3">Lorem ipsum dolor sit amet</h1>
          <p class="ezy__contents2-sub-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <!-- avatar -->
          <div class="d-flex align-items-center justify-content-center mt-4">
            <div class="me-2">
              <img src="https://cdn.easyfrontend.com/pictures/contents/avatar.jpeg" alt=""
                class="img-fluid rounded-circle border" width="47" />
            </div>
            <div class="text-start">
              <h4 class="ezy__contents2-avatar-name mb-0">John Doe</h4>
              <p class="ezy__contents2-avatar-date mb-0">8 June 2004</p>
            </div>
          </div>
        </div>
        <!-- banner -->
        <div class="col-12">
          <img src="https://cdn.easyfrontend.com/pictures/blog/blog_14_1.jpg" alt=""
            class="img-fluid my-3 my-md-5 rounded-2" />
        </div>
        <div class="col-12 col-md-8 ezy__contents2-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio. Hic, nisi! Perspiciatis veritatis
            quibusdam esse! Corrupti aut unde neque sit alias repudiandae ratione debitis id pariatur? Nesciunt quam
            officia enim repudiandae, voluptatibus, culpa veniam sapiente sunt nisi ratione tenetur.
          </p>
          <br />
          <hr />
          <br />
          <h4>The standard Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio. Hic, nisi! Perspiciatis veritatis
            quibusdam esse! Corrupti aut unde neque sit alias repudiandae ratione debitis id pariatur? Nesciunt quam
            officia enim repudiandae, voluptatibus, culpa veniam sapiente sunt nisi ratione tenetur.
          </p>
          <br />
          <blockquote cite="https://easyfrontend.com">
            <b>
              For 50 years, WWF has been protecting the future of nature. The world's leading conservation
              organization, WWF works in 100 countries and is supported by 1.2 million members in the United States
              and close to 5 million globally
            </b>
            <p></p>
            <p>- John Doe, CEO & Founder</p>
          </blockquote>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur <a href="#">adipisicing elit</a>. Pariatur, odio. Hic, nisi!
            Perspiciatis veritatis quibusdam esse! Corrupti aut unde neque sit alias repudiandae ratione debitis id
            pariatur? Nesciunt quam officia enim repudiandae, voluptatibus, culpa veniam sapiente sunt nisi ratione
            tenetur.
          </p>

          <br />
          <img src="https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo doloremque.</p>

          <br />
          <h4>1914 translation by H.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias quam ut at voluptatem, illum id
            repudiandae libero labore deserunt voluptates vero accusantium suscipit quae possimus beatae velit.
            Repellat cupiditate amet, consequatur eaque vel autem accusantium excepturi sed unde sunt pariatur nobis
            qui nam, minima ullam. Quos quasi quidem consequatur sequi veniam doloribus quisquam, ipsam cum provident
            hic impedit eos!
          </p>
        </div>
        <!-- contents -->
        <div class="col-12 col-md-8 ezy__contents2-content">
          <hr class="ezy__contents2-hr my-4 my-lg-5" />
          <!-- social icons -->
          <ul class="nav ezy__contents2-social-icon d-flex justify-content-center align-items-center">
            <li>
              <a href="#"><i class="fas fa-clone me-2"></i> Copy Link</a>
            </li>
            <li>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-vimeo"></i></a>
            </li>
          </ul>
          <!-- End: .social-icon -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostPreview',
  components: {

  },
}
</script>

<style>
@media (min-width: 768px) {
  .ezy__contents2 {
    padding: 100px 0;
  }
}

/* Gray Block Style */
.gray .ezy__contents2,
.ezy__contents2.gray {
  /* Bootstrap variables */
  --bs-body-bg: rgb(246, 246, 246);
}

/* Dark Gray Block Style */
.dark-gray .ezy__contents2,
.ezy__contents2.dark-gray {
  /* Bootstrap variables */
  --bs-body-color: rgb(241, 241, 241);
  --bs-body-bg: rgb(30, 39, 53);

  /* easy frontend variables */
  --ezy-icon-border: rgb(91, 122, 166);
}

/* Dark Block Style */
.dark .ezy__contents2,
.ezy__contents2.dark {
  /* Bootstrap variables */
  --bs-body-color: rgb(255, 255, 255);
  --bs-body-bg: rgb(11, 23, 39);

  /* easy frontend variables */
  --ezy-icon-border: rgb(91, 122, 166);
}

/* heading and sub-heading */
.ezy__contents2-heading {
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  color: var(--bs-body-color);
}

.ezy__contents2-sub-heading {
  color: var(--bs-body-color);
  font-size: 18px;
  line-height: 25px;
  opacity: 0.8;
}

@media (min-width: 991px) {
  .ezy__contents2-heading {
    font-size: 45px;
  }
}

.ezy__contents2-content,
.ezy__contents2-content p {
  color: var(--bs-body-color);
  font-size: 17px;
  line-height: 25px;
  opacity: 0.8;
}

.ezy__contents2-content blockquote {
  border-left: 2px solid var(--ezy-theme-color);
  padding: 30px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.35;
}

.ezy__contents2-content img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px;
}

.ezy__contents2-hr,
.ezy__contents2-content hr {
  background-color: var(--bs-body-color);
  opacity: 0.11;
}

.ezy__contents2-content a {
  color: var(--ezy-theme-color);
}

/* avatar */
.ezy__contents2-avatar-name {
  color: var(--bs-body-color);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
}

.ezy__contents2-avatar-date {
  color: var(--bs-body-color);
  font-size: 15px;
  line-height: 1.2;
  opacity: 0.7;
}

/* social icons */
.ezy__contents2-social-icon a {
  text-decoration: none;
  color: var(--bs-body-color);
  font-size: 15px;
  opacity: 0.9;
  transition: 0.4s all ease-in-out;
  border: 1px solid var(--ezy-icon-border);
  border-radius: 6px;
  padding: 11px 15px;
  margin: 4px 8px 4px 0;
}

.ezy__contents2-social-icon li:last-child a {
  margin-right: 0 !important;
}

.ezy__contents2-social-icon a:hover {
  color: var(--ezy-theme-color) !important;
}
</style>

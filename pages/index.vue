<template>
  <div id="home-page" class="page-wrapper home-page">
    <div class="header-container">
      <site-nav />
      <site-hero
        title="Software Engineering Experts"
        :subtitle="subtitle"
        image="/home-fg.jpg"
      >
        <button
          class="button is-primary"
          onclick="
          window.open(
            'https://www.techguild.be/careers/'
          )
        "
        >
          Join Tech Guild
        </button>
      </site-hero>
    </div>
    <main-section theme="one-column">
      <template v-slot:default>
        <div class="container-center">
          <h6>Hello<span class="light-blue">!</span> We are Tech Guild</h6>
          <p>
            Tech Guild is a Belgian IT consultancy company that is a trusted
            partner for delivering software and digital products of the highest
            standard.
          </p>
          <br />
          <p>
            Our engineers are ready to collaborate with you and your team to
            build innovative digital applications & services.
          </p>
          <br />
          <p>
            In the medieval times, people who shared the same profession
            organized themselves in guilds to share expertise and knowledge, in
            the current digital era this is still a good idea.
          </p>
          <br />
          <p>
            Our Tech Guilds are communities of engineers who are passionate
            about the same technologies enabling them to learn from one another,
            share ideas/expertise and let them grow professionally.
          </p>
        </div>
      </template>
    </main-section>
    <div class="container-wrapper">
      <div class="container-center">
        <h6>Our guilds<span class="light-blue">.</span></h6>
        <p>
          Our Tech Guilds are communities of engineers who are passionate about
          the same technologies enabling them to learn from one another, share
          ideas/expertise and let them grow professionally.
        </p>
        <div class="guilds-container">
          <div class="columns">
            <div class="column">
              <h6>Dev Guild<span class="light-blue">.</span></h6>
              <p>
                Tech Guild is a Belgian IT consultancy company that is a trusted
                partner for delivering software and digital products of the
                highest standard.
              </p>
            </div>
            <div class="column">
              <h6>Data Guild<span class="light-blue">.</span></h6>
              <p>
                Tech Guild is a Belgian IT consultancy company that is a trusted
                partner for delivering software and digital products of the
                highest standard.
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <h6>Cloud Guild<span class="light-blue">.</span></h6>
              <p>
                Tech Guild is a Belgian IT consultancy company that is a trusted
                partner for delivering software and digital products of the
                highest standard.
              </p>
            </div>
            <div class="column">
              <h6>User Experience Guild<span class="light-blue">.</span></h6>
              <p>
                Tech Guild is a Belgian IT consultancy company that is a trusted
                partner for delivering software and digital products of the
                highest standard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-center">
      <h6>We <span class="light-blue">love</span> working for</h6>
      <div class="logo-container companies">
        <img src="/bedrijven/zimmo.png" alt="zimmo logo" />
        <img src="/bedrijven/mediahuis.jpg" alt="mediahuis logo" />
        <img src="/bedrijven/fortis.jpg" alt="fortis logo" />
        <img src="/bedrijven/vrt.png" alt="vrt logo" />
        <img src="/bedrijven/ag.jpg" alt="ag insurance logo" />
      </div>
      <br />
    </div>

    <!--  <div class="container-center">
      <h6>Meet our techees</h6>
      <VueSlickCarousel
        :arrows="false"
        :autoplay="true"
        :autoplay-speed="5000"
        :speed="3000"
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VueSlickCarousel>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import VueSlickCarousel from 'vue-slick-carousel'
import { setPageData } from '../helper'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `${this.$siteConfig.siteName} - Software Engineering Experts`
    }
  },
  // components: { VueSlickCarousel },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}

.guilds-container {
  margin-top: 3rem;
  text-align: left;
}

.guilds-container h6 {
  text-align: left;
  font-size: 2em !important;
}

.light-blue {
  color: #41b4e7;
}

.container-center {
  max-width: 960px;
  margin: 0 auto;
  padding: 6rem 0;
  text-align: center;
}

.technologies-overview {
  color: #fff;
}

.container-wrapper {
  background-color: #384e85;
}

.container-wrapper .container-center,
.container-wrapper li,
.container-wrapper h6 {
  color: #fff !important;
}
</style>

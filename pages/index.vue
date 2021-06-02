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
      <div class="container-center technologies-overview">
        <h6>Our toolset</h6>
        <div class="logo-container">
          <p>Frontend Technologies</p>
          <img src="/javascript.svg" alt="javascript logo" />
          <img src="/vue.svg" alt="vue logo" />
          <img src="/angular.svg" alt="angular logo" />
          <img src="/react.svg" alt="react logo" />
          <img src="/redux.svg" alt="redux logo" />
        </div>
        <div class="logo-container">
          <p>Backend Technologies</p>
          <img src="/python.svg" alt="python logo" />
          <img src="/php.svg" alt="php logo" />
          <img src="/java.svg" alt="java logo" />
          <img src="/c-sharp.svg" alt="c# logo" />
          <img src="/node.svg" alt="node logo" />
          <img src="/ruby-on-rails.svg" alt="ruby on rails logo" />
        </div>
        <div class="logo-container">
          <p>Cloud Technologies</p>
          <img src="/kubernetes.svg" alt="kubernetes logo" />
          <img src="/docker.svg" alt="docker logo" />
          <img src="/aws.svg" alt="aws logo" />
          <img src="/azure.svg" alt="azure logo" />
          <img src="/git.svg" alt="git logo" />
          <img src="/travis.svg" alt="travis logo" />
        </div>
        <div class="logo-container">
          <p>Mobile Technologies</p>
          <img src="/xamarin.svg" alt="xamarin logo" />
          <img src="/react-native.svg" alt="react native logo" />
          <img src="/ios.svg" alt="ios logo" />
          <img src="/android.svg" alt="android logo" />
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

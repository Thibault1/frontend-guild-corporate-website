<template>
  <div id="home-page" class="page-wrapper home-page">
    <div class="header-container">
      <site-nav />
      <site-hero
        title="Software Engineering Experts"
        :subtitle="subtitle"
        image="/home-fg.jpg"
      >
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
          <button
            class="button btn-call-to-action"
            onclick="
          location.href = 'https://techguild.be/contact'
        "
          >
            Let's collaborate
          </button>
        </div>
      </template>
    </main-section>
    <div class="container-wrapper">
      <div class="container-center">
        <h6>the tech guilds<span class="light-blue">.</span></h6>
        <p>
          In the middle ages, people who shared the same profession organized
          themselves in guilds to share expertise and knowledge, in the current
          digital era this is still a good idea. Our Tech Guilds are communities
          of engineers who are passionate about the same technologies enabling
          them to learn from one another, share ideas/expertise and let them
          grow professionally.
        </p>
        <div class="guilds-container">
          <div class="columns">
            <div class="column">
              <h6><span class="light-blue">Dev</span> Guild</h6>
              <p>
                Dev Guild is featuring your favorite front-end and back-end
                programming languages & frameworks. In addition to modern web
                based applications that run in your preferred browser our
                engineers develop native applications for both desktop and
                mobile.
              </p>
            </div>
            <div class="column">
              <h6><span class="light-blue">Data</span> Guild</h6>
              <p>
                Great data management enables businesses to get to know their
                customers better, augments business processes and increases
                revenue. Our data engineers & scientists can support you in
                collecting, structuring and making sense of all the data that
                your organisation generates.
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <h6><span class="light-blue">Cloud</span> Guild</h6>
              <p>
                The cloud has enabled companies to stop investing in their own
                server environment, provides scalability, protects against data
                loss and has made Platforms as a Service a reality. If you’re
                looking to migrate your business to the cloud, our Techees are
                ready.
              </p>
            </div>
            <div class="column">
              <h6><span class="light-blue">APM</span> Guild</h6>
              <p>
                Agile project management and business analysis is becoming
                increasingly important for companies that want to stay ahead of
                the competition. If you want to improve your business processes,
                the APM Guild prepares your company for continuous improvement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-center">
      <h6>We <span class="light-blue">love</span> working for</h6>

      <VueSlickCarousel
        :arrows="false"
        :autoplay="true"
        :autoplay-speed="5000"
        :speed="3000"
      >
        <div class="logo-container companies">
          <img src="/bedrijven/gsk.png" alt="GSK logo" />
          <img src="/bedrijven/zimmo.png" alt="zimmo logo" />
          <img src="/bedrijven/fortis.jpg" alt="BNP Paribas Fortis logo" />
          <img src="/bedrijven/vrt.png" alt="VRT logo" />
          <img src="/bedrijven/ag.jpg" alt="AG Insurance logo" />
          <img src="/bedrijven/sdworx.jpg" alt="SD Worx logo" />
        </div>
        <div class="logo-container companies">
          <img src="/bedrijven/dhl.jpg" alt="DHL logo" />
          <img src="/bedrijven/mediahuis.jpg" alt="mediahuis logo" />
          <img src="/bedrijven/elia.jpg" alt="Elia logo" />
          <img src="/bedrijven/axa.jpg" alt="Axa logo" />
          <img
            src="/bedrijven/vlaamse-overheid.jpg"
            alt="Vlaamse overheid logo"
          />
        </div>
      </VueSlickCarousel>

      <br />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
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
  components: { VueSlickCarousel },
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
.slick-track[data-v-e4caeaf8] {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.slick-track.slick-center[data-v-e4caeaf8] {
  margin-left: auto;
  margin-right: auto;
}
.slick-track[data-v-e4caeaf8]:after,
.slick-track[data-v-e4caeaf8]:before {
  display: table;
  content: '';
}
.slick-track[data-v-e4caeaf8]:after {
  clear: both;
}
.slick-loading .slick-track[data-v-e4caeaf8] {
  visibility: hidden;
}
.slick-slide[data-v-e4caeaf8] {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}
[dir='rtl'] .slick-slide[data-v-e4caeaf8] {
  float: right;
}
.slick-slide img[data-v-e4caeaf8] {
  display: block;
}
.slick-slide.slick-loading img[data-v-e4caeaf8] {
  display: none;
}
.slick-slide.dragging img[data-v-e4caeaf8] {
  pointer-events: none;
}
.slick-initialized .slick-slide[data-v-e4caeaf8] {
  display: block;
}
.slick-loading .slick-slide[data-v-e4caeaf8] {
  visibility: hidden;
}
.slick-vertical .slick-slide[data-v-e4caeaf8] {
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden[data-v-21137603] {
  display: none;
}
.slick-slider[data-v-3d1a4f76] {
  position: relative;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.slick-list[data-v-3d1a4f76] {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.slick-list[data-v-3d1a4f76]:focus {
  outline: none;
}
.slick-list.dragging[data-v-3d1a4f76] {
  cursor: pointer;
  cursor: hand;
}
.btn-call-to-action {
  background-color: #2ecb6e;
  border: 0;
  color: #ffffff;
  font-weight: bold;
  padding: 1.5em;
  font-size: 1em;
}
.btn-call-to-action:hover {
  background-color: #32966b;
  color: #ffffff;
}

.logo-container img {
  float: left;
}

.guilds-container {
  margin-top: 3rem;
  text-align: left;
}

.guilds-container h6 {
  text-align: left;
  font-size: 2em !important;
}

.technologies-overview {
  color: #fff;
}

.slick-list {
  padding-left: 3rem !important;
}
</style>

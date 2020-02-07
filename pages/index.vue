<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" image="/home-fg.jpg">
      <button
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
      >
        Subscribe To Newsletter
      </button>
    </site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <h6>Featured Developer Jobs</h6>
        <!-- All Posts -->
        <posts-grid />
        <div class="container-center">
          <h6>Developer First</h6>
          <p>
            Frontend Guild is specialized in Web and Application development. We
            decided to devote our time and skills to solve our customer’s
            complex tasks concerning the development of (web) apps that stand
            out from there competitors. This is our love and passion; this is
            our occupation and way of life.
          </p>
          <br />
          <p>
            At Frontend Guild, we distinguish ourselves from other companies by
            being experts in our discipline. We strongly believe that one can’t
            be an expert in everything and that’s why we focus only on Web and
            Application Development.
          </p>
          <br />
          <p>
            We’re proud that we talk the same language as developers, which
            makes it easier to understand the needs & expectations of hiring
            managers and Engineers.
          </p>
          <div class="logo-container">
            <img src="/javascript.svg" alt="javascript logo" />
            <img src="/vue.svg" alt="vue logo" />
            <img src="/angular.svg" alt="angular logo" />
            <img src="/react.svg" alt="react logo" />
            <img src="/node.svg" alt="node logo" />
          </div>
        </div>
        <div class="container-center margin-top">
          <!--  <h6>What others say about us</h6>
          <carousel :per-page="1" :mouse-drag="false">
            <slide>
              "Maxim was the perfect help to find my dream JavaScript job. -
              Kenny Debouvry."
            </slide>
            <slide>
              "It was a pleaseure to work with Thibault he really knew what he
              was talking about. And provided me with a good world class
              frontend developer. - Xavier Vancompernolle."
            </slide>
          </carousel> -->
        </div>
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <news-letter-form-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import NewsLetterFormModal from '~/components/NewsLetterFormModal'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    NewsLetterFormModal
  },
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
</style>

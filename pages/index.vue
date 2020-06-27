<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" image="/home-fg.jpg">
      <button
        class="button is-primary"
        onclick="
          window.open(
            'https://www.linkedin.com/company/frontendguild/',
            '_blank'
          )
        "
      >
        Follow us on LinkedIn
      </button>
    </site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <h6>Featured Developer Jobs</h6>
        <!-- All Posts -->
        <posts-grid />
        <div class="container-center">
          <h6>We build future proof digital applications and services.</h6>
          <br />
          <p>
            Together with our clients we design, develop, and architecture
            enterprise-scale apps and services that answer today’s demanding
            expectations.
          </p>
          <br />
          <p>
            This results in robust enterprise-scale applications that meet the
            highest standards.
          </p>
          <br />
          <p>
            We are implementing innovation by agile software development,
            thorough testings methods (TDD, BDD, E2E Testing), and design
            patterns.
          </p>
          <br />
          <p>
            We are always aiming for longterm collaborations with our customers
            so we can define together a robust and future proof strategy.
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

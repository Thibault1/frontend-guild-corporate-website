<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <button
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
      >
        Subscribe To Newsletter
      </button>
    </site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <h6>Featured Jobs</h6>
        <!-- All Posts -->
        <posts-grid />
        <h6>Frontend First</h6>
        <div class="container-center">
          <p>
            At Frontend Guild we are specialized in Frontend and Node.js
            development. We distinguish ourselves from other staffing companies
            by being experts in our discipline. We strongly believe that you
            can’t be an expert in everything because of that we focus only on
            JavaScript related technologies. We are proud that we talk the same
            language as developers, which makes it more easy to understand the
            needs and expectations of hiring managers and frontend engineers.
          </p>
          <div class="logo-container">
            <img src="/javascript.svg" alt="javascript logo" />
            <img src="/vue.svg" alt="vue logo" />
            <img src="/angular.svg" alt="angular logo" />
            <img src="/react.svg" alt="react logo" />
            <img src="/node.svg" alt="node logo" />
          </div>
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

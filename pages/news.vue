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
        <h6>News Articles</h6>
        <posts-grid />
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'

export default {
  name: 'News',
  head() {
    return {
      title: `News | ${this.$siteConfig.siteName}`
    }
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

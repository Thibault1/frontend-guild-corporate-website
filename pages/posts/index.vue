<template>
  <div id="post-page" class="page-wrapper home-page">
    <div class="header-container">
      <site-nav />
      <site-hero
        title="Tech Guild News"
        subtitle="Discover more about life at Tech Guild."
      ></site-hero>
    </div>
    <main-section theme="one-column">
      <div class="container-center">
        <h6>Featured Posts<span class="light-blue">.</span></h6>
        <posts-grid />
      </div>
    </main-section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../../helper'

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
    setPageData(store, { slug: 'posts' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>

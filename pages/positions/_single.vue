<template>
  <div id="position-page" class="page-wrapper position-page">
    <div class="header-container">
      <site-nav />
      <site-hero :title="title" :subtitle="'test'">
        <span class="author-wrapper">
          <strong>{{ location }}</strong>
        </span>
      </site-hero>
    </div>
    <main-section :one-column-constrained="true">
      <template v-slot:default>
        <div class="container-center">
          <div class="position-wrapper">
            <markdown :markdown="$store.state.content" />
          </div>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { setPageData } from '../../helper'
// import 'highlight.js/styles/github.css'
import Markdown from '~/components/Markdown'
export default {
  components: {
    Markdown
  },
  computed: {
    ...mapState(['title', 'location', 'summary', 'type', 'slug']),
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    }
  },
  fetch({ store, params }) {
    console.log('in de position pagina ', params)
    setPageData(store, { resource: 'position', slug: params.single })
  }
}
</script>
<style scoped lang="scss">
.edit-post {
  margin-bottom: 20px;
}
.position-page .position-wrapper {
  text-align: left !important;
}
.other-posts {
  margin-top: 4rem;
}
</style>

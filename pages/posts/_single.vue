<template>
  <div id="post-page" class="page-wrapper post-page">
    <div class="header-container">
      <site-nav />
      <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
        <span class="author-wrapper">
          <strong>{{ date }}</strong>
        </span>
      </site-hero>
    </div>
    <main-section :one-column-constrained="true">
      <template v-slot:default>
        <div class="container-center">
          <div class="post-wrapper">
            <markdown :markdown="$store.state.content" />
            <div class="other-posts">
              <h6 class="subtitle is-size-4">
                More news
              </h6>
              <!-- Related Posts -->
              <posts-grid :number="2" :category="category" :exclude="slug" />
            </div>
          </div>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { setPageData, getFormattedDate } from '../../helper'
// import 'highlight.js/styles/github.css'
import Markdown from '~/components/Markdown'
export default {
  components: {
    Markdown
  },
  computed: {
    ...mapState([
      'title',
      'subtitle',
      'featureImage',
      'underSubtitle',
      'author',
      'category',
      'slug'
    ]),
    date() {
      return getFormattedDate(this.$store.state.date)
    },
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'post', slug: params.single })
  }
}
</script>
<style scoped lang="scss">
.post-page .post-wrapper {
  text-align: left !important;
}
.other-posts {
  margin-top: 4rem;
}
</style>

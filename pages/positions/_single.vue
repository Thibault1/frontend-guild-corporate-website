<template>
  <div id="position-page" class="page-wrapper position-page">
    <div class="header-container">
      <site-nav />
      <site-hero :title="title" :subtitle="location" />
    </div>
    <main-section :one-column-constrained="true">
      <template v-slot:default>
        <div class="container-center">
          <div class="position-wrapper">
            <markdown :markdown="$store.state.content" />
            <button
              class="button btn-call-to-action"
              onclick="location.href='mailto:thibault@techguild.be?cc=maxim@techguild.be&subject=Open position sollicitation&body=We are happy to hear that you are interested in joining Tech Guild, please write a short motivation why you think you would be a good fit for the role and don’t forget to attach an up to date CV.  We will contact you ASAP after we have received your application.';"
            >
              Apply Now!
            </button>
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
.position-page .position-wrapper {
  text-align: left !important;
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
</style>

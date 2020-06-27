<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Why working together with us will benefit you."
      subtitle="We are passionate Software Engineers."
      image="/about-fg.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Why Frontend Guild</h3>
          <p>
            Frontend Guild was founded by IT Experts and is a company for top
            developers, producing high-quality code with exceptional user
            experience.
          </p>
          <p>
            Frontend Guild is a specialized consultancy company for all your
            software development needs. Our primary aim is to provide the
            Belgian Tech Industry with capable and motivated Engineers.
          </p>

          <h3>How do we do it?</h3>
          <p>
            As a company, we have a very rigorous screening process to identify
            the best candidates. We do in-house technical screenings with all
            our candidates, pair programming tests are an essential part of our
            recruitment process.
          </p>
          <p>
            So we know for sure the CV from the developer matches his/her skill
            set. We are experts in our domain, and we look for great problem
            solvers with passion and drive — the types of people we want to work
            with.
          </p>

          <p>
            At Frontend Guild, the developer comes first: we always think about
            the best work-life balance possible for our Engineers.
          </p>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  }
}
</script>

<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Why working together with us will benefit you."
      subtitle="IT Consultancy where quality & fairness really matters."
      image="/about-fg.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>We provide External Software Engineers.</h3>
          <p>
            Modern enterprises rely heavily on skilled IT Engineers, we can help
            you with additional capacity for your software development teams.
          </p>
          <p>
            Frontend Guild is a specialized consultancy company for all your
            software development needs, we provide the Belgian Tech Industry
            with capable and motivated Engineers.
          </p>

          <p>
            Our Software Engineers are ready to collaborate with your team to
            create applications and services that stand out from the competition
            and support you with your digital transformations journeys.
          </p>
          <p>
            As a company, we have a very rigorous screening process to identify
            and attract the best engineers. We do in-house technical screenings
            with all our candidates, pair programming tests are an essential
            part of our recruitment process.
          </p>
          <p>
            We are experts in our domain, and we look for great problem solvers
            with passion and drive — the types of people we want to work with.
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

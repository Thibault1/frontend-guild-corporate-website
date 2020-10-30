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
            For modern enterprises its paramount to have access to skilled IT
            Engineers to engage in their projects & thats where Frontend Guild
            comes in:
          </p>
          <p>
            Frontend Guild is an IT consultancy company, specialized in web and
            application development, with the goal to support the IT teams of
            our clients with motivated & competent engineers.
          </p>

          <p>
            Our engineers are ready to collaborate with your team to create
            applications & services you envision and support your digital
            transformation journey.
          </p>
          <p>
            We strive to provide a quality service/experience for both our
            clients and engineers:
          </p>
          <ul>
            <li>
              Support clients during the intake process with in-house technical
              screenings & pair programming tests.
            </li>
            <li>
              Enabling clients to identify the engineers that best match their
              requirements.
            </li>
            <li>
              Provide continuous support throughout contract duration.
            </li>
            <li>
              Offering engineers projects that live up to their ambitions & let
              them grow professionally.
            </li>
            <li>
              Identifying the ideal work-life balance for each of our engineers.
            </li>
            <li>
              Give our developers the necessary goodies from time to time to
              keep them healthy & motivated ;)
            </li>
          </ul>
          <p>
            By doing this, we aspire to provide our engineers with challenging
            opportunities & support our clients with the talent their projects
            need.
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

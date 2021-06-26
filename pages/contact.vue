<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <div class="header-container">
      <site-nav />
      <site-hero
        title="Contact Us"
        subtitle="Let's have a cup of coffee together."
        image="/contact-fg.jpg"
      ></site-hero>
    </div>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Hello!
              </p>
              <p class="subtitle">
                Let's work together.
              </p>
              <figure class="image is-1by1 ">
                <img src="/profile-pic.png" alt="profile pic" />
              </figure>
              <br />
              <div class="content">
                <p class="office-title">
                  Tech Guild - Ghent office
                </p>
                <p>
                  Contributiestraat 59<br />

                  9000 Gent<br />
                  +32 9 352 02 42<br />
                  hello@techguild.be
                </p>
                <p>
                  BE0727972726
                </p>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <contact-form />
            </article>
          </div>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import ContactForm from '~/components/ContactForm'
export default {
  head() {
    return {
      title: `${this.$siteConfig.siteName} - Software Engineering Experts`
    }
  },
  components: { ContactForm }
}
</script>
<style>
.office-title {
  font-weight: bold;
  font-size: 0.95rem;
  text-transform: uppercase;
}
</style>

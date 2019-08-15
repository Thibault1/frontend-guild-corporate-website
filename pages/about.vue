<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Why working together with us will benefit you."
      subtitle="We are the Belgian JavaScript heroes."
      image="/uploads/about-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Why Frontend Guild</h3>
          <p>
            Frontend Guild is founded by
            <strong>JavaScript Developers</strong> for
            <strong>JavaScript Developers</strong>.
          </p>
          <p>
            We are a specialized consultancy and staffing company for all your
            Frontend and Node.js development needs. We help Frontend and
            Full-Stack JavaScript Developers to work together with the very best
            <strong>top-notch companies</strong> from Belgium.
          </p>

          <h3>We like to meetup</h3>
          <p>
            We organize monthly meetups for our developers where we discuss hot
            topics like GraphQL, Angular, Typescript, React, Vue.js and Node.js.
            Going to and organizing JavaScript conferences is one of the things
            we do to keep up to date with the
            <strong>latest hottest technologies</strong>.
          </p>
          <h3>JavaScript first</h3>
          <p>
            JavaScript is the backbone of our organization and we do a thorough
            screening from all our developers, so we can assure we work only
            with the <strong>very best talent from Belgium</strong>. We can
            guarantee all of our Frontend Developers are from the highest
            possible caliber you can find in Belgium.
          </p>
          <p>
            Next to consultancy we provide permanent placement for our clients.
          </p>
          <p>
            In contrast to other companies we do
            <strong>in-house technical screenings</strong>
            from all of our candidates, so we know for sure the CV from the
            JavaScript developer matches his or her skill set. Pair programming
            tests are an essential part from our recruitment process.
          </p>
          <p>
            We are a developer based focussed company, where we always think
            about the very best work-life balance possible for our Frontend
            Developers.
          </p>
          <p>
            And to all your Frontend Developers out there, and if you are good
            enough, <strong>JOIN THE GUILD</strong> today :)
          </p>
        </div>
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
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

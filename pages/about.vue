<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Why working together with us will benefit you."
      subtitle="We are the Belgian JavaScript heroes."
      image="/about-fg.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Why Frontend Guild</h3>
          <p>
            Frontend Guild was founded by JavaScript Developers and is a company
            for top developers, producing high-quality JavaScript code with
            exceptional user experience.
          </p>
          <p>
            Frontend Guild is a specialized consultancy and staffing company for
            all your Frontend and Node.js development needs. Our primary aim is
            to help Frontend and Full-Stack JavaScript Developers to work
            together with the very best
            <strong>top-notch companies</strong> from Belgium.
          </p>
          <h3>Meetups & Conferences</h3>
          <p>
            What makes us stand out is that we organize monthly meetups for our
            developers where we discuss hot topics like GraphQL, Angular,
            Typescript, React, Vue.js and Node.js. Going to and organizing
            JavaScript conferences is one of the things we do to keep up to date
            with the <strong>latest hottest technologies</strong>.
          </p>
          <h3>JavaScript first</h3>
          <p>
            JavaScript is the backbone of our organization. We make sure all our
            developers are thoroughly screened & tested, so we can assure we
            work only with the <strong>very best talent from Belgium</strong>.
          </p>
          <h3>How do we do it?</h3>
          <p>
            As a company, we have a very rigorous screening process to identify
            the best candidates. We do
            <strong>in-house technical screenings</strong> with all our
            candidates, pair programming tests are an essential part of our
            recruitment process.
          </p>
          <p>
            So we know for sure the CV from the JavaScript developer matches
            his/her skill set. We are experts in our domain, and we look for
            great problem solvers with passion and drive — the types of people
            we want to work with.
          </p>
          <p>
            Next to consultancy we provide permanent placement for our clients.
          </p>
          <p>
            At Frontend Guild, the developer comes first: we always think about
            the best work-life balance possible for our Frontend Developers.
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

<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <div class="header-container">
      <site-nav />
      <site-hero
        title="Get more from your career"
        subtitle="Do you want to join the guild? Check our open positions!"
      ></site-hero>
    </div>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h6>
            At Tech Guild we know that you do the best work when your're
            <span class="light-blue">happy</span>.
          </h6>
          <p>
            Why choose Tech Guild as your next employer? We are a young
            fast-growing company with an open culture where there is always room
            for initiatives and ideas.
          </p>
          <p>
            Our clients hire us because they want to achieve the best possible
            results, working at Tech Guild requires the same mindset. We don’t
            settle for mediocre and strive to be the best in our business.
          </p>

          <p>
            We pursue a ‘work hard, play hard’ culture and love to celebrate our
            successes. We have the passion and spirit of a startup, but the
            expertise of a mature firm, resulting in a team of motivated and
            passionate professionals who get the best out of themselves every
            day.
          </p>
          <p>
            We are always looking for motivated professionals who are a fit with
            our culture. We don’t hire engineers for specific projects, we hire
            because we want to work with the best of the best. In addition to
            being an expert in their field, we expect from our employees that
            they are excellent communicators who value a horizontal
            organisation.
          </p>
          <p>
            We continuously want to improve ourselves and by collaborating with
            a group of passionate engineers, this comes naturally. Since we’re
            grouped in guilds, you’ll have the chance to become an expert in
            your desired IT discipline.
          </p>
          <p>
            All our Techees receive an annual training budget that they can
            freely spend on seminars and courses, resulting in continuous
            growth.
          </p>
          <figure>
            <img src="/about-pic.jpg" alt="profile pic" />
          </figure>
        </div>
      </template>
    </main-section>
    <div class="container-wrapper">
      <main-section theme="sidebar-right">
        <template v-slot:default>
          <div class="content">
            <h6>Apply spontaneously<span class="light-blue">.</span></h6>
            <p>
              You haven’t found what you're looking for in the current
              vacancies? Take your shot anyway by applying spontaneously.
            </p>
            <button
              class="button btn-call-to-action"
              onclick="
          location.href = 'https://techguild.be/contact'
        "
            >
              Apply Now!
            </button>
          </div>
        </template>
      </main-section>
    </div>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h6>Open positions<span class="light-blue">.</span></h6>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `${this.$siteConfig.siteName} - Software Engineering Experts`
    }
  }
}
</script>
<style>
h6 {
  text-align: left;
  font-size: 2.4em !important;
}

.content figure {
  margin: 4rem 0 1rem 0 !important;
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

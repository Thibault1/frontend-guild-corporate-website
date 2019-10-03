<template>
  <div id="join-page" class="page-wrapper join-page content-page">
    <site-hero
      title="Join the Guild Today"
      subtitle="Discover your potential."
      image="/uploads/about-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Do you have what it takes to become a Frontend Guild member?</h3>
          <p>
            Are you ready to take your Frontend Development Career to the next
            level?
          </p>
          <p>
            Then look no further, we’re always looking for passionate JavaScript
            developers to join Frontend Guild.
          </p>
          <p>
            We will provide you with inside market information and connect you
            with the hottest JavaScript jobs.
          </p>
          <p>
            Let's meetup for a cup of coffee and have a talk about your career
            goals. If there’s a match with the standards & values of our Guild
            you could become our newest member.
          </p>
          <p><strong>Our Developers Enjoy:</strong></p>

          <ul>
            <li>A strong network of fellow (Senior) Frontend Developers.</li>
            <li>
              Monthly meetups with pizza, beers and hot JavaScript topics.
            </li>
            <li>
              The highest possible market rates.
            </li>
            <li>
              Being a part of the hottest JavaScript community from Belgium.
            </li>
          </ul>
          <p>
            <strong>Who we welcome to Frontend Guild?</strong>
          </p>
          <ul>
            <li>A student who’s looking for a first job.</li>
            <li>A freelancer who’s looking for a new adventure.</li>
            <li>
              An employee who’s ready to boost his/her career to the next level.
            </li>
          </ul>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Join the Guild | ${this.$siteConfig.siteName}`
    }
  }
}
</script>

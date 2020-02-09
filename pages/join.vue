<template>
  <div id="join-page" class="page-wrapper join-page content-page">
    <site-hero
      title="Join the Guild Today"
      subtitle="Discover your potential."
      image="/join-fg.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Do you have what it takes to become a Frontend Guild member?</h3>
          <p>
            Are you ready to take your Software Development Career to the next
            level?
          </p>
          <p>
            Then look no further, we’re always looking for passionate developers
            to join Frontend Guild.
          </p>
          <p>
            We will provide you with inside market information and connect you
            with the hottest Frontend, Full Stack and UI/UX jobs.
          </p>
          <p>
            Let's meetup for a cup of coffee and have a talk about your career
            goals. If there’s a match with the standards & values of our Guild
            you could become our newest member.
          </p>
          <p><strong>Our Developers Enjoy:</strong></p>

          <ul>
            <li>A strong network of fellow (Senior) Developers.</li>
            <li>
              Monthly meetups with pizza, beers and hot topics.
            </li>
            <li>
              The highest possible market rates.
            </li>
            <li>
              Being a part of the hottest IT community from Belgium.
            </li>
          </ul>
          <p>
            <strong>Who we welcome to Frontend Guild?</strong>
          </p>
          <ul>
            <li>UI / UX Experts</li>
            <li>
              Frontend Developers that have experience in at least one of the
              major Frontend Frameworks: (React, Angular or Vue)
            </li>
            <li>
              Full Stack Developers that love combining Frontend and Backend
              Technologies.
            </li>
            <li>
              Backend Developers: .NET, Java, Python, PHP, and Node.js
              Developers
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

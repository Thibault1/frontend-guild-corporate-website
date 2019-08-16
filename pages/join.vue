<template>
  <div id="join-page" class="page-wrapper join-page content-page">
    <site-hero
      title="Join the Guild Today"
      subtitle="Are you the new JavaScript wizard that we are searching for?"
      image="/uploads/about-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Do you have what it takes to become our new guild member.</h3>
          <p>
            Are you ready to take the next step in your Frontend Development
            Carreer, then you are lucky, because we are always searching for
            passionate JavaScript developers.
          </p>
          <p>
            Let's meetup for a cup of coffee and have a talk about your career
            goals. If we feel there is match, we organise a pair programming
            excersise with one of our Senior Developers to determine your skill
            level.
          </p>
          <p>
            If the above steps went well you can become a Frontend Guild member
            and start profiting from:
          </p>
          <ul>
            <li>A strong network from co frontend developers.</li>
            <li>
              Monthly meetups with pizza, beers and hot JavaScript topics.
            </li>
            <li>
              We make sure you get paid the highest possible market rates.
            </li>
            <li>
              Being a part of the hottest JavaScript community from Belgium.
            </li>
          </ul>
          <p>
            Freelancer, employee or still a student, we are there for
            <strong>every</strong> Frontend Developer.
          </p>
          <ul>
            <li>Are you a student that is searching your first job.</li>
            <li>A freelancer who is searching for a new adventure.</li>
            <li>
              An employee that is ready to take the next step in his or her
              career.
            </li>
          </ul>
          <p>
            Then you are at the good address because for every situation we can
            provide you with inside market information and determine your net
            worth.
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
      title: `Join the Guild | ${this.$siteConfig.siteName}`
    }
  }
}
</script>

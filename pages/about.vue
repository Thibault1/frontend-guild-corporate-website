<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <div class="header-container">
      <site-nav />
      <site-hero
        title="Passionate about delivering high quality software"
        subtitle="Our consultants are more than eager to assist you and your team with their technical expertise."
      ></site-hero>
    </div>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h6>About us<span class="light-blue">.</span></h6>
          <p>
            Founded by two brothers who want to stir up the IT consultancy
            market by using their experience and knowledge they gained in
            Belgium and abroad. We created a community of engineers who are
            dedicated to supporting our clients with their tech expertise.
          </p>
          <p>
            Our Techees can architecture and deliver enterprise-scale apps &
            services that answer today’s demanding expectations. We implement
            innovation through agile software development and thorough testing
            methods.
          </p>

          <p>
            Our clients are active in a wide array of industries such as
            banking, insurance, real estate, media, government, etc. No matter
            the industry, our consultants will assist in delivering top-notch
            software, develop innovative products, so our customers can achieve
            their digital objectives.
          </p>
          <p>
            We consistently aim for long term collaborations with our clients
            and define together a solid & future proof strategy.
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
            <h6>The Mission<span class="light-blue">.</span></h6>
            <ul>
              <li>
                Building and accelerating the digital business of our clients.
              </li>
              <li>
                Being a people-first organisation where life-work balance is of
                the utmost importance.
              </li>
              <li>
                Making a positive impact on our clients, our consultants and
                their loved ones.
              </li>
              <li>
                Offering engineers projects that live up to their ambitions &
                let them grow professionally.
              </li>
              <li>
                Identifying the ideal work-life balance for each of our
                engineers.
              </li>
              <li>
                Create a platform where Techees and clients can share knowledge
                and expertise.
              </li>
            </ul>
          </div>
        </template>
      </main-section>
    </div>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h6>The Culture<span class="light-blue">.</span></h6>
          <p>
            In this fast-paced digital world, the most valuable assets are
            people. Tech Guild is passionate about a culture that revolves
            around the people it works with by putting quality, flexibility and
            unconditional support first.
          </p>
          <p>
            Techees thrive and grow professionally by constantly challenging
            themselves through daring workshops, training programs and seminars.
            We love building great products and turning complex problems into
            the simplicity of beautiful solutions that solve the needs of our
            customers.
          </p>
          <p>
            Tech Guild’s vision is to be an inclusive community of motivated
            engineers where everyone can learn from each other and value
            different perspectives. Together with our Techees, we collaborate
            with our clients and create the applications and services they
            envision.
          </p>
          <p>
            We’re dedicated to continuous innovation by looking for the best
            skills, insights and tools our Techees and clients need to unlock
            their full potential.
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
</style>

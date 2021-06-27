<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <div class="header-container">
      <site-nav />
      <site-hero
        title="Contact Us"
        subtitle="Let's have a cup of coffee together."
      ></site-hero>
    </div>
    <main-section theme="one-column">
      <template v-slot:default>
        <div class="container-center">
          <div class="tile is-ancestor contact-form">
            <div class="tile is-parent techguild-contact">
              <article class="tile is-child">
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
                <div class="content content-office">
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
            <div class="tile is-parent is-8 map-parent">
              <article class="tile is-child">
                <GmapMap
                  id="techguild-map"
                  :center="{ lat: 51.0543, lng: 3.7174 }"
                  :zoom="12"
                  map-type-id="terrain"
                >
                  <GmapMarker :position="{ lat: 51.05628, lng: 3.7092 }" />
                </GmapMap>
              </article>
            </div>
          </div>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCyce9yXvy1ijWMwIJoCRYKTvZABkjaUWo'
  }
})
export default {
  head() {
    return {
      title: `${this.$siteConfig.siteName} - Software Engineering Experts`
    }
  }
}
</script>
<style>
#techguild-map {
  width: 100%;
  height: 630px;
}

.techguild-contact {
  background-color: #384e85;
  text-align: left;
  color: #ffffff !important;
  height: 630px;
}

.map-parent {
  padding: 0 !important;
}

.techguild-contact .title {
  color: #41b4e7 !important;
}

.techguild-contact .subtitle {
  color: #ffffff !important;
}

@media only screen and (max-width: 768px) {
  #techguild-map {
    height: 300px;
  }
}
.office-title {
  font-weight: bold;
  font-size: 0.95rem;
  text-transform: uppercase;
}
.contact-form {
  padding: 0 2rem;
}
.content-office {
  padding: 1rem 0 !important;
}
</style>

<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" image="/home-fg.jpg">
      <button
        class="button is-primary"
        onclick="
          window.open(
            'https://www.linkedin.com/company/frontendguild/',
            '_blank'
          )
        "
      >
        Follow us on LinkedIn
      </button>
    </site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <div class="container-center">
          <h6>Innovative Digital Applications & Services</h6>
          <p>
            Together with our clients we design, develop and architecture
            enterprise-scale apps & services that answer today’s demanding
            expectations.
          </p>
          <br />
          <p>
            Implementing innovation by agile software development, thorough
            testing methods (TDD, BDD, E2E Testing), and design patterns results
            in robust enterprise-scale applications.
          </p>
          <br />
          <p>
            We consistently aim for long term collaborations with our customers
            and define together a solid & future proof strategy.
          </p>
        </div>
        <div class="container-center margin-top">
          <h6>We love working with</h6>
          <div class="logo-container">
            <p>Frontend Technologies</p>
            <img src="/javascript.svg" alt="javascript logo" />
            <img src="/vue.svg" alt="vue logo" />
            <img src="/angular.svg" alt="angular logo" />
            <img src="/react.svg" alt="react logo" />
            <img src="/redux.svg" alt="redux logo" />
          </div>
          <div class="logo-container">
            <p>Backend Technologies</p>
            <img src="/python.svg" alt="python logo" />
            <img src="/php.svg" alt="php logo" />
            <img src="/java.svg" alt="java logo" />
            <img src="/c-sharp.svg" alt="c# logo" />
            <img src="/node.svg" alt="node logo" />
            <img src="/ruby-on-rails.svg" alt="ruby on rails logo" />
          </div>
          <div class="logo-container">
            <p>Cloud Technologies</p>
            <img src="/kubernetes.svg" alt="kubernetes logo" />
            <img src="/docker.svg" alt="docker logo" />
            <img src="/aws.svg" alt="aws logo" />
            <img src="/azure.svg" alt="azure logo" />
            <img src="/git.svg" alt="git logo" />
            <img src="/travis.svg" alt="travis logo" />
          </div>
          <div class="logo-container">
            <p>Mobile Technologies</p>
            <img src="/xamarin.svg" alt="xamarin logo" />
            <img src="/react-native.svg" alt="react native logo" />
            <img src="/ios.svg" alt="ios logo" />
            <img src="/android.svg" alt="android logo" />
          </div>
        </div>
        <div class="container-center margin-top">
          <h6>We love working for</h6>
          <div class="logo-container companies">
            <img src="/bedrijven/zimmo.png" alt="zimmo logo" />
            <img src="/bedrijven/mediahuis.jpg" alt="mediahuis logo" />
            <img src="/bedrijven/fortis.jpg" alt="fortis logo" />
            <img src="/bedrijven/vrt.png" alt="vrt logo" />
            <img src="/bedrijven/ag.jpg" alt="ag insurance logo" />
          </div>
          <br />
        </div>
        <!--<div class="container-center">
          <h6>We love our clients and they love us!</h6>
          <carousel :per-page="1" :mouse-drag="false">
            <slide>
              "Maxim was the perfect help to find my dream JavaScript job." -
              <strong>Kenny Debouvry</strong>, Program mangager @ Zimmo.
            </slide>
            <slide>
              "It was a pleaseure to work with Thibault he really knew what he
              was talking about. And provided me with a good world class
              frontend developer." - <strong>Xavier Vancompernolle</strong>, CTO
              @ Mediahuis.
            </slide>
            <slide>
              "It was a pleaseure to work with Thibault he really knew what he
              was talking about. And provided me with a good world class
              frontend developer. - Xavier Vancompernolle."
            </slide>
            <slide>
              "It was a pleaseure to work with Thibault he really knew what he
              was talking about. And provided me with a good world class
              frontend developer. - Xavier Vancompernolle."
            </slide>
          </carousel>
        </div>-->
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>

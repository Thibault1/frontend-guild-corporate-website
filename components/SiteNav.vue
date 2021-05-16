<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <site-logo v-if="$siteConfig.logo === 'logo-component'" />
        <img
          v-else
          :src="$siteConfig.logo"
          :alt="$siteConfig.siteName"
          class="logo"
        />
      </nuxt-link>
      <hamburger-button @click="active = !active" />
    </div>

    <div
      :class="{
        'navbar-menu': true,
        'is-active': active
      }"
    >
      <ul class="navbar-end">
        <li class="navbar-item">
          <a href="/">
            Home
          </a>
        </li>
        <li class="navbar-item">
          <a href="/hiring">
            Hiring
          </a>
        </li>
        <li class="navbar-item has-dropdown is-hoverable">
          <a>
            Stories
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              Client stories
            </a>
            <a class="navbar-item">
              Tech stories
            </a>
          </div>
        </li>
        <li class="navbar-item">
          <a href="/about">
            About
          </a>
        </li>
        <li class="navbar-item">
          <a href="/news">
            News
          </a>
        </li>
        <li class="navbar-item">
          <a href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import HamburgerButton from '~/components/HamburgerButton'
export default {
  name: 'SiteNav',
  components: { HamburgerButton },
  data() {
    return {
      active: false
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar-item img {
  max-height: 2rem;
}
.site-search-wrapper {
  transform: translateX(5px);
  @media (max-width: 1023px) {
    display: none;
  }
}
.navbar-burger {
  height: auto;
}

.navbar-menu a {
  display: block;
}
</style>

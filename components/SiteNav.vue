<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
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
            Careers
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

.navbar {
  background: none;
  border: none !important;
  padding-right: 1.5rem !important;
}

.navbar-burger {
  height: auto;
}

.navbar-end li a {
  color: #ffffff;
}

.navbar-menu a {
  display: block;
}
.navbar-dropdown a.navbar-item {
  border: none;
}
.navbar-dropdown a.navbar-item:hover {
  background-color: #384e85;
  color: #41b4e7;
}
.navbar-dropdown {
  background-color: #fff;
  color: #384e85;
  border-radius: 6px;
  border-top-color: #384e85;
  box-shadow: none;
}

.navbar-dropdown a {
  color: #384e85 !important;
}

.navbar-dropdown a:hover {
  color: #ffffff !important;
}

.navbar-item.has-dropdown {
  display: block !important;
  line-height: 1.5 !important;
  padding: 1.5rem 0.75rem 0.75rem 0.75rem !important;
}

@media only screen and (max-width: 768px) {
  .navbar-item.has-dropdown {
    padding: 0.5rem 0.75rem 0.75rem 0.75rem !important;
  }
}
</style>

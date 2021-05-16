<template>
  <div class="logo-wrapper">
    <img src="/tech-guild-logo.png" />
  </div>
</template>
<script>
export default {
  name: 'SiteLogo',
  data() {
    return {
      frames: 5,
      currentFrame: 1,
      blinking: true
    }
  },
  mounted() {
    setInterval(() => {
      const rand = Math.ceil(Math.random() * 10)
      this.blinking = rand % 2
    }, 1000)
  }
}
</script>
<style lang="scss">
.logo-wrapper {
  position: relative;
  overflow: hidden;
  img {
    display: block;

    max-height: initial;
  }
}
</style>

<template>
  <div class="logo-wrapper">
    <img src="/Frontend-Guild-Logo-Horizontal.png" />
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
  height: 80px;
  overflow: hidden;
  width: 200px;
  img {
    display: block;
    height: 90px;
    max-height: initial;
  }
}
</style>

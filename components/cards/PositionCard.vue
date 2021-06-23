<template>
  <div class="position">
    <nuxt-link :to="link">
      <div class="position-content">
        <span class="location"> {{ location }}</span>
        <h1>
          {{ title }}
        </h1>
        <p>
          {{ summary }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    summary: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    location: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.position-content {
  text-align: left;
  height: 340px;
  background-color: #384e85;
  padding: 1em;
  color: #ffffff;
}
.position-content:hover {
  background-color: #2ecb6e;
}
.location {
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
}
.position-content h1 {
  font-size: 1.5em;
  margin-top: 0.2em;
  margin-bottom: 0.6em;
  color: #ffffff;
}

p {
  font-size: 0.9rem;
  line-height: 1.8rem;
}
</style>

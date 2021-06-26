<template>
  <div class="card">
    <div class="card-image">
      <nuxt-link :to="link">
        <figure :class="`image is-${imageRatioClass}`">
          <opti-image
            v-if="image"
            :src="responsiveImage.src"
            :srcset="responsiveImage.srcSet"
            :width="imageRatio[0]"
            :height="imageRatio[1]"
            :sizes="`(min-width: 768px) ${100 / $siteConfig.posts.perRow}vw`"
          />
          <loading-spinner position="absolute" />
        </figure>
      </nuxt-link>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <nuxt-link :to="link">
            <span class="post-date">
              <slot></slot>
            </span>
            <h1
              :class="
                `title
                is-5
                has-text-weight-light
                ${title ? '' : 'empty-content-placeholder'}`
              "
            >
              {{ title }}
            </h1>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const imageDimensionDefault = '16x9'
export default {
  props: {
    title: { type: String, default: '' },
    image: { type: String, default: '' },
    link: { type: String, default: '' },
    imageDimensions: { type: String, default: imageDimensionDefault }
  },
  computed: {
    imageRatioClass() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions.toLowerCase().replace('x', 'by')
    },
    imageRatio() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions
        .toLowerCase()
        .split('x')
        .map((size) => {
          return size * 2000
        })
    },
    responsiveImage() {
      if (this.image.indexOf('/uploads') === 0) {
        return require(`~/assets${this.image}`)
      }
      return { src: this.image, srcSet: '' }
    }
  }
}
</script>
<style scoped lang="scss">
.subtitle {
  font-size: 0.75rem;
  font-weight: bold;
}
.media-content h1 {
  font-size: 1.2em;
  font-weight: bold !important;
  margin-top: 0.2em;
  margin-bottom: 0.6em;
  color: #ffffff;
}
.card-content {
  background-color: #384e85;
}
.post-date {
  color: #ffffff;
  font-size: 0.8rem;
  text-transform: uppercase;
}

.empty-content-placeholder {
  background: transparent;
  color: transparent;
  position: relative;
  height: 1em;
  &:before {
    transform-origin: left;
    content: '';
    background: #eee;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    animation: fillHorizontal 2s linear infinite;
  }
  &.subtitle {
    width: 70%;
  }
}
</style>
<style lang="scss">
.opti-image-loaded + .spinner-wrapper {
  display: none;
}
.card img {
  transition: 0.8s ease-in-out all;
  &:hover {
    transform: scale(1.02);
  }
}
</style>

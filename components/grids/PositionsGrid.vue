<template>
  <resource-grid v-bind="$props" :resource="$cms.position">
    <template v-slot:default="{ item }">
      <position-card
        :title="item.title"
        :link="`positions/${item.slug}`"
        :summary="item.summary"
        :location="item.location"
        :type="item.type"
      />
    </template>
  </resource-grid>
</template>

<script>
import PositionCard from '~/components/cards/PositionCard'
export default {
  name: 'PositionsGrid',
  components: { PositionCard },
  props: {
    perRow: { type: Number, default: 3 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    category: {
      type: Array,
      default() {
        return []
      }
    },
    exclude: { type: String, default: '' }
  }
}
</script>

import { getMixins } from './mixins'

class Position {
  constructor(axios) {
    this.slug = 'position'
    this.slugPlural = 'positions'
    this.pretty = 'Position'
    this.plural = 'Positions'
    this.axios = axios
    this.editUrl = '/admin/#/collections/positions/entries'
  }
  getEditUrl(slug) {
    return `${this.editUrl}/${slug}`
  }
}

// Mixins
Object.assign(Position.prototype, getMixins)

export default Position

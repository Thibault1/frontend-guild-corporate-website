import generatePostApi from '../build/generate-post-api'
import generatePositionApi from '../build/generate-position-api'
import generateCategoryApi from '../build/generate-category-api'

export default () => {
  generatePostApi()
  generatePositionApi()
  generateCategoryApi()
}

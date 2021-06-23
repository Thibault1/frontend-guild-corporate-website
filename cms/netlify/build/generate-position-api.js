import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generatePositionApi = () => {
  const contentDir = `${rootDir}/content/positions`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/positions.json`
  const metaFile = `${apiDir}/positions-meta.json`
  const pages = siteConfig.posts.perPage
  const doneMessage = `{totalNumber} positions generated in positions API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/positions`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generatePositionApi

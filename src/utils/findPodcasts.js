import { findElementsBySubString } from './findElementsBySubString'

export const findPodcasts = (podcastList, value) => {
  const nameWithValue = findElementsBySubString(podcastList, 'name', value)
  const authorWithValue = findElementsBySubString(podcastList, 'author', value)
  const combinedResult = [...nameWithValue, ...authorWithValue]
  const result = combinedResult.filter((item, index) => combinedResult.indexOf(item) === index)

  return result
}

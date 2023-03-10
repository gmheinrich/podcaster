import { get } from 'lodash'

export const formatTopPodcastList = (topPodcastList) => {
  console.log('topPodcastList', topPodcastList)

  return topPodcastList.map((element) => ({
    imageSrc: get(element, 'im:image[2].label', ''),
    name: get(element, 'im:name.label', ''),
    author: get(element, 'im:artist.label', ''),
    podcastId: get(element, 'id.attributes.im:id', ''),
  }))
}

import { get } from 'lodash'

export const formatTopPodcastList = (topPodcastList) =>
  topPodcastList.map((element) => ({
    imageSrc: get(element, 'im:image[2].label', ''),
    name: get(element, 'im:name.label', ''),
    author: get(element, 'im:artist.label', ''),
    podcastId: get(element, 'id.attributes.im:id', ''),
  }))

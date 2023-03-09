import axios from 'axios'
import { useEffect, useState } from 'react'
import { routes } from '../constants/routes'
import { checkMoreOneDay } from '../utils/checkMoreOneDay'

export const useGetTopPodcast = () => {
  const [topPodcastList, setTopPodcastList] = useState([])

  const getDataFromOrigin = () => {
    axios
      .get(routes.topPodcasts)
      .then((res) => {
        const data = res.data.feed.entry ? res.data.feed.entry : []
        setTopPodcastList(data)
        const podcasterTopList = {
          timestamp: Date.now(),
          data,
        }
        localStorage.setItem('podcasterTopList', JSON.stringify(podcasterTopList))
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    if (topPodcastList.length === 0) {
      const podcasterTopList = localStorage.getItem('podcasterTopList')

      if (podcasterTopList) {
        const objectTopList = JSON.parse(podcasterTopList)
        const timestamp = objectTopList.timestamp ? objectTopList.timestamp : null
        const data = objectTopList.data ? objectTopList.data : null

        if (checkMoreOneDay(timestamp)) {
          getDataFromOrigin()
        } else {
          setTopPodcastList(data)
        }
      }
    }
  }, [])

  return topPodcastList
}

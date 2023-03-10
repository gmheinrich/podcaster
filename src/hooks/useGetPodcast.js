import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import GlobalDataContext from '../components/GlobalDataContext'
import { routes } from '../constants/routes'
import { checkMoreOneDay } from '../utils/checkMoreOneDay'
import { getDescription } from '../utils/getDescription'

const isEmpty = (obj) => Object.keys(obj).length === 0

export const useGetPodcast = (podcastId) => {
  const { setLoading } = useContext(GlobalDataContext)
  const [podcast, setPodcast] = useState({})
  const [summary, setSummary] = useState({})
  const [collection, setCollection] = useState([])
  const [description, setDescription] = useState('')
  const [generateObject, setGenerateObject] = useState()

  const getPodcastDescriptionFromOrigin = (firstElement) => {
    if (firstElement.feedUrl) {
      axios
        .get(firstElement.feedUrl)
        .then((res) => {
          setDescription(getDescription(res.data))
          setLoading(false)
        })
        .catch((error) => console.log(error))
    }
  }

  const getPodcastDataFromOrigin = (podcastId) => {
    setLoading(true)

    const url = `${routes.prefixURL}${routes.podcastEpisodes.replace('{podcastId}', podcastId)}`
    // const url = routes.podcastEpisodes.replace('{podcastId}', podcastId)
    axios
      .get(url)
      .then((res) => {
        const results = res.data.results
        const firstElement = results.shift()
        setSummary(firstElement)
        setCollection(results)
        getPodcastDescriptionFromOrigin(firstElement)
      })
      .catch((error) => console.log(error))
  }

  const savePodcastInCache = (podcastObject) => localStorage.setItem(`podcaster${podcastId}`, JSON.stringify(podcastObject))

  useEffect(() => {
    if (isEmpty(podcast)) {
      const storedData = localStorage.getItem(`podcaster${podcastId}`)

      if (storedData) {
        const parsedData = JSON.parse(storedData)
        const timestamp = parsedData.timestamp ? parsedData.timestamp : null

        if (checkMoreOneDay(timestamp)) {
          getPodcastDataFromOrigin(podcastId)
          setGenerateObject(true)
        } else {
          setPodcast(parsedData)
        }
      } else {
        getPodcastDataFromOrigin(podcastId)
        setGenerateObject(true)
      }
    }
  }, [])

  useEffect(() => {
    if (summary && collection && description && generateObject) {
      const podcast = {
        podcastId,
        timestamp: Date.now(),
        summary,
        collection,
        description,
      }
      setPodcast(podcast)
      savePodcastInCache(podcast)
      setGenerateObject(false)
    }
  }, [summary, collection, description, generateObject])

  return podcast
}

import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { CardPodcastFull } from '../components/commons/CardPodcastFull'
import GlobalDataContext from '../components/GlobalDataContext'
import { Layout } from '../components/sections/Layout'
import { TableEpisodes } from '../components/sections/Podcast/TableEpisodes'
import { TableResume } from '../components/sections/Podcast/TableResume'
import { routes } from '../constants/routes'
import { getDescription } from '../utils/getDescription'

export const Podcast = () => {
  const { setLoading } = useContext(GlobalDataContext)
  const { podcastId } = useParams()
  const [summary, setSummary] = useState({})
  const [collection, setCollection] = useState([])
  const [description, setDescription] = useState()

  // const url = `${routes.prefixURL}${routes.podcastEpisodes.replace('{podcastId}', podcastId)}`
  const url = routes.podcastEpisodes.replace('{podcastId}', podcastId)

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((res) => {
        const results = res.data.results
        setSummary(results.shift())
        setCollection(results)
      })
      .catch((error) => console.log(error))
  }, [axios])

  useEffect(() => {
    if (summary.feedUrl) {
      axios
        .get(summary.feedUrl)
        .then((res) => {
          setDescription(getDescription(res.data))
          setLoading(false)
        })
        .catch((error) => console.log(error))
    }
  })

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <CardPodcastFull title={summary.collectionName} artist={summary.artistName} image={summary.artworkUrl600} description={description} />
          </Col>
          <Col lg={8}>
            <TableResume total={summary.trackCount} />
            <TableEpisodes collection={collection} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

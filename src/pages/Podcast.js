import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { CardPodcastFull } from '../components/commons/CardPodcastFull'
import { Layout } from '../components/sections/Layout'
import { TableEpisodes } from '../components/sections/Podcast/TableEpisodes'
import { TableResume } from '../components/sections/Podcast/TableResume'
import { routes } from '../constants/routes'

export const Podcast = () => {
  const { podcastId } = useParams()
  const [summary, setSummary] = useState({})
  const [collection, setCollection] = useState([])

  const url = `${routes.prefixURL}${routes.podcastEpisodes.replace('{podcastId}', podcastId)}`

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const results = res.data.results
        setSummary(results.shift())
        setCollection(results)
      })
      .catch((error) => console.log(error))
  }, [axios])

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <CardPodcastFull summary={summary} />
          </Col>
          <Col>
            <TableResume total={summary.trackCount} />
            <TableEpisodes collection={collection} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

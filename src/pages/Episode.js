import React from 'react'
import { useLocation } from 'react-router'
import { Col, Container, Row } from 'reactstrap'
import { CardPodcastFull } from '../components/commons/CardPodcastFull'
import { CardEpisode } from '../components/sections/Episode/CardEpisode'
import { Layout } from '../components/sections/Layout'

export const Episode = () => {
  const location = useLocation()
  const { trackName, episodeUrl, description } = location.state

  const summary = {}

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <CardPodcastFull summary={summary} />
          </Col>
          <Col lg={8}>
            <CardEpisode title={trackName} description={description} source={episodeUrl} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

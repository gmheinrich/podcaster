import React from 'react'
import { useLocation } from 'react-router'
import { Col, Container, Row } from 'reactstrap'
import { CardPodcastFull } from '../components/commons/CardPodcastFull'
import { CardEpisode } from '../components/sections/Episode/CardEpisode'
import { Layout } from '../components/sections/Layout'

export const Episode = () => {
  const location = useLocation()
  const { propsToCardPodcastFull, episode } = location.state
  const { trackName, episodeUrl, description } = episode

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <CardPodcastFull {...propsToCardPodcastFull} />
          </Col>
          <Col lg={8}>
            <CardEpisode title={trackName} description={description} source={episodeUrl} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

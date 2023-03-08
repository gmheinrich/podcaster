import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { CardPodcastFull } from '../components/commons/CardPodcastFull'
import { CardEpisode } from '../components/sections/Episode/CardEpisode'
import { Layout } from '../components/sections/Layout'

export const Episode = () => (
  <Layout>
    <Container>
      <Row>
        <Col>
          <CardPodcastFull />
        </Col>
        <Col>
          <CardEpisode />
        </Col>
      </Row>
    </Container>
  </Layout>
)

import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { CardPodcastFull } from '../components/commons/CardPodcastFull'
import { Layout } from '../components/sections/Layout'
import { TableEpisodes } from '../components/sections/Podcast/TableEpisodes'
import { TableResume } from '../components/sections/Podcast/TableResume'

export const Podcast = () => (
  <Layout>
    <Container>
      <Row>
        <Col>
          <CardPodcastFull />
        </Col>
        <Col>
          <TableResume />
          <TableEpisodes />
        </Col>
      </Row>
    </Container>
  </Layout>
)

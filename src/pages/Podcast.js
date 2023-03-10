import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { CardPodcastFull } from '../components/commons/CardPodcastFull'
import { TableEpisodes } from '../components/sections/Podcast/TableEpisodes'
import { TableResume } from '../components/sections/Podcast/TableResume'
import { useGetPodcast } from '../hooks/useGetPodcast'

export const Podcast = () => {
  const { podcastId } = useParams()
  const [propsToCardPodcastFull, setPropsToCardPodcastFull] = useState()
  const { summary, collection, description } = useGetPodcast(podcastId)

  useEffect(() => {
    if (summary && description) {
      setPropsToCardPodcastFull({
        podcastId,
        title: summary?.collectionName,
        artist: summary?.artistName,
        image: summary?.artworkUrl600,
        description: description,
      })
    }
  }, [summary, description])

  return (
    <>
      <Container>
        <Row>
          <Col>{propsToCardPodcastFull ? <CardPodcastFull {...propsToCardPodcastFull} /> : null}</Col>
          <Col lg={8}>
            {summary ? <TableResume total={summary.trackCount} /> : null}
            {collection && propsToCardPodcastFull ? <TableEpisodes collection={collection} propsToCardPodcastFull={propsToCardPodcastFull} /> : null}
          </Col>
        </Row>
      </Container>
    </>
  )
}

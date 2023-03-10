/* eslint-disable react/jsx-key */
import { uniqueId } from 'lodash'
import React, { useCallback, useMemo, useState } from 'react'
import { Badge, Col, Container, Input, Row } from 'reactstrap'
import { CardPodcast } from '../components/sections/Home/CardPodcast'
import { useGetTopPodcast } from '../hooks/useGetTopPodcast'
import { findPodcasts } from '../utils/findPodcasts'
import { formatTopPodcastList } from '../utils/formatTopPodcastList'

export const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const topPodcastList = useGetTopPodcast()

  const fullPodcastList = useMemo(() => formatTopPodcastList(topPodcastList), [topPodcastList])

  const onChangeInput = useCallback(
    (event) => {
      setInputValue(event.target.value)
    },
    [setInputValue]
  )

  const podcastList = findPodcasts(fullPodcastList, inputValue)
  const lengthTopPodcastList = podcastList.length

  return (
    <Container>
      <Row md={3} className='justify-content-end' style={{ paddingBottom: '2.5rem' }}>
        <Col style={{ textAlign: 'right', alignSelf: 'center' }}>
          <h4>
            <Badge pill color='primary'>
              {lengthTopPodcastList}
            </Badge>
          </h4>
        </Col>
        <Col>
          <Input type='text' value={inputValue} onChange={onChangeInput} placeholder='Filter podcasts...' />
        </Col>
      </Row>
      <Row className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 row-cols-full-5 g-5'>
        {podcastList ? podcastList.map((item) => <CardPodcast key={uniqueId('podcast_')} podcast={item} />) : null}
      </Row>
    </Container>
  )
}

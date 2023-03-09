/* eslint-disable react/prop-types */
import { Markup } from 'interweave'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'
import { routes } from '../../constants/routes'

export const CardPodcastFull = ({ podcastId, image, title, artist, description }) => {
  const navigate = useNavigate()

  const goToPodcast = useCallback(() => {
    navigate(routes.podcast.replace(':podcastId', podcastId))
  }, [navigate, podcastId])

  return (
    <Card className='shadow p-3 mb-5 bg-white' style={{ width: '18rem' }}>
      {image ? <img alt='Card' src={image} style={{ cursor: 'pointer' }} onClick={goToPodcast} /> : null}
      <ListGroup flush>
        <ListGroupItem />
        <ListGroupItem>
          <CardBody style={{ justifyContent: 'start', padding: 0 }}>
            <CardTitle tag='h6'>
              <b style={{ cursor: 'pointer' }} onClick={goToPodcast}>
                {title ? title : null}
              </b>
            </CardTitle>
            <CardText>
              <i style={{ cursor: 'pointer' }} onClick={goToPodcast}>
                {artist ? `by ${artist}` : null}
              </i>
            </CardText>
          </CardBody>
        </ListGroupItem>
        <ListGroupItem>
          <CardTitle tag='h6'>Description:</CardTitle>
          <CardText>
            <i>{description ? <Markup content={description} tagName='atom:link' /> : null}</i>
          </CardText>
        </ListGroupItem>
      </ListGroup>
    </Card>
  )
}

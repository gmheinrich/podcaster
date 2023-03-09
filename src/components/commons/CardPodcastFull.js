/* eslint-disable react/prop-types */
import { Markup } from 'interweave'
import React from 'react'
import { Card, CardBody, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'

export const CardPodcastFull = ({ image, title, artist, description }) => {
  return (
    <Card className='shadow p-3 mb-5 bg-white' style={{ width: '18rem' }}>
      <img alt='Card' src={image} />
      <ListGroup flush>
        <ListGroupItem />
        <ListGroupItem>
          <CardBody style={{ justifyContent: 'start', padding: 0 }}>
            <CardTitle tag='h6'>
              <b>{title}</b>
            </CardTitle>
            <CardText>
              <i>{`by ${artist}`}</i>
            </CardText>
          </CardBody>
        </ListGroupItem>
        <ListGroupItem>
          <CardTitle tag='h6'>Description:</CardTitle>
          <CardText>
            <i>
              <Markup content={description} tagName='atom:link' />
            </i>
          </CardText>
        </ListGroupItem>
      </ListGroup>
    </Card>
  )
}

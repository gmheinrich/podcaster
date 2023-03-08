import React from 'react'
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'

export const CardPodcastFull = () => {
  return (
    <Card className='shadow p-3 mb-5 bg-white' style={{ width: '18rem' }}>
      <img alt='Card' src='https://picsum.photos/300/200' />
      <ListGroup flush>
        <ListGroupItem />
        <ListGroupItem>
          <CardBody style={{ justifyContent: 'start', padding: 0 }}>
            <CardTitle tag='h5'>Song Exploder</CardTitle>
            <CardText>
              <i>by Song Exploder</i>
            </CardText>
          </CardBody>
        </ListGroupItem>
        <ListGroupItem>
          <CardTitle tag='h6'>Description:</CardTitle>
          <CardText>
            <i>
              A podcast where musicians take apart their songs, and piece by
              piece, tell the story of how ther were made.
            </i>
          </CardText>
        </ListGroupItem>
      </ListGroup>
    </Card>
  )
}

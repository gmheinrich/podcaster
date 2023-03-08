/* eslint-disable react/prop-types */
import { Interweave } from 'interweave'
import { HashtagMatcher, UrlMatcher } from 'interweave-autolink'
import React from 'react'
import { Card, CardBody, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'
import { AudioPlayer } from '../../commons/AudioPlayer'

export const CardEpisode = ({ title, description, source }) => {
  return (
    <Card className='shadow p-3 mb-5 bg-white' style={{ width: '800px' }}>
      <ListGroup flush>
        <ListGroupItem>
          <CardBody style={{ justifyContent: 'start', padding: 0 }}>
            <CardTitle tag='h5'>{title}</CardTitle>
            <CardText>
              <i>
                <Interweave content={description} matchers={[new UrlMatcher('url'), new HashtagMatcher('hashtag')]} />
              </i>
            </CardText>
          </CardBody>
        </ListGroupItem>
        <ListGroupItem>
          <AudioPlayer source={source} />
        </ListGroupItem>
      </ListGroup>
    </Card>
  )
}

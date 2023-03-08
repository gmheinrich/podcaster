import React from 'react'
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'
import { AudioPlayer } from '../../commons/AudioPlayer'

export const CardEpisode = () => {
  return (
    <Card className='shadow p-3 mb-5 bg-white' style={{ width: '800px' }}>
      <ListGroup flush>
        <ListGroupItem>
          <CardBody style={{ justifyContent: 'start', padding: 0 }}>
            <CardTitle tag='h5'>Wilco - Magnetized</CardTitle>
            <CardText>
              <i>
                Wilco formed in 1994, and 21 years later, they released their
                9th album, Star Wars. In this episode, Jeff Tweddy, the band`s
                singer and principal songwriter, breaks down the song
                Magnetized. In addition to collaborating with his five
                bandmates, John Stirit, Pat Sansone, Mike Jorgesen, Nels Cline,
                and Glen Kotche, it turns out Jeff Tweddy make an active effort
                to remove his own ego from the process of songwriting.
              </i>
            </CardText>
            <CardText>
              <i>
                This episode is sponsored by Vinyl Me Please, Turntable Lab, and
                lynda.com.
              </i>
            </CardText>
          </CardBody>
        </ListGroupItem>
        <ListGroupItem>
          <AudioPlayer source='http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3' />
        </ListGroupItem>
      </ListGroup>
    </Card>
  )
}

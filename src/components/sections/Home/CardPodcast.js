/* eslint-disable react/prop-types */
import { get } from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'

export const CardPodcast = ({ podcast }) => {
  const imageSrc = get(podcast, 'im:image[2].label', '')
  const name = get(podcast, 'im:name.label', '')
  const author = get(podcast, 'im:artist.label', '')
  const podcastId = get(podcast, 'id.attributes.im:id', '')

  return (
    <Card
      body
      className='text-center shadow p-3 mb-5 bg-white rounded'
      style={{ width: '18rem' }}
    >
      <img alt='image' src={imageSrc} />
      <CardBody>
        <CardTitle tag='h5'>
          <Link
            to={`/podcast/${podcastId}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            {name}
          </Link>
        </CardTitle>
        <CardSubtitle className='mb-2 text-muted' tag='h6'>
          {`Author: ${author}`}
        </CardSubtitle>
      </CardBody>
    </Card>
  )
}

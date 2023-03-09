/* eslint-disable react/prop-types */
import { get } from 'lodash'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { routes } from '../../../constants/routes'

export const CardPodcast = ({ podcast }) => {
  const navigate = useNavigate()

  const imageSrc = get(podcast, 'im:image[2].label', '')
  const name = get(podcast, 'im:name.label', '')
  const author = get(podcast, 'im:artist.label', '')
  const podcastId = get(podcast, 'id.attributes.im:id', '')

  const goToPodcast = useCallback(() => {
    navigate(routes.podcast.replace(':podcastId', podcastId))
  }, [navigate, podcastId])

  return (
    <div className='col'>
      <Card body className='text-center shadow p-3 mb-5 bg-white rounded' style={{ width: '18rem' }}>
        <img alt='image' src={imageSrc} />
        <CardBody>
          <CardTitle tag='h5'>
            <div style={{ cursor: 'pointer' }} onClick={goToPodcast}>
              {name}
            </div>
          </CardTitle>
          <CardSubtitle className='mb-2 text-muted' tag='h6'>
            {`Author: ${author}`}
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )
}

/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { routes } from '../../../constants/routes'
import { ImageCard } from '../../commons/ImageCard'

export const CardPodcast = ({ podcast }) => {
  const navigate = useNavigate()
  const { imageSrc, name, author, podcastId } = podcast

  const goToPodcast = useCallback(() => {
    navigate(routes.podcast.replace(':podcastId', podcastId))
  }, [navigate, podcastId])

  return (
    <div className='col'>
      <Card body className='text-center shadow p-3 mb-5 bg-white' style={{ width: '18rem', borderRadius: 0, borderColor: 'transparent' }}>
        <ImageCard image={imageSrc} rounded />
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

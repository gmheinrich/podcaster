/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import styled from 'styled-components'
import { routes } from '../../../constants/routes'
import { ImageCard } from '../../commons/ImageCard'

const StyleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 450px;
  z-index: 8;
`

const StyleCardBody = styled.div`
  position: absolute;
  margin-top: 100px;
`

export const CardPodcast = ({ podcast }) => {
  const navigate = useNavigate()
  const { imageSrc, name, author, podcastId } = podcast

  const goToPodcast = useCallback(() => {
    navigate(routes.podcast.replace(':podcastId', podcastId))
  }, [navigate, podcastId])

  return (
    <div className='col'>
      <StyleCardContainer>
        <ImageCard image={imageSrc} rounded />
        <StyleCardBody>
          <Card body className='text-center shadow p-3 mb-5 bg-white' style={{ width: '18rem', borderRadius: 0, borderColor: 'transparent' }}>
            <CardBody>
              <CardTitle tag='h5' style={{ paddingTop: '90px' }}>
                <div style={{ cursor: 'pointer' }} onClick={goToPodcast}>
                  {name}
                </div>
              </CardTitle>
              <CardSubtitle className='mb-2 text-muted' tag='h6'>
                {`Author: ${author}`}
              </CardSubtitle>
            </CardBody>
          </Card>
        </StyleCardBody>
      </StyleCardContainer>
    </div>
  )
}

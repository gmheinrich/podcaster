import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'

export const CardPodcast = () => {
  return (
    <Card
      body
      className='text-center shadow p-3 mb-5 bg-white rounded'
      style={{ width: '18rem' }}
    >
      <img alt='Sample' src='https://picsum.photos/300/200' />
      <CardBody>
        <CardTitle tag='h5'>
          <Link
            to={'podcast'}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            ALL SONG CONSIDERED
          </Link>
        </CardTitle>
        <CardSubtitle className='mb-2 text-muted' tag='h6'>
          Author: NPR
        </CardSubtitle>
      </CardBody>
    </Card>
  )
}

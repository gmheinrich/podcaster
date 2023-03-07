/* eslint-disable react/jsx-key */
import React from 'react'
import { CardPodcast } from '../components/sections/Home/CardPodcast'
import { SearchContainer } from '../components/sections/Home/SearchContainer'
import { Layout } from '../components/sections/Layout'

export const Home = () => {
  const dummyListCard = Array(10).fill(0)

  return (
    <Layout>
      <SearchContainer />
      <div className='container-fluid'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 row-cols-full-5 g-5'>
          {dummyListCard.map(() => (
            <div className='col'>
              <CardPodcast />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

/* eslint-disable react/jsx-key */
import { uniqueId } from 'lodash'
import React from 'react'
import { CardPodcast } from '../components/sections/Home/CardPodcast'
import { SearchContainer } from '../components/sections/Home/SearchContainer'
import { Layout } from '../components/sections/Layout'
import { useGetTopPodcast } from '../hooks/useGetTopPodcast'

export const Home = () => {
  const topPodcastList = useGetTopPodcast()

  return (
    <Layout>
      <SearchContainer />
      <div className='container-fluid'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 row-cols-full-5 g-5'>
          {topPodcastList ? topPodcastList.map((item) => <CardPodcast key={uniqueId('podcast_')} podcast={item} />) : null}
        </div>
      </div>
    </Layout>
  )
}

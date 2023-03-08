/* eslint-disable react/jsx-key */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CardPodcast } from '../components/sections/Home/CardPodcast'
import { SearchContainer } from '../components/sections/Home/SearchContainer'
import { Layout } from '../components/sections/Layout'
import { routes } from '../constants/routes'

export const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(routes.topPodcasts)
      .then((response) => setData(response.data.feed.entry))
      .catch((error) => console.log(error))
  }, [axios])

  return (
    <Layout>
      <SearchContainer />
      <div className='container-fluid'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 row-cols-full-5 g-5'>
          {data.map((item) => (
            <div className='col'>
              <CardPodcast podcast={item} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/sections/Layout'
import { routes } from './constants/routes'
import { Episode } from './pages/Episode'
import { Home } from './pages/Home'
import { Podcast } from './pages/Podcast'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.podcast} element={<Podcast />} />
        <Route path={routes.episode} element={<Episode />} />
      </Routes>
    </Layout>
  )
}

export default App

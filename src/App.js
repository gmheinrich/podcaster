import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Episode } from './pages/Episode'
import { Home } from './pages/Home'
import { Podcast } from './pages/Podcast'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/podcast/:podcastId' element={<Podcast />} />
        <Route path='/podcast/:podcastId/episode/:episodeId' element={<Episode />} />
      </Routes>
    </div>
  )
}

export default App

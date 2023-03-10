/* eslint-disable react/prop-types */
import React from 'react'

export const AudioPlayer = ({ source }) => {
  return (
    <audio id='player' controls controlsList='nodownload noplaybackrate' style={{ width: '100%' }}>
      <source src={source} />
    </audio>
  )
}

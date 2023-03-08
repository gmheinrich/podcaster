/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'

export const TableEpisodes = ({ collection }) => {
  console.log('collection', collection)

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {collection.map((episode) => (
          <tr>
            <td>
              <Link to={`/podcast/${episode.collectionId}/episode/${episode.trackId}`} state={episode}>{`${episode.trackName}`}</Link>
            </td>
            <td>{`${episode.releaseDate}`}</td>
            <td>{`${episode.trackTimeMillis}`}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

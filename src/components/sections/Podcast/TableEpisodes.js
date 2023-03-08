/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import { Table } from 'reactstrap'

export const TableEpisodes = ({ collection }) => {
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
            <td>{`${episode.trackName}`}</td>
            <td>{`${episode.releaseDate}`}</td>
            <td>{`${episode.trackTimeMillis}`}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

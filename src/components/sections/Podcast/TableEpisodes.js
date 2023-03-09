/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import { getDate } from '../../../utils/getDate'
import { getDuration } from '../../../utils/getDuration'
import { StyledContainer } from '../../commons/StyledContainer'

export const TableEpisodes = ({ collection, propsToCardPodcastFull }) => {
  return (
    <StyledContainer>
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
                <Link to={`/podcast/${episode.collectionId}/episode/${episode.trackId}`} state={{ episode, propsToCardPodcastFull }}>
                  {`${episode.trackName}`}
                </Link>
              </td>
              <td>{getDate(episode.releaseDate)}</td>
              <td>{getDuration(episode.trackTimeMillis)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </StyledContainer>
  )
}

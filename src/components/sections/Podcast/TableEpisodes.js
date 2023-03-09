/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'reactstrap'
import { routes } from '../../../constants/routes'
import { getDate } from '../../../utils/getDate'
import { getDuration } from '../../../utils/getDuration'
import { StyledContainer } from '../../commons/StyledContainer'

export const TableEpisodes = ({ collection, propsToCardPodcastFull }) => {
  const navigate = useNavigate()

  const goToPodcast = useCallback(
    (episode, propsToCardPodcastFull) => () => {
      const url = routes.episode.replace(':podcastId', episode.collectionId).replace(':episodeId', episode.trackId)
      navigate(url, { state: { episode, propsToCardPodcastFull } })
    },
    [navigate]
  )

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
                <div style={{ cursor: 'pointer', color: 'royalblue' }} onClick={goToPodcast(episode, propsToCardPodcastFull)}>{`${episode.trackName}`}</div>
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

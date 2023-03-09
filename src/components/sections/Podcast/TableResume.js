/* eslint-disable react/prop-types */
import React from 'react'
import { StyledContainer } from '../../commons/StyledContainer'

export const TableResume = ({ total }) => {
  return (
    <StyledContainer>
      <h5>{`Episodes: ${total}`}</h5>
    </StyledContainer>
  )
}

/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
`

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: ${({ rounded }) => (rounded ? '50%' : '0%')};
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'cursor')};
`

export const ImageCard = ({ image, rounded = false, pointer = false, ...props }) => (
  <StyledDiv>
    <StyledImage alt='Card' src={image} rounded={rounded} pointer={pointer} {...props} />
  </StyledDiv>
)

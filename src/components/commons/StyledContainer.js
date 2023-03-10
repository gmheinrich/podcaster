/* eslint-disable react/prop-types */
import React from 'react'
import { Container } from 'reactstrap'

export const StyledContainer = ({ children }) => (
  <Container className='shadow p-3 mb-5 bg-white' style={{ padding: 0 }}>
    {children}
  </Container>
)

import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import { Header } from './Header'

const Line = styled.hr`
  color: steelblue;
  margin-bottom: 1.5rem;
`

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => (
  <Container>
    <Header />
    <Line />
    {children}
  </Container>
)

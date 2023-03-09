import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  h2 {
    color: steelblue;
  }
`

export const Header = () => (
  <>
    <StyledHeader>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <h2>Podcaster</h2>
      </Link>
    </StyledHeader>
  </>
)

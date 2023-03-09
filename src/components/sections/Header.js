import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import styled from 'styled-components'
import GlobalDataContext from '../GlobalDataContext'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  h2 {
    color: steelblue;
  }
`

export const Header = () => {
  const { loading } = useContext(GlobalDataContext)

  return (
    <>
      <StyledHeader>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <h2>Podcaster</h2>
        </Link>
        {loading ? <Spinner type='grow' style={{ color: 'steelblue' }} /> : null}
      </StyledHeader>
    </>
  )
}

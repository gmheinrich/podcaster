import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import GlobalDataContext from '../GlobalDataContext'

export const Header = () => {
  const { loading } = useContext(GlobalDataContext)

  return (
    <header>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <h2>Podcaster</h2>
      </Link>
      {loading ? <Spinner type='grow' style={{ color: 'steelblue' }} /> : null}
    </header>
  )
}

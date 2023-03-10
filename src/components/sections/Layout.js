import React from 'react'
import { Header } from './Header'
import '../../App.css'

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    <div className='content'>{children}</div>
  </div>
)

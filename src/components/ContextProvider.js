/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import GlobalDataContext from './GlobalDataContext'

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  return (
    <GlobalDataContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  )
}

export default ContextProvider

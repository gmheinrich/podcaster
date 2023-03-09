/* eslint-disable react/prop-types */
import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

const ContainerResume = styled(Container)`
  // border: 1px solid black;
  padding: 0;
`

export const StyledContainer = ({ children }) => <ContainerResume className='shadow p-3 mb-5 bg-white'>{children}</ContainerResume>
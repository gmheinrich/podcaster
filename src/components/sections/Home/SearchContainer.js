import React from 'react'
import { Badge, Col, Container, Row } from 'reactstrap'

export const SearchContainer = () => (
  <Container>
    <Row xs={2} md={4} lg={6} className='justify-content-end'>
      <Col className='justify-content-end'>
        <Badge pill color='primary'>
          100
        </Badge>
      </Col>
      <Col>
        <input></input>
      </Col>
    </Row>
  </Container>
)

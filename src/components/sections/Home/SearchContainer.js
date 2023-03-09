import React from 'react'
import { Badge, Col, Container, Input, Row } from 'reactstrap'

export const SearchContainer = () => (
  <Container>
    <Row xs={2} md={4} lg={6} className='justify-content-end'>
      <Col className='justify-content-end'>
        <Badge pill color='primary'>
          100
        </Badge>
      </Col>
      <Col>
        <Input></Input>
      </Col>
    </Row>
  </Container>
)

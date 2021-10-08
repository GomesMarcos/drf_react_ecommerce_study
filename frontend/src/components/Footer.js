import React from 'react'

import { Container, Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className='text-center py-3'>Copyright &copy; ProShop</Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer

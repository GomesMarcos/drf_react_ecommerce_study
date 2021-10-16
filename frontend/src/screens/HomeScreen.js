import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'

function HomeScreen() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetch_products() {
      const { data } = await axios.get('http://localhost:8000/api/products/')
      setProducts(data)
    }

    fetch_products()
  }, [])

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen

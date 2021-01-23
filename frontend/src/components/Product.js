import React from "react"
import { Card } from "react-bootstrap"
import Rating from "./Rating"
import {Link} from "react-router-dom"

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'></Card.Img>
      </Link>

      <Card.Body as='div'>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          ></Rating>
        </Card.Text>
        <Card.Text as='h3'>
          <div>${product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product

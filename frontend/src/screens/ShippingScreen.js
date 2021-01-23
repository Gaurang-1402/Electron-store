import React, { useState} from "react"
import { Form, Button} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/Loader"
import FormContainer from "../components/FormContainer"
import CheckoutSteps from "../components/CheckoutSteps"

import {saveShippingAddress} from "../actions/cartActions"



const ShippingScreen = ({history }) => {

  const cart = useSelector(state => state.cart)
  const {shippingAddress} = cart
    const [address, setAddress] = useState(shippingAddress.adddress)
    const [city, setCity] = useState(shippingAddress.city)
    const [country, setCountry] = useState(shippingAddress.country)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)

    const dispatch = useDispatch()
    

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, postalCode, country}))

        history.push("/payment")

    }
    return (
        <FormContainer>
        <CheckoutSteps step1 step2/>
        <h1>Shipping</h1>

        <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Address'
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter City'
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
  

        <Form.Group controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Postal Code'
            required
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Country'
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">Continue</Button>

            </Form>
        </FormContainer>
                
    )
}

export default ShippingScreen

import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import axios from 'axios'
import Rating from '../components/Rating'

function FreebieScreen({ match, history }) {
    const [qty, setQty] = useState(1)
    const [freebie, setFreebie] = useState([])

    useEffect(() => {
        async function fetchFreebie(){
            const { data } = await axios.get(`/api/freebies/${match.params.id}`)
            setFreebie(data)
        }
        fetchFreebie()
    }, [])

    const addToCartHandler = () =>(
        history.push(`/cart/${match.params.id}?qty=${qty}`))
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={freebie.image} alt={freebie.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{freebie.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={freebie.rating} text={`${freebie.numReviews} reviews`} color={'#f8e825'} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${freebie.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    {freebie.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {freebie.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col xs='auto' className='my-1'>
                                            <Form.Control
                                                as="select"
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}
                                            >
                                                {
                                                    [...Array(freebie.countInStock).keys()].map((x) => (
                                                        <option key={x+1} value={x+1}>
                                                            {x+1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description {freebie.description}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>
                                <Button
                                onClick={addToCartHandler}
                                disabled = {freebie.countInStock == 0}
                                className='btn-block'
                                type='button'>
                                    Add to cart
                                </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        

                    </ListGroup>
                </Col>
                
                <Col>QTY</Col>


                
                
            </Row>
        </div>
    )
}

export default FreebieScreen


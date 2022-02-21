import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Freebie( {freebie} ) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/freebie/${freebie._id}`}>
                <Card.Img src={freebie.image} />
            </Link>

            <Card.Body>
                <Link to={`/freebie/${freebie._id}`}>
                    <Card.Title as="div">
                        <strong>{freebie.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={freebie.rating} text={`${freebie.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    ${freebie.price}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Freebie

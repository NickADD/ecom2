import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message } from '../components/Message'
import { addToCart } from '../actions/cartActions'


function CartScreen({match, location, history}) {
    const freebieId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    useEffect(() =>{
        if(freebieId){
            dispatch(addToCart(freebieId, qty))
        }
    }, [dispatch, freebieId, qty])

  return <div>
      Cart
        </div>
}

export default CartScreen

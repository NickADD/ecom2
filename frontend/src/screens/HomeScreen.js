import { React, useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import freebies from '../freebies'
import Freebie from '../components/Freebie'
import Loader from '../components/Loader'
import Message from '../components/Message'

import { useDispatch, useSelector } from 'react-redux'
import { listFreebies } from '../actions/freebieActions'

function HomeScreen() {
    const dispatch = useDispatch()
    const freebieList = useSelector(state => state.freebieList)
    const {error, loading, freebies} = freebieList

    useEffect(() => {
        dispatch(listFreebies())

    }, [dispatch])


    return (
        <div>
            <h3>OFFERINGS</h3>
            {loading ? <Loader />
            : error ? <Message variant='danger'>{error}</Message>
            :  
            
            <Row>
            {freebies.map(freebie => (
                <Col key={freebie._id} sm={12} md={6} lg={4} xl={3}>
                    <Freebie freebie={freebie} />
                </Col>
            ))}
        </Row>  
        }
            

        </div>
    )
}

export default HomeScreen

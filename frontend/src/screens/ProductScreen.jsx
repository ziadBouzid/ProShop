import React from 'react'
import products from "../products"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating';


const ProductScreen = () => {
    const {id: productId} = useParams();
    const product = products.find((p) => p._id === productId);    

    
  return (
    <>
    <Link className='btn btn-light my-3' to="/">Go Back</Link>
    <Row>
        <Col>
        
        </Col>
        <Col>
        
        </Col>
        <Col>
        
        </Col>
    </Row>
    
    </>
  )
}

export default ProductScreen

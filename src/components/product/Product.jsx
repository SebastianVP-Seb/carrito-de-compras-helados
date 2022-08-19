import React from 'react';
import {Card, Col, Button} from 'react-bootstrap';
import './product.scss';

function Product({helado, addToCart}) {
    
    return (
        <Col xs={3} className='product' >
            <Card key={helado.id} >
                <Card.Img variant='top' src={helado.image} />
                <div className='card_body'>
                    <Card.Title>{helado.name}</Card.Title>
                    <Card.Text>{helado.extraInfo}</Card.Text>
                    <Card.Text>{helado.price.toFixed(2)} $ / Unidad</Card.Text>
                    <div className="container_btn">
                        <Button  onClick={()=>addToCart(helado)} className='btn_addCart'>Añadir al carrito</Button>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default React.memo(Product);

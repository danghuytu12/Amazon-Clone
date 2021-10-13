import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';
import Button from '@mui/material/Button';
import  "./App.css";
function CartTotal({ getTotalPrice, getCount }) {

    return (
        <Container>
            <Subtotal>Subtotal ({getCount()} items): 
                
            </Subtotal>
            <NumberFormat style={{fontSize:28,marginLeft:20}} value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'đ '} />
            <Button variant="contained" style={{marginLeft:70,marginTop:60}}>Proceed to checkout</Button>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    flex: 0.3;
    padding: 20px;
    background-color: white;
    display: block;
`
const Subtotal = styled.h2`
    margin-bottom: 16px;
    
`

const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    // vertical - horizontal
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background:  #ddb347;
    }
`
import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'
import Button from '@mui/material/Button';
function Product({ title, price, rating, image, id }) {

    const addToCart = () => {
        console.log(id);
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
            .then((doc) => {
                console.log(doc);
                if (doc.exists) {
                    cartItem.update({
                        quantity: doc.data().quantity + 1
                    })
                } else {
                    db.collection("cartItems").doc(id).set({
                        name: title,
                        image: image,
                        price: price,
                        quantity: 1
                    })
                }
            })
    }

    return (
        <Container>
            
            <Image src={image} />
            <Title>
                {title}
            </Title>
            <Price>
                Giá sản phẩm: {price} đ
            </Price>
            
            <Rating>
                {
                    Array(rating)
                        .fill()
                        .map(rating => <p>⭐</p>)
                }
            </Rating>
            <ActionSection>
                <Button variant="outlined" onClick={addToCart}>Add to cart</Button>

            </ActionSection>
        </Container>
    )
}

export default Product

// const Container = styled.div`
//     background-color: white;
//     width:500px;  
//     padding: 20px;
//     margin-left: 80px;
//     margin-top:30px;
//     max-height: 400px;
//     display:inline-block;
//     border-radius:10px;
//     align-items:center;
// `

const Container = styled.div`
    background-color: white;
    width:250px;
    max-height: 450px;
    display:inline-grid;
    padding:10px;
    margin:25px;
    border-radius:10px;
    
`
const Title = styled.span`
align-items: center;
justify-self: center;

font-size: 15px;

`
const Price = styled.span`
    
    margin-top: 3px;
    margin-left: 10px;
    
`
const Sale=styled.span`

`
const Rating = styled.div`
    display: flex;
    justify-self: center;
`
const Image = styled.img`
    height: 250px;
    width:180px;
    margin-left:40px;
    object-fit: contain;
`

const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`

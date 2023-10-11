import React, { useContext, useEffect, useState } from 'react';
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../utilities/fakedb';
import fakeData from '../fakeData/products.json'
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { CartAndProductContext } from '../../App';

const Review = () => {
    const [product, setProduct] = useState([])
    const {cart,setCart} = useContext(CartAndProductContext)
    useEffect(()=>{
        setCart(product)
    })
    useEffect(() => {
        const saveJson = getShoppingCart()
        const pId = Object.keys(saveJson)
        const reviewPro = pId.map(id => {
            const item = fakeData.find(item => item.id === id)
            item.quantity = saveJson[id]
            return item
        })
        setProduct(reviewPro)
    }, [])
    

    const removeItem=(id)=>{
       const newProduct = product.filter(item => item.id!== id)
       setProduct(newProduct)
       removeFromDb(id)
    }

    const [order,setOrder]= useState(false)
    const placeOrder=()=>{
        deleteShoppingCart();
        setOrder(true)
        setProduct([])
    }
    let thanks;
    if(order){
        thanks = <h2>Thanks for Your Order, Keep Shopping</h2>
    }
    return (
        <div className='d-flex'>
            <div className='container row'>
                {
                    product.map((item, index) => <ReviewItem product={item} key={index} removeItem={removeItem}></ReviewItem>)
                }
                {thanks}
            </div>

            <div>
                <Cart cart={cart}>
                    <button className='btn btn-info' onClick={()=>{placeOrder()}}>Place Order</button>
                </Cart>
            </div>
        </div>

    );
};

export default Review;
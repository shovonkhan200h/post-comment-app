import React, { useContext, useEffect } from 'react';
import fakeData from '../fakeData/products.json'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { CartAndProductContext } from '../../App';
import { addToDb, getShoppingCart } from '../utilities/fakedb';
import { Link } from 'react-router-dom';
const products = fakeData.slice(0,10);

const Shop = () => {
    const {product,setProduct} = useContext(CartAndProductContext)
    useEffect(()=>{
        setProduct(products)
        
    })

    const {cart,setCart} = useContext(CartAndProductContext)
    useEffect(()=>{
        const savedCart = getShoppingCart()
        const pId = Object.keys(savedCart)
        const preCart = pId.map(id => {
            const item = fakeData.find(item => item.id === id)
            item.quantity = savedCart[id]
            return item
        },[])
        setCart(preCart)
    })

    const addToCart = (product) => {
       const sameProduct = cart.find(item => item.id === product.id)
        let count;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const otherProduct = cart.filter(item => item.id!== product.id)
            newCart = [...otherProduct, sameProduct]
        }else{
            count = 1;
            newCart = [...cart, product]
        }
       setCart(newCart)
       addToDb(product.id)
    }
    return (
        <div className='container d-flex justify-content-center'>
            <div className='row'>
                {
                    product.map((item,index)=><Product product={item} key={index} addToCart={addToCart}></Product>)
                }
            </div>

            <div className='row'>
                <Cart cart={cart}>
                    <Link to={'/review'}>
                    <button className='btn btn-info'>Review Item</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
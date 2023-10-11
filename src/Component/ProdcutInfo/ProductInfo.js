import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData/products.json';
import Product from '../Product/Product';

const ProductInfo = () => {
    
    const {id} = useParams()
    const products = fakeData.find((item) => item.id === id)
    return (
        <div className='container-fluid align-items-center'>
            <Product product={products}></Product>
        </div>
        
    );
};

export default ProductInfo;
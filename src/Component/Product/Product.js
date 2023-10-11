import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product,addToCart}) => {
    const {id,name,price,img} = product;
    return (
        <div className='col-4 d-flex flex-wrap m-2 p-2 border'>
            <div>
                <img src={img} className='img-fluid' alt=''></img>
            </div>

            <div>
                <h4><Link to={'/product/'+ id} class="text-decoration-none">{name}</Link></h4>
                <h5>Price: {price}</h5>
                <button className='btn btn-primary' onClick={()=>{addToCart(product)}}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
import React from 'react';

const ReviewItem = ({product,removeItem}) => {
    const {name,price,img,quantity,id} = product;
    return (
        <div className='col-4 d-flex flex-wrap m-2 p-2 border'>
            <div>
                <img src={img} className='img-fluid' alt=''></img>
            </div>

            <div>
                <h4>{name}</h4>
                <h5>Price: {price}</h5>
                <h6>quantity: {quantity}</h6>
                <button className='btn btn-primary' onClick={()=>{removeItem(id)}}>Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;
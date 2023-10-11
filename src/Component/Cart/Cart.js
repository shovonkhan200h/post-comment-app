import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,item)=>total+item.price*item.quantity,0);
    let tax;
    if(total>500){
        tax=Math.floor(total*0.1)
    }
    else{
        tax=Math.floor(total*0.05)
    }

    let shipping;
    if(total >500){
        shipping=Math.floor(5.99);
    }else{
        shipping = 0;
    }
    return (
        <div className='col m-2'>
            <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Cart</h5>
                        <h5 className="card-title">Total Item in Cart: {cart.length}</h5>
                        <p className="card-text">Tax: {tax}</p>
                        <p className="card-text">shipping: {shipping}</p>
                        <p className="card-text">Total Pirce: {total + tax + shipping}</p>
                        {
                            props.children
                        }
                        
                    </div>
            </div>
        </div>
    );
};

export default Cart;
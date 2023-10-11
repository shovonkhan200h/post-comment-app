import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div style={{backgroundColor:'black', height:'80px', color:'white', textAlign:'center'}}>
            <h2>AMAZON</h2>
            <div>
                <nav>
                    <a href='/shop' content=''>Shop</a>
                    <a href='/review' content=''>review</a>
                    <a href='/inventory' content=''>inventory</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;
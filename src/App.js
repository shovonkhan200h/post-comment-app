
import './App.css';
import { createContext, useState } from 'react';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import Shop from './Component/Shop/Shop';
import Header from './Component/Header/Header'
import ProductInfo from './Component/ProdcutInfo/ProductInfo';
import Review from './Component/Review/Review';


export const CartAndProductContext = createContext();
function App() {
  // const [category,setCategory]= useState('')
  const [cart,setCart]= useState([])
  const [product,setProduct]= useState([])
  return (
    <CartAndProductContext.Provider value={{cart,setCart,product,setProduct}}>
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shop></Shop>}/>
        <Route path='/shop' element={<Shop></Shop>}/>
        <Route path='product/:id' element={<ProductInfo></ProductInfo>}/>
        <Route path='/review' element={<Review></Review>}/>
      </Routes>
      </BrowserRouter>
      
    </CartAndProductContext.Provider>
  );
}

export default App;

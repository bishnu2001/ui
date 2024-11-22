import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './views/Product';
import AllProduct from './views/AllProduct';
import Navbar from './views/Navbar';
import Cart from './views/Cart';
import Order from './views/Order';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/allproducts' element={<AllProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </div>
  )
}

export default App

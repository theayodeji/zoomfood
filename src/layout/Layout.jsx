import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import "../scss/global.scss"
import "../scss/button.scss"
import Navigation from '../components/Navigation/Navigation'
import Vendors from '../pages/Vendors/Vendors'
import Product from '../pages/Product/Product'
import Search from '../pages/Search/Search'
import RestaurantPage from '../pages/VendorHome/VendorHome'
import Cart from '../components/Cart/Cart'
import CartContext from '../contexts/CartContext'
import SuccessModal from '../components/Cart/SuccessModal'
import Checkout from '../pages/Checkout/Checkout'

function Layout() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const {  showSuccessModal } = useContext(CartContext);
  
  const toggleCart = () => {
    setIsCartVisible((prevVisible) => !prevVisible);
  };
  
  return (
    <div className='container content'>
      <Navigation isCartVisible={isCartVisible} toggleCart ={toggleCart}/>

      {isCartVisible && <Cart onpage={true} onClose={() => setIsCartVisible(false)}/> }
        <Routes>
          <Route path='/' exact element={<Home /> } />
          <Route path='/vendors' element={<Vendors /> } />
          <Route path='/products/:id' exact element={<Product /> } />
          <Route path='/search/:query' exact element={<Search /> } />
          <Route path='/vendors/:restaurantId' exact element={<RestaurantPage /> } />
          <Route path='/checkout' exact element={<Checkout /> } />
        </Routes>
      {showSuccessModal && <SuccessModal  /> }
    </div>
  )
}

export default Layout
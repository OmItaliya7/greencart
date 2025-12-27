import React from 'react'
import Navbar from './components/Navbar'
import {Route, Routes, useLocation, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer.jsx'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts.jsx'
import ProductCategory from './pages/ProductCategory.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'
import AddAddress from './pages/AddAddress.jsx'
import MyOrders from './pages/MyOrders.jsx'
import SellerLogin from './pages/SellerLogin.jsx'
import SellerLayout from './pages/seller/SellerLayout.jsx'
import ProductList from './pages/seller/ProductList.jsx'
import Orders from './pages/seller/Orders.jsx'
import AddProduct from './pages/seller/AddProduct.jsx'
import Loading from './components/Loading.jsx'
import Contact from './pages/Contact.jsx'



const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin, isSeller, sellerLoading } = useAppContext();

  const SellerRoute = ({ children }) => {
    if (sellerLoading) {
      return <div className="min-h-screen flex items-center justify-center">Checking authentication...</div>;
    }
    return isSeller ? children : <SellerLogin />;
  };

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>

      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}

      <Toaster />

      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/loader" element={<Loading />} />
          <Route path='/seller' element={<SellerRoute><SellerLayout /></SellerRoute>}>
            <Route index element={<AddProduct/>} />
            <Route path='product-list' element={<ProductList/>} />
            <Route path='orders' element={<Orders/>} />
          </Route>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      {!isSellerPath &&<Footer />}
    </div>
  )
}

export default App


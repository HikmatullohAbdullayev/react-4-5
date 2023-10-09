import { useState } from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import {MainLayout} from './layout/main-layout'

import { Home } from './pages/home'
import {Product} from './pages/product'
import {ProductCard} from './pages/product-card'
// import {ProductList} from './pages/product-list'

import "./App.css"


function App() {

  return (
    <>
    {/* <Link  to="/">Home</Link>
    <Link to="/product">Product</Link>
    <Link target='blank' to="/product-card">ProductCard</Link> */}

    <Routes>
    <Route path='/' element={<MainLayout/>}>
      <Route index element= {<Home/>}/>
      <Route path='product' element= {<Product/>}/>
      <Route path='product-card' element= {<ProductCard/>}/>
      <Route path='*' element={<h1>sahifaq topilmadi</h1>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App

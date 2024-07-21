import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Payment from './Pages/Payment'
import SingleProduct from './Pages/SingleProduct'
import { Suspense } from 'react'
import Loader from './Components/Loader'
import Register from './Pages/Register'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Success from './Pages/Success'

const App = () => {


  const [state,dispatch] = useStateValue();


  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
    console.log("the user is>>>",authUser);
    if(authUser){
      //user just loggeddin /was logged in
      
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }
    else{
      console.log("not here")
      //user is logged out
      dispatch({
        type:'SET_USER',
        user:null
      })
    }
  })
  },[])
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Register/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/success' element={<Success/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
      <Route path='/singleproduct/:id' element={<SingleProduct/>}></Route>
    </Routes>
    </Suspense>
    
    </BrowserRouter>
    </div>
  )
}

export default App
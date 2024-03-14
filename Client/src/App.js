import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ProductDetail from './Components/ProductDetail';
import { Provider, useDispatch } from 'react-redux';
import Store from "./Components/Redux/store"
import Cart from './Components/Cart';
import {ToastContainer} from "react-toastify"
import Register from './Components/Register';
import Login from './Components/Login';
import { loadUser } from './Components/Redux/Slices/authSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    
    <div className="text-center bg-gray-100 min-h-screen">
     <BrowserRouter>
     <ToastContainer />
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/product/:id" element={<ProductDetail />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Footer/>
     </BrowserRouter>
     
    </div> 
  );
}

export default App;

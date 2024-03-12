import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ProductDetail from './Components/ProductDetail';
import { Provider } from 'react-redux';
import Store from "./Components/Redux/store"
import Cart from './Components/Cart';
import {ToastContainer} from "react-toastify"
import { getTotal } from './Components/Redux/Slices/cartSlice';


function App() {
  Store.dispatch(getTotal())
  return (
    <Provider store={Store} >
    <div className="App">
     <BrowserRouter>
     <ToastContainer />
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/product/:id" element={<ProductDetail />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
     </BrowserRouter>
     
    </div>
    </Provider>
  );
}

export default App;

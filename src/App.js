import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ProductDetail from './Components/ProductDetail';

function App() {
  return (
    <div className="App">
     <Navbar />
     <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path="/product/:id" element={<ProductDetail />} />
        </Routes>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;

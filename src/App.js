import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import './assests/css/style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage/HomePage';
import About from './Components/AboutPage/About';
import Product from './Components/ProductPage/Product';
import Blog from './Components/BlogPage/Blog';
import Testimonial from './Components/TestimonialPage/Testimonial';
import Contact from './Components/ContactPage/Contact';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route eaxct path="/product" element={<Product/>}></Route>
          <Route eaxct path="/blog" element={<Blog/>}></Route>
          <Route eaxct path="/testimonial" element={<Testimonial/>}></Route>
          <Route eaxct path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

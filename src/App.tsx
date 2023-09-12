import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import StudyCom1 from './Pages/Study/StudyCom1';
import PizzaTime from './Pages/Pizzatime/Pizzatime';
import Menu from './Pages/Pizzatime/Menu';
import Home from './Pages/Pizzatime/Home';
import About from './Pages/Pizzatime/About';
import Blog from './Pages/Pizzatime/Blog';
import Contact from './Pages/Pizzatime/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<StudyCom1 />} />
        <Route path='/pizza' element={<PizzaTime />} >
          <Route path='menu' element={<Menu />} />
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Procedures from './components/Procedures';
import Contact from "./components/Contact"
import Home from './components/Home';
import './styles.css';

ReactDOM.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} >
      <Route path="home" element={<Home />} />
      <Route path="procedures" element={<Procedures />} />
      <Route path="contact" element={<Contact />} />
      <Route
          index
          element={
            <Home />
          }
        />
    </Route>
  </Routes>
</BrowserRouter>,
document.getElementById('root')
);

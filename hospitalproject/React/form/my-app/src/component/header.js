import React, { Component } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Create from './create';
import Form from './Form';
import './header.css';

class header extends Component {
  render() {
    return (    
     
        <BrowserRouter>
         <div className='container'>
        <nav className="nav">
          <Link className="nav-link" activeStyle={{color: "red"}} to="/form">Read</Link>
          <Link className="nav-link" to="create">create</Link>
          <input type="text"></input>
          <button type="button" className="btn btn-primary">search</button>
        </nav>
        </div>
        
          <Routes>
            <Route path = "/form" element={< Form />} />
            <Route path = "/create" element={<  Create/>} />
          </Routes>
        </BrowserRouter>
      
      
    );
  }
}

export default header;
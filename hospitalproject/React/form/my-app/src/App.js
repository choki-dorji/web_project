import './App.css';
import Form from './component/Form';
import React, { Component } from 'react';
import Header from './component/header';
import Create from './component/create';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/* <Form />
        <Create/> */}
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
        image_url: '',
        product_name: '',
        price: 0,
        inventory: []
    }

    this.addImage = this.addImage.bind(this)
    this.addName = this.addName.bind(this)
    this.addPrice = this.addPrice.bind(this)
    this.remove = this.remove.bind(this)
    
}

addImage(e) {
  this.setState({image_url: e.target.value})
}

addName(e) {
  this.setState({product_name: e.target.value})
}

addPrice(e) {
  this.setState({price: e.target.value})
}

remove() {
  this.setState({
    product_name: ''
  })
}

addTo(e) {
  this.setState({inventory: e})
}

updateInventory(){
  axios.get('/api/inventory').then(res => {
    this.setState({inventory: res.data})
  })
}


  render() {
    return (
      <div className="App">
        <Header />
       <Dashboard addTo={this.addTo} inventory={this.state.inventory} />
       <Form />
       <div className="container">
       <h1>Image URL:</h1>
       <input type="text" onChange={e => this.addImage(e)} />
       <h1>Product Name:</h1>
       <input type="text" onChange={e => this.addName(e)} />
       <h1>Price</h1>
       <input type="text" onChange={e => this.addPrice(e)} />
       <div className="btn-container">
       <button id="cancel" onClick={e => this.remove()}>Cancel</button>
       <button id="add" onClick={e => this.addTo(e.target.value)}>Add to Inventory</button>
       </div>
       </div>
      </div>
    );
  }
}

export default App;

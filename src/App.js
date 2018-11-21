import React, { Component } from 'react';
import Form from './components/Form/Form';
import Product from './components/Product/Product';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: [],
      productName: '',
      productPrice: '',
      productURL: ''
     }
}
handleChange = (event) => {
  console.log(event.target.name, event.target.value);
  
  this.setState({
    [event.target.name]: event.target.value
  })
}
createProduct = () => {
  let productsCopy = this.state.products.slice();
  console.log('PRODUCTS', this.state.products);
  let product = {
    name: this.state.productName,
    url: this.state.productURL,
    price: this.state.productPrice
  }
  productsCopy.push(product);
  console.log('PRODUCTS COPY', productsCopy);
  this.setState({
    products: productsCopy,
    productName: '',
    productPrice: '',
    productURL: ''
  });
}
  render() {
    let productsList = this.state.products.map((product, i)=> {
      console.log(product)
      return <Product key={i} name={product.name} price={product.price} url={product.url} />
    })
    return (
      <div className="App">
        <Form 
          handleChange={this.handleChange}
          createProduct={this.createProduct}
          productName={this.state.productName} 
          productPrice={this.state.productPrice} 
          productURL={this.state.productURL}
           />
          <div className="products-container">
          <h1>Product List</h1>
            {productsList}
           </div>
      </div>
    );
  }
}

export default App;

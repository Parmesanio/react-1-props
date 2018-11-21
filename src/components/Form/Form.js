import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props)
        return ( 
            <div className="form">
            <h1>Product Form</h1>
                <label>Product Image URL:</label>
                <input name="productURL" value={this.props.productURL} onChange={this.props.handleChange} />
                <label>Product Name:</label>
                <input name="productName" value={this.props.productName} onChange={this.props.handleChange} />
                <label>Product Price:</label>
                <input name="productPrice" value={this.props.productPrice} onChange={this.props.handleChange} />
                <button onClick={this.props.createProduct}>Add Product</button>
            </div>
         );
    }
}
 
export default Form;
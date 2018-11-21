import React, { Component } from 'react';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        console.log(this.props);
        return ( 
            <div className="product">
                <img src={this.props.url || 'https://picsum.photos/200/300'} />
                <div className="product-details">
                    <h2>{this.props.name}</h2>
                    <p>${this.props.price}.00</p>
                    <button>Add to cart</button>
                </div>
            </div>
         );
    }
}
 
export default Product;
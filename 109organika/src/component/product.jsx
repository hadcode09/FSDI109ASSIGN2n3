import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';

import"./product.css";
import { connect }  from "react-redux";
import { addProductToCart } from '../store/actions/actions';

class Product extends Component {
    state = { 
        quantity: 1,
    };
    render() {
        return (
            <div className="product">

                <img 
                className="product-image" alt="fruit-veggie" src={"/images/products/"+this.props.data.image}>
                </img>

                <label><h4>{this.props.data.title}</h4></label><br></br>

                <div className="prices">
                    <label className="total-value">Total Amount: ${this.calculateTotal()}</label><br></br>
                    <label className="price-value">Unit Price: ${this.props.data.price.toFixed(2)}</label>
                </div>

                <QuantityPicker minimum= {this.props.data.minimum || 1}
                onValueChange={this.handleQuantityChange}></QuantityPicker>

                <button onClick={this.handleAddToCart} className="btn btn-sm btn-primary">Add
                </button>
            </div>
        );
    }

    calculateTotal = () => {
        var total = this.props.data.price  * this.state.quantity;
        return total.toFixed(2);
    }

    handleQuantityChange = (qnty) => {
        console.log("Quantity Changed to" + qnty);
        this.setState({ quantity: qnty });
    };

    handleAddToCart = () => {
        console.log("Add 2 cart");
        //dispatch the action
        var prodInCart = {
            product: this.props.data,
            quantity: this.state.quantity
        };

        this.props.addProductToCart( prodInCart );
    };
}


// connect 2 params:
//1 - what to read
// 2 - action to dispatch
export default connect (null,  { addProductToCart })(Product); 
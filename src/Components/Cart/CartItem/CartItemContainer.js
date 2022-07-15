import React from "react";
import CartItem from "./CartItem";
import {connect} from "react-redux";
import {changeProductNumber} from "../../../Redux/cartReducer";


class CartItemContainer extends React.Component {
    render() {
        return <CartItem product={this.props.product} changeProductNumber={this.props.changeProductNumber}/>
    }
}

export default connect(null, {changeProductNumber})(CartItemContainer)
import React from "react";
import Cart from "./Cart";
import {getCart} from "../../Redux/Selectors/cartPageSelectors";
import {connect} from "react-redux";


class CartContainer extends React.Component {
    render() {
        return <Cart products={this.props.products}/>
    }
}

let mapStateToProps = (state) => ({
    products: getCart(state)
})

export default connect(mapStateToProps, null)(CartContainer)
import React from "react";
import CartItem from "./CartItem";
import {connect} from "react-redux";
import {changeProductNumber, handleCartAttributeChange} from "../../../Redux/cartReducer";
import {getCurrentCurrency} from "../../../Redux/Selectors/currencySelectors";


class CartItemContainer extends React.Component {
    render() {
        return <CartItem product={this.props.product} changeProductNumber={this.props.changeProductNumber}
                         currentCurrency={this.props.currentCurrency}
                         handleAttributeChange={this.props.handleCartAttributeChange}/>
    }
}

let mapStateToProps = (state) => ({
    currentCurrency: getCurrentCurrency(state)
})

export default connect(mapStateToProps, {changeProductNumber, handleCartAttributeChange})(CartItemContainer)
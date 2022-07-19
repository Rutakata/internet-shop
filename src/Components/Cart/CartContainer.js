import React from "react";
import Cart from "./Cart";
import {getCart, getTotal, getTotalQuantity} from "../../Redux/Selectors/cartPageSelectors";
import {connect} from "react-redux";
import {getCurrencies, getCurrentCurrency} from "../../Redux/Selectors/currencySelectors";


class CartContainer extends React.Component {
    render() {
        return <Cart products={this.props.products} total={this.props.total}
                     currencies={this.props.currencies} currentCurrency={this.props.currentCurrency}
                     quantity={this.props.quantity}/>
    }
}

let mapStateToProps = (state) => ({
    products: getCart(state),
    total: getTotal(state),
    currentCurrency: getCurrentCurrency(state),
    currencies: getCurrencies(state),
    quantity: getTotalQuantity(state)
})

export default connect(mapStateToProps, null)(CartContainer)
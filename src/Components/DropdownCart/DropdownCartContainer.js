import React from "react";
import {getCart, getTotal} from "../../Redux/Selectors/cartPageSelectors";
import {connect} from "react-redux";
import DropdownCart from "./DropdownCart";
import {getCurrencies, getCurrentCurrency} from "../../Redux/Selectors/currencySelectors";


class DropdownCartContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            numberOfProducts: this.props.cart.length
        }
    }

    componentDidUpdate() {

            this.setState({
                numberOfProducts: this.props.cart.length
            })

    }

    render() {
        return <DropdownCart numberOfProducts={this.state.numberOfProducts} cart={this.props.cart}
                             style={this.props.style} showCart={this.props.showCart}
                             handleShowCart={this.props.handleShowCart} />
    }
}

let mapStateToProps = (state) => ({
    cart: getCart(state),
})

export default connect(mapStateToProps, null)(DropdownCartContainer)
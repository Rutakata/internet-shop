import React from "react";
import {getCart} from "../../Redux/Selectors/cartPageSelectors";
import {connect} from "react-redux";
import DropdownCart from "./DropdownCart";


class DropdownCartContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfProducts: this.props.cart.length
        }
    }

    changeProductNumber(id) {

    }

    componentDidUpdate() {
        if (this.props.cart.length !== this.state.numberOfProducts) {
            this.setState({
                numberOfProducts: this.props.cart.length
            })
        }
    }

    render() {
        return <DropdownCart numberOfProducts={this.state.numberOfProducts} cart={this.props.cart}
                             style={this.props.style} showCart={this.props.showCart}
                             handleShowCart={this.props.handleShowCart}/>
    }
}

let mapStateToProps = (state) => ({
    cart: getCart(state)
})

export default connect(mapStateToProps, null)(DropdownCartContainer)
import React from "react";
import {getCart} from "../../../Redux/Selectors/cartPageSelectors";
import {connect} from "react-redux";
import DropdownCart from "./DropdownCart";


class DropdownCartContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfProducts: this.props.cart.length
        }
        console.log(this.props.cart.length)
    }

    componentDidUpdate() {
        if (this.props.cart.length !== this.state.numberOfProducts) {
            this.setState({
                numberOfProducts: this.props.cart.length
            })
        }
    }

    render() {
        return <DropdownCart numberOfProducts={this.state.numberOfProducts} cart={this.props.cart} style={this.props.style}/>
    }
}

let mapStateToProps = (state) => ({
    cart: getCart(state)
})

export default connect(mapStateToProps, null)(DropdownCartContainer)
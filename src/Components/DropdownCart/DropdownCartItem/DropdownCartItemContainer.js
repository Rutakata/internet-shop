import React from "react";
import DropdownCartItem from "./DropdownCartItem";
import {connect} from "react-redux";
import {changeProductNumber} from "../../../Redux/cartReducer";


class DropdownCartItemContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleNumberChange = this.handleNumberChange.bind(this)
    }

    handleNumberChange(id, number) {
        this.props.changeProductNumber(id, number)
    }

    render() {
        return <DropdownCartItem product={this.props.product} handleNumberChange={this.handleNumberChange}/>
    }
}

export default connect(null, {changeProductNumber})(DropdownCartItemContainer)
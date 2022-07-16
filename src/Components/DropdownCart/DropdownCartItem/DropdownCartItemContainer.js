import React from "react";
import DropdownCartItem from "./DropdownCartItem";
import {connect} from "react-redux";
import {changeProductNumber} from "../../../Redux/cartReducer";
import {getCurrentCurrency} from "../../../Redux/Selectors/currencySelectors";


class DropdownCartItemContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleNumberChange = this.handleNumberChange.bind(this)
    }

    handleNumberChange(id, number) {
        this.props.changeProductNumber(id, number)
    }

    render() {
        return <DropdownCartItem product={this.props.product} handleNumberChange={this.handleNumberChange}
                                 currentCurrency={this.props.currentCurrency}/>
    }
}

let mapStateToProps = (state) => ({
    currentCurrency: getCurrentCurrency(state)
})

export default connect(mapStateToProps, {changeProductNumber})(DropdownCartItemContainer)
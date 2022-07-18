import React from "react";
import PriceBlock from "./PriceBlock";
import {getTotal} from "../../../Redux/Selectors/cartPageSelectors";
import {getCurrencies, getCurrentCurrency} from "../../../Redux/Selectors/currencySelectors";
import {connect} from "react-redux";


class PriceBlockContainer extends React.Component {
    render() {
        return <PriceBlock style={this.props.style} total={this.props.total}
                           currencies={this.props.currencies} currentCurrency={this.props.currentCurrency}/>
    }
}

let mapStateToProps = (state) => ({
    total: getTotal(state),
    currentCurrency: getCurrentCurrency(state),
    currencies: getCurrencies(state)
})

export default connect(mapStateToProps, null)(PriceBlockContainer)
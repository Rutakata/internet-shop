import React from "react";
import ProductInfo from "./ProductInfo";
import {getProductInfo} from "../../Redux/Selectors/productPageSelectors";
import {connect} from "react-redux";


class ProductInfoContainer extends React.Component {
    render() {
        return <ProductInfo product={this.props.product}/>
    }
}

let mapStateToProps = (state) => ({
    product: getProductInfo(state)
})

export default connect(mapStateToProps, null)(ProductInfoContainer)
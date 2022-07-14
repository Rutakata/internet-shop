import React from "react";
import ProductInfo from "./ProductInfo";
import {getProductInfo} from "../../Redux/Selectors/productPageSelectors";
import {addProductToCart} from "../../Redux/cartReducer";
import {connect} from "react-redux";


class ProductInfoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            currentImage: `${props.product.gallery[0]}`
        })

        this.setCurrentImage = this.setCurrentImage.bind(this)
    }

    setCurrentImage(src) {
        this.setState({
            currentImage: `${src}`
        })
    }

    render() {
        return <ProductInfo product={this.props.product} currentImage={this.state.currentImage}
                            setCurrentImage={this.setCurrentImage} addProductToCart={this.props.addProductToCart}/>
    }
}

let mapStateToProps = (state) => ({
    product: getProductInfo(state)
})

export default connect(mapStateToProps, {addProductToCart})(ProductInfoContainer)
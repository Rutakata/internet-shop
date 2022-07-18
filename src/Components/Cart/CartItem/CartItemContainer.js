import React from "react";
import CartItem from "./CartItem";
import {connect} from "react-redux";
import {changeProductNumber, handleCartAttributeChange} from "../../../Redux/cartReducer";
import {getCurrentCurrency} from "../../../Redux/Selectors/currencySelectors";


class CartItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0
        }

        this.setGalleryImage = this.setGalleryImage.bind(this)
    }

    setGalleryImage(imageNumber) {
        if (imageNumber < 0) {
            this.setState({
                currentImage: this.props.product.gallery.length - 1
            })
        }else if (imageNumber >= this.props.product.gallery.length) {
            this.setState({
                currentImage: 0
            })
        }else {
            this.setState({
                currentImage: imageNumber
            })
        }
    }

    render() {
        return <CartItem product={this.props.product} changeProductNumber={this.props.changeProductNumber}
                         currentCurrency={this.props.currentCurrency} currentImage={this.state.currentImage}
                         handleAttributeChange={this.props.handleCartAttributeChange}
                         setGalleryImage={this.setGalleryImage}/>
    }
}

let mapStateToProps = (state) => ({
    currentCurrency: getCurrentCurrency(state)
})

export default connect(mapStateToProps, {changeProductNumber, handleCartAttributeChange})(CartItemContainer)
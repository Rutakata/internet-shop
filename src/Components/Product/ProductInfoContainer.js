import React from "react";
import ProductInfo from "./ProductInfo";
import {getChosenAttributes, getProductInfo} from "../../Redux/Selectors/productPageSelectors";
import {setProductInfo, handleAttributeChange} from "../../Redux/productReducer";
import {addProductToCart} from "../../Redux/cartReducer";
import {connect} from "react-redux";
import {client} from "../../apolloClient";
import {compose} from "redux";
import {withRouter} from "../../HOC/withRouter";
import {getProductData} from "../../Queries/Product";
import {getCurrentCurrency} from "../../Redux/Selectors/currencySelectors";


class ProductInfoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            currentImage: props.product?.gallery[0],
            productId: props.productId,
            loading: true
        })

        this.setCurrentImage = this.setCurrentImage.bind(this)
    }

    componentDidMount() {
        if (!this.props.product) {
            this.getInitialData(this.state.productId)
        }else {
            this.setState({
                    loading: false,
                }
            )
        }

        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    // componentWillUnmount() {
    //     this.subobj.unsubscribe()
    // }

    async getInitialData(productId) {
        const watchQuery = client.watchQuery({
            query: getProductData(),
            variables: {
                productId: productId
            }
        })
        this.subobj = watchQuery.subscribe(({data, loading}) => {
            if (!loading) {
                this.props.setProductInfo(data.product)
                this.setState({
                    currentImage: `${data.product.gallery[0]}`,
                    loading: loading
                })
            }
        })
    }

    setCurrentImage(src) {
        this.setState({
            currentImage: `${src}`
        })
    }

    render() {
        if (this.state.loading) return <div>Loading...</div>

        return <ProductInfo product={this.props.product} currentImage={this.state.currentImage}
                            setCurrentImage={this.setCurrentImage} addProductToCart={this.props.addProductToCart}
                            handleAttributeChange={this.props.handleAttributeChange}
                            chosenAttributes={this.props.chosenAttributes} currentCurrency={this.props.currentCurrency}/>
    }
}

let mapStateToProps = (state) => ({
    product: getProductInfo(state),
    chosenAttributes: getChosenAttributes(state),
    currentCurrency: getCurrentCurrency(state)
})

export default compose(withRouter, connect(mapStateToProps, {addProductToCart,
                                                                            setProductInfo,
                                                                            handleAttributeChange}))(ProductInfoContainer)
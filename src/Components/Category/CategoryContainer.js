import React from "react";
import {connect} from "react-redux";
import {getAllProducts, getCurrentCategory} from "../../Redux/Selectors/categoryPageSelectors";
import Category from "./Category";
import {setProductInfo} from "../../Redux/productReducer";
import {getCurrentCurrency} from "../../Redux/Selectors/currencySelectors";
import {compose} from "redux";
import {withRouter} from "../../HOC/withRouter";


class CategoryContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCategoryProducts: [],
            currentCategory: props.categoryName
        }

        console.log(this.state.currentCategory)
    }

    componentDidMount() {
        this.setState({
            currentCategoryProducts: this.state.currentCategory !== "all" ? this.props.allProducts.filter(product =>
                (product.category === this.state.currentCategory ? product: null)
            ) : this.props.allProducts
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentCategory !== this.props.categoryName) {
            this.setProducts(this.props.allProducts, this.props.categoryName)
        }
    }

    setProducts(allProducts, currentCategory) {
        if (currentCategory === "all") {
            this.setState({
                currentCategoryProducts: this.props.allProducts,
                currentCategory: currentCategory
            })
        }else {
            this.setState({
                currentCategoryProducts: allProducts.filter(product => (product.category === currentCategory ? product: null)),
                currentCategory: currentCategory
            })
        }
    }

    render() {
        return <Category products={this.state.currentCategoryProducts} setProductInfo={this.props.setProductInfo}
                         currentCurrency={this.props.currentCurrency} />
    }
}

let mapStateToProps = (state) => ({
    allProducts: getAllProducts(state),
    currentCurrency: getCurrentCurrency(state)
})

export default compose(withRouter, connect(mapStateToProps, {setProductInfo}))(CategoryContainer)
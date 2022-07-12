import React from "react";
import {connect} from "react-redux";
import {getAllProducts, getCurrentCategory} from "../../Redux/Selectors/categoryPageSelectors";
import Category from "./Category";
import {setProductInfo} from "../../Redux/productReducer";


class CategoryContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCategoryProducts: []
        }
    }

    componentDidMount() {
        this.setState({
            currentCategoryProducts: this.props.allProducts
        })
        console.log(this.props.currentCategory)
        console.log(this.state)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentCategory !== this.props.currentCategory) {
            this.setProducts(this.props.allProducts, this.props.currentCategory)
        }
    }

    setProducts(allProducts, currentCategory) {
        if (currentCategory === "all") {
            this.setState({
                currentCategoryProducts: this.props.allProducts
            })
        }else {
            this.setState({
                currentCategoryProducts: allProducts.filter(product => (product.category === currentCategory ? product: null))
            })
        }
    }

    render() {
        return <Category products={this.state.currentCategoryProducts} setProductInfo={this.props.setProductInfo} />
    }
}

let mapStateToProps = (state) => ({
    allProducts: getAllProducts(state),
    currentCategory: getCurrentCategory(state)
})

export default connect(mapStateToProps, {setProductInfo})(CategoryContainer)
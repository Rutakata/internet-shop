import React from "react";
import {connect} from "react-redux";
import {getAllProducts, getCurrentCategory} from "../../Redux/Selectors/categoryPageSelectors";
import Category from "./Category";


class CategoryContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCategoryProducts: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        alert(this.props.currentCategory)
        this.setProducts(this.props.allProducts, this.props.currentCategory)
    }

    setProducts(allProducts, currentCategory) {
        // let productsToSet = allProducts.filter(product => (product.category === currentCategory ? product: null))
        let productsToSet = []
        for (let product of allProducts) {
            if (product.category === currentCategory) {
                productsToSet.push(product)
            }
        }

        if (productsToSet != this.state.currentCategoryProducts) {
            this.setState({
                currentCategoryProducts: productsToSet
            })
        }
    }

    render() {
        return <Category products={this.state.currentCategoryProducts} />
    }
}

let mapStateToProps = (state) => ({
    allProducts: getAllProducts(state),
    currentCategory: getCurrentCategory(state)
})

export default connect(mapStateToProps, null)(CategoryContainer)
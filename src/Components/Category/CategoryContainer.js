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

    componentDidMount() {
        this.setState({
            currentCategoryProducts: this.props.allProducts
        })
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
        // let productsToSet = []
        // for (let product of allProducts) {
        //     if (product.category === currentCategory) {
        //         productsToSet.push(product)
        //     }
        // }


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
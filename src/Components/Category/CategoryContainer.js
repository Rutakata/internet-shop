import React from "react";
import {connect} from "react-redux";
import {getAllProducts} from "../../Redux/Selectors/categoryPageSelectors";
import Category from "./Category";
import {setProductInfo} from "../../Redux/productReducer";
import {getCurrentCurrency} from "../../Redux/Selectors/currencySelectors";
import {compose} from "redux";
import {withRouter} from "../../HOC/withRouter";
import {client} from "../../apolloClient";
import {getCategoryProducts} from "../../Queries/Category";
import LoadingPage from "../../Common/LoadingPage/LoadingPage";
import {setProducts} from "../../Redux/categoryReducer";


class CategoryContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.getInitialData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.categoryName !== this.props.categoryName) {
            this.getInitialData()
        }
    }

    async getInitialData() {
        const categoryQuery = client.watchQuery({
            query: getCategoryProducts(),
            variables: {
                title: this.props.categoryName
            }
        })

        this.subobj = categoryQuery.subscribe(({data, loading}) => {
            this.setState({
                loading: loading
            })

            if (!loading) {
                this.props.setProducts(data.category.products)
                this.subobj.unsubscribe()
            }
        })
    }

    render() {
        if (this.state.loading) return <LoadingPage />
        return <Category products={this.props.categoryProducts} setProductInfo={this.props.setProductInfo}
                         currentCurrency={this.props.currentCurrency} />
    }
}

let mapStateToProps = (state) => ({
    categoryProducts: getAllProducts(state),
    currentCurrency: getCurrentCurrency(state)
})

export default compose(withRouter, connect(mapStateToProps, {setProductInfo, setProducts}))(CategoryContainer)
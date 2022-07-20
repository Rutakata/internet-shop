import './App.css';
import {GET_ALL_CATEGORY} from "./Queries/Category";
import React from "react";
import {connect} from "react-redux";
import {client} from "./apolloClient";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {setProducts} from "./Redux/categoryReducer";
import CategoryContainer from "./Components/Category/CategoryContainer";
import {Route, Routes, Navigate} from "react-router-dom";
import ProductInfoContainer from "./Components/Product/ProductInfoContainer";
import CartContainer from "./Components/Cart/CartContainer";
import LoadingPage from "./Common/LoadingPage/LoadingPage";


const App = () => {
    return (
        <div className="App">
            <HeaderContainer />
            <Routes>
                <Route path="/category/">
                    <Route path=":categoryName" element={<CategoryContainer />} />
                </Route>
                <Route path="/product/">
                    <Route path=":productId" element={<ProductInfoContainer />} />
                </Route>
                <Route path="/cart" element={<CartContainer />} />
                <Route path="*" element={<Navigate to="/category/all" replace />} />
            </Routes>
        </div>
    );
}

class AppContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.getInitialData()
    }

    componentWillUnmount() {
        this.subobj.unsubscribe()
    }

    async getInitialData() {
        const categoryQuery = client.watchQuery({
            query: GET_ALL_CATEGORY,
        })

        this.subobj = categoryQuery.subscribe(({data, loading}) => {
            this.setState({
                loading: loading
            })

            if (!loading) {
                this.props.setProducts(data.category.products)
            }
        })
    }

    render() {
        if (this.state.loading) return <LoadingPage />
        return <App />
    }
}

export default connect(null, {setProducts})(AppContainer);

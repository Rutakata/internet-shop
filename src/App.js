import './App.css';
import React from "react";
import {connect} from "react-redux";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {setProducts} from "./Redux/categoryReducer";
import CategoryContainer from "./Components/Category/CategoryContainer";
import {Route, Routes, Navigate} from "react-router-dom";
import ProductInfoContainer from "./Components/Product/ProductInfoContainer";
import CartContainer from "./Components/Cart/CartContainer";


const App = () => {
    return (
        <div className="App">
            <HeaderContainer />
            <Routes>
                <Route path="/category/">
                    <Route path=":categoryName" element={<CategoryContainer />} />
                </Route>
                <Route path="/product/:productId" element={<ProductInfoContainer />} />
                <Route path="/cart" element={<CartContainer />} />
                <Route path="*" element={<Navigate to="/category/all" replace />} />
            </Routes>
        </div>
    );
}

class AppContainer extends React.Component {
    render() {
        return <App />
    }
}

export default connect(null, {setProducts})(AppContainer);

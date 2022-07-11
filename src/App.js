import './App.css';
import {GET_ALL_CATEGORY} from "./Queries/Category";
import React from "react";
import {connect} from "react-redux";
import {client} from "./apolloClient";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {setProducts} from "./Redux/categoryReducer";
import CategoryContainer from "./Components/Category/CategoryContainer";


const App = (props) => {
    return (
        <div className="App">
            <HeaderContainer />
            <CategoryContainer />
        </div>
    );
}

class AppContainer extends React.Component {
    componentDidMount() {
        this.getInitialData()
    }

    componentWillUnmount() {
        this.subobj.unsubscribe()
    }

    async getInitialData() {
        const watchQuery2 = client.watchQuery({
            query: GET_ALL_CATEGORY,
        });

        this.subobj = watchQuery2.subscribe(({data, loading}) => {
            if (!loading) {
                this.props.setProducts(data.category.products)
            }
        });
    }

    render() {
        return <App />
    }
}

export default connect(null, {setProducts})(AppContainer);

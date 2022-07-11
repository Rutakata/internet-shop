import './App.css';
import Category from "./Components/Category/Category";
import {GET_ALL_CATEGORY} from "./Queries/Category";
import React from "react";
import {connect} from "react-redux";
import {client} from "./apolloClient";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {setProducts} from "./Redux/categoryReducer";
import {getAllProducts, getClothesProducts, getTechProducts} from "./Redux/Selectors/categoryPageSelectors";


const App = (props) => {
    if (props.currentCategory === "a") {}

    return (
        <div className="App">
            <HeaderContainer changeCurrentCategory={props.changeCurrentCategory}/>
            <Category products={props.allProducts} currentCategory={props.currentCategory}/>
        </div>
    );
}

class AppContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCategory: "all"
        }

        this.changeCurrentCategory = this.changeCurrentCategory.bind(this)
    }

    componentDidMount() {
        this.getInitialData()
    }

    componentWillUnmount() {
        this.subobj.unsubscribe()
    }

    changeCurrentCategory(category) {
        this.setState({
            currentCategory: category
        })

        console.log(`-------Current category: ${category} --------`)
        console.log(this.state)
    }

    async getInitialData() {
        const watchQuery2 = client.watchQuery({
            query: GET_ALL_CATEGORY,
        });

        this.subobj = watchQuery2.subscribe(({data, loading}) => {
            if (!loading) {
                console.log(data.category.products)
                this.props.setProducts(data.category.products)
            }
        });
    }

    render() {
        return <App allProducts={this.props.allProducts} currentCategory={this.state.currentCategory}
                    changeCurrentCategory={this.changeCurrentCategory}/>
    }
}

let mapStateToProps = (state) => ({
    allProducts: getAllProducts(state),
    techProducts: getTechProducts(state),
    clothesProducts: getClothesProducts(state)
})

export default connect(mapStateToProps, {setProducts})(AppContainer);

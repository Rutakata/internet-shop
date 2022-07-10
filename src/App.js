import './App.css';
import Category from "./Components/Category/Category";
import {GET_ALL_CATEGORY} from "./Queries/Category";
import React from "react";
import {connect} from "react-redux";
import {client} from "./apolloClient";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {setProducts} from "./Redux/categoryReducer";


const App = (props) => {
    // let {data, loading} = useQuery(GET_TECH_CATEGORY)
    // let [categoryData, setCategoryData] = useState([])
    //
    // useEffect(() => {
    //     if (!loading) setCategoryData(data.category.products)
    // }, [data])
    //
    // console.log(categoryData)
    //
    // if (loading) return <div>Loading...</div>

    return (
        <div className="App">
            <HeaderContainer />
            <Category products={props.products}/>
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
            console.log(data.category.products)
            this.props.setProducts(data.category.products)

        });
    }

    render() {
        return <App products={this.props.products}/>
    }
}

let mapStateToProps = (state) => ({
    products: state.categoryPage.techProducts
})

export default connect(mapStateToProps, {setProducts})(AppContainer);

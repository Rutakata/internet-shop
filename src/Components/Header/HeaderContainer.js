import React from "react";
import {client} from "../../apolloClient";
import {GET_CATEGORIES} from "../../Queries/Categories";
import {setCategories} from "../../Redux/headerReducer";
import {connect} from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.getInitialData()
    }

    componentWillUnmount() {
        this.subobj.unsubscribe()
    }

    async getInitialData() {
        const watchQuery = client.watchQuery({
            query: GET_CATEGORIES,
        });
        this.subobj = watchQuery.subscribe(({data, loading}) => {
            if (!loading) {
                this.props.setCategories(data.categories)
            }
        });
    }

    render() {
        return <Header categories={this.props.categories} />
    }
}

let mapStateToProps = (state) => ({
    categories: state.header.categories
})

export default connect(mapStateToProps, {setCategories})(HeaderContainer)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ApolloProvider} from "@apollo/client";
import AppContainer from "./App";
import {Provider} from "react-redux";
import store from "./Redux/store";
import {client} from "./apolloClient";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </ApolloProvider>
);

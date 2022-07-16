import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk"
import {headerReducer} from "./headerReducer";
import categoryReducer from "./categoryReducer";
import {productReducer} from "./productReducer";
import {cartReducer} from "./cartReducer";
import {currencyReducer} from "./currencyReducer";


let reducers = combineReducers({
    header: headerReducer,
    categoryPage: categoryReducer,
    productPage: productReducer,
    cartPage: cartReducer,
    currencyPage: currencyReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store
export default store
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk"
import {headerReducer} from "./headerReducer";
import categoryReducer from "./categoryReducer";
import {productReducer} from "./productReducer";


let reducers = combineReducers({
    header: headerReducer,
    categoryPage: categoryReducer,
    productPage: productReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store
export default store
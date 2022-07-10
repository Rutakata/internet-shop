import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk"
import {headerReducer} from "./headerReducer";
import categoryReducer from "./categoryReducer";


let reducers = combineReducers({
    header: headerReducer,
    categoryPage: categoryReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store
export default store
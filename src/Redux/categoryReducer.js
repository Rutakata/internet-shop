const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS"
const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY"


let initialState = {
    allProducts: [],
    currentCategory: "all"
}

let categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ALL_PRODUCTS:
            return {...state, allProducts: action.products}
        case SET_CURRENT_CATEGORY:
            return {...state, currentCategory: action.currentCategory}
        default:
            return state
    }
}

export const setProducts = (products) => {
    return {type: SET_ALL_PRODUCTS, products}
}

export const setCurrentCategory = (currentCategory) => {
    return {type: SET_CURRENT_CATEGORY, currentCategory}
}

export default categoryReducer
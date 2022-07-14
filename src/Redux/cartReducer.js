const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"


let initialState =  {
    cart: []
}

export const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            if (!state.cart.some(product => product.id === action.product.id)) {
                return {...state, cart: [...state.cart, {...action.product, number: 1}]}
            }
            return state
        default:
            return state
    }
}

export const addProductToCart = (product) => {
    return {type: ADD_PRODUCT_TO_CART, product}
}
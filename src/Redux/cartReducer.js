const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"
const CHANGE_PRODUCT_NUMBER = "CHANGE_PRODUCT_NUMBER"


let initialState =  {
    cart: []
}

export const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            if (!state.cart.some(product => product.id === action.product.id)) {
                if (action.product.inStock) {
                    return {...state, cart: [...state.cart, {...action.product, number: 1}]}
                }
            }
            return state
        case CHANGE_PRODUCT_NUMBER:
            let newProductCart = state.cart.map(product => {
                if (product.id === action.id) {
                    product.number = action.number

                    return product
                }

                return product
            })

            return {...state, cart: [...newProductCart]}
        default:
            return state
    }
}

export const addProductToCart = (product) => {
    return {type: ADD_PRODUCT_TO_CART, product}
}

export const changeProductNumber = (id, number) => {
    return {type: CHANGE_PRODUCT_NUMBER, id, number}
}
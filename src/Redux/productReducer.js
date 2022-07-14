const SET_PRODUCT_INFO = "SET_PRODUCT_INFO"


let initialState = {
    productInfo: null
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_INFO:
            return {...state, productInfo: action.product}
        default: {
            return state
        }
    }
}

export const setProductInfo = (product) => {
    return { type: SET_PRODUCT_INFO, product}
}
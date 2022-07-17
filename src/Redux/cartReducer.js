const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"
const CHANGE_PRODUCT_NUMBER = "CHANGE_PRODUCT_NUMBER"
const HANDLE_CART_ATTRIBUTE_CHANGE = "HANDLE_CART_ATTRIBUTE_CHANGE"


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

        case CHANGE_PRODUCT_NUMBER:
            let newProductCart = state.cart.map(product => {
                if (product.id === action.id) {
                    product.number = action.number

                    return product
                }

                return product
            })

            return {...state, cart: [...newProductCart]}

        case HANDLE_CART_ATTRIBUTE_CHANGE:
            let newCart = state.cart.map(product => {
                if (product.id === action.productId) {
                    let newAttributes = product.attributes.map(attribute => {
                        if (attribute.name === action.id) {
                            let newItems = attribute.items.map(item => {
                                if (item.value === action.value) {
                                    return {...item, isActive: true}
                                } else {
                                    return {...item, isActive: false}
                                }
                            })

                            return {...attribute, items: newItems}
                        }else {
                            return attribute
                        }
                    })

                    return {...product, attributes: [...newAttributes]}
                }else {
                    return {...product}
                }
            })

            return {...state, cart: [...newCart]}
        default:
            return state
    }
}

export const addProductToCart = (product) => {
    return { type: ADD_PRODUCT_TO_CART, product }
}

export const changeProductNumber = (id, number) => {
    return { type: CHANGE_PRODUCT_NUMBER, id, number }
}

export const handleCartAttributeChange = (id, value, productId) => {
    return { type: HANDLE_CART_ATTRIBUTE_CHANGE, productId, id, value }
}
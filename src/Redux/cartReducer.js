const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"
const CHANGE_PRODUCT_NUMBER = "CHANGE_PRODUCT_NUMBER"
const HANDLE_CART_ATTRIBUTE_CHANGE = "HANDLE_CART_ATTRIBUTE_CHANGE"
const CONVERT_TOTAL_CURRENCY = "CHANGE_TOTAL_CURRENCY"


let initialState =  {
    cart: [],
    total: 0,
    totalNumber: 0
}

export const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            if (!state.cart.some(product => product.id === action.product.id)) {
                return {...state,
                    cart: [...state.cart, {...action.product, number: 1}],
                    total: state.total + action.product.prices[action.currency].amount,
                    totalNumber: state.totalNumber + 1}
            }
            return state

        case CHANGE_PRODUCT_NUMBER:
            let prevNumber = 0
            let productPrice = 0

            let newProductCart = state.cart.map(product => {
                if (product.id === action.id) {
                    prevNumber = product.number
                    productPrice = product.prices[action.currentCurrency].amount
                    return {...product, number: action.number < 1 ? 1: action.number}
                }

                return product
            })

            console.log(newProductCart)
            let newTotalNumber = newProductCart.reduce((quantity, product) => quantity + product.number, 0)

            return {...state,
                cart: [...newProductCart],
                total: (state.total - (prevNumber*productPrice) +
                    (productPrice*(action.number < 1 ? 1: action.number))).toFixed(2),
                totalNumber: newTotalNumber}

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

        case CONVERT_TOTAL_CURRENCY:
            let newTotal = 0

            state.cart.forEach(product => {
                newTotal += (product.prices[action.currency].amount * product.number)
            })

            return {...state, total: newTotal}

        default:
            return state
    }
}

export const addProductToCart = (product, currency) => {
    return { type: ADD_PRODUCT_TO_CART, product, currency }
}

export const changeProductNumber = (id, number, currentCurrency) => {
    return { type: CHANGE_PRODUCT_NUMBER, id, number, currentCurrency }
}

export const handleCartAttributeChange = (id, value, productId) => {
    return { type: HANDLE_CART_ATTRIBUTE_CHANGE, productId, id, value }
}

export const convertTotal = (currency) => {
    return { type: CONVERT_TOTAL_CURRENCY, currency }
}
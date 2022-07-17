const SET_PRODUCT_INFO = "SET_PRODUCT_INFO"
const HANDLE_ATTRIBUTE_CHANGE = "HANDLE_ATTRIBUTE_CHANGE"


let initialState = {
    productInfo: null
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_INFO:
            return {...state, productInfo: action.product}
        case HANDLE_ATTRIBUTE_CHANGE:
            let newAttributes = state.productInfo.attributes.map(attribute => {
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

            return {...state, productInfo: {...state.productInfo, attributes: [...newAttributes]} }
        default: {
            return state
        }
    }
}

export const setProductInfo = (product) => {
    return { type: SET_PRODUCT_INFO, product}
}

export const handleAttributeChange = (id, value) => {
    return { type: HANDLE_ATTRIBUTE_CHANGE, id, value }
}
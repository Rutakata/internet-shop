const SET_PRODUCT_INFO = "SET_PRODUCT_INFO"
const HANDLE_ATTRIBUTE_CHANGE = "HANDLE_ATTRIBUTE_CHANGE"


let initialState = {
    productInfo: null,
    chosenAttributes: {}
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_INFO:
            return {...state, productInfo: action.product, chosenAttributes: {}}
        case HANDLE_ATTRIBUTE_CHANGE:
            let newAttributes = {...state.chosenAttributes}

            if (Object.keys(newAttributes).length === 0) {
                newAttributes[action.id] = action.value
            }else {
                for (let key in newAttributes) {
                    if (key === action.id) {
                        newAttributes[key] = action.value
                    }else {
                        newAttributes[action.id] = action.value
                    }
                }
            }

            return {...state, chosenAttributes: {...newAttributes}}
        default: {
            return state
        }
    }
}

export const setProductInfo = (product) => {
    return { type: SET_PRODUCT_INFO, product}
}

export const handleAttributeChange = (id, value) => {
    console.log(id, value)
    return { type: HANDLE_ATTRIBUTE_CHANGE, id, value }
}
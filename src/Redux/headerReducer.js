const SET_CATEGORIES = "SET_CATEGORIES"


let initialState = {
    categories: []
}

export const headerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORIES:
            return {...state, categories: action.categories}
        default:
            return state
    }
}

export const setCategories = (categories) => {
    return {type: SET_CATEGORIES, categories}
}
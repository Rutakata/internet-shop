const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS"


let initialState = {
    allProducts: [],
    clothesProducts: [],
    techProducts: []
}

let categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ALL_PRODUCTS:
            let clothes = []
            let tech = []

            // action.products.forEach(product => {
            //     if (product)
            // })
            for (let product of action.products) {
                product.category === "clothes" ? clothes.push(product): tech.push(product)
            }

            return {...state, allProducts: action.products, clothesProducts: clothes, techProducts: tech}
        default:
            return state
    }
}

export const setProducts = (products) => {
    return {type: SET_ALL_PRODUCTS, products}
}

export default categoryReducer
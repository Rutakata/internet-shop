export const getAllProducts = (state) => {
    return state.categoryPage.allProducts
}

export const getCurrentCategory = (state) => {
    console.log("selector", state.categoryPage.currentCategory)
    return state.categoryPage.currentCategory
}
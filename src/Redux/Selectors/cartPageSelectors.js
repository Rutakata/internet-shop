export const getCart = (state) => {
    return state.cartPage.cart
}

export const getCartLength = (state) => {
    return state.cartPage.cart.length
}
export const getTotal = (state) => {
    return state.cartPage.total
}
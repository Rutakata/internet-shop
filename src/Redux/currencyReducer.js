const SET_CURRENCIES = "SET_CURRENCIES"
const SET_CURRENT_CURRENCY = "SET_CURRENT_CURRENCY"


let initialState = {
    currencies: [],
    currentCurrency: 0
}

export const currencyReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_CURRENCIES:
            return {...state, currencies: action.currencies}
        case SET_CURRENT_CURRENCY: {
            return {...state, currentCurrency: action.currentCurrency}
        }
        default:
            return state
    }
}

export const setCurrencies = (currencies) => {
    return { type: SET_CURRENCIES, currencies }
}

export const setCurrentCurrency = (currentCurrency) => {
    return { type: SET_CURRENT_CURRENCY, currentCurrency }
}
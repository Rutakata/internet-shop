import {gql} from "@apollo/client";


export const GET_TECH_CATEGORY = gql`
    query {
        category (
            input: {
                title: "tech" 
            }
        ) {
            products {
                id, name, gallery,
                prices {
                    amount, 
                    currency {
                        symbol
                    }
                }
            }
        }
    }
`

export const GET_CLOTHES_CATEGORY = gql`
    query {
        category (
            input: {
                title: "clothes" 
            }
        ) {
            name,
            products {
                id, name, gallery,
                prices {
                    amount, 
                    currency {
                        symbol
                    }
                }
            }
        }
    }
`

export const GET_ALL_CATEGORY = gql`
    query {
        category (
            input: {
                title: "all" 
            }
        ) {
            name,
            products {
                id, name, gallery, category,
                prices {
                    amount, 
                    currency {
                        symbol
                    }
                }
            }
        }
    }
`
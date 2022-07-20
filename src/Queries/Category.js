import {gql} from "@apollo/client";


export function getCategoryProducts () {
    return gql`
    query ($title: String!){
        category (
            input: {
                title: $title
            }
        ) {
            products {
                id, 
              name, 
              gallery, 
              category, 
              description,
              inStock,
              brand,
              attributes {
                name,
                type,
                items {
                  value,
                  displayValue
                }
              },
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
}



export const GET_ALL_CATEGORY = gql`
    query {
        category (
            input: {
                title: "all" 
            }
        ) {
            products {
                id, 
              name, 
              gallery, 
              category, 
              description,
              inStock,
              brand,
              attributes {
                name,
                type,
                items {
                  value,
                  displayValue
                }
              },
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

export const GET_TECH_CATEGORY = gql`
query {
        category (
            input: {
                title: "tech" 
            }
        ) {
            products {
                id, 
              name, 
              gallery, 
              category, 
              description,
              inStock,
              brand,
              attributes {
                name,
                type,
                items {
                  value,
                  displayValue
                }
              },
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
            products {
                id, 
              name, 
              gallery, 
              category, 
              description,
              inStock,
              brand,
              attributes {
                name,
                type,
                items {
                  value,
                  displayValue
                }
              },
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
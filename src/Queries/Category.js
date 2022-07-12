import {gql} from "@apollo/client";


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
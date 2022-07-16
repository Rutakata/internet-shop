import {gql} from "@apollo/client"

export function getProductData() {
    return gql`
    query ($productId: String!) {
      product(
        id: $productId
      ) {
        id, name, brand, gallery, category, description, 
        inStock, 
        attributes {
            id,
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
    `
}

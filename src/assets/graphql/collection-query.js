class graphQl {
    // all collection queries builder
    
    allCollectionBuilder = (filter = '') => {
        var query = JSON.stringify({
            query: `{
                   
                      products(
                          first: 250
                      ) {
                        pageInfo {
                          hasNextPage,
                          hasPreviousPage
                        }
                        edges {
                          node {
                            availableForSale
                            compareAtPriceRange {
                              maxVariantPrice {
                                amount
                                currencyCode
                              }
                              minVariantPrice {
                                amount
                                currencyCode
                              }
                            }
                            handle
                            id
                            
                            featuredImage{
                                 altText,
                                 transformedSrc
                            }
                            images(first: 5) {
                              edges {
                                node{
                                  altText
                                  transformedSrc
                                }
                              }
                            }
                            priceRange {
                              maxVariantPrice {
                                amount
                                currencyCode
                              }
                              minVariantPrice {
                                amount
                                currencyCode
                              }
                            }
                            productType
                            tags
                            title
                            totalInventory
                            vendor
                            media(first : 10){
                                edges{
                                    node{
                                        alt
                                        mediaContentType
                                        __typename 
                                        ... on MediaImage {
                                            id
                                            
                                        }
                                    }
                                }
                            }
                            metafields(first: 100){
                                edges {
                                    node{
                                        namespace 
                                        key
                                        value
                                    }
                                }
                            }
                            variants(first: 100) {
                              edges {
                                node {
                                   selectedOptions {
                                              name
                                              value
                                            }
                                  availableForSale
                                  compareAtPriceV2 {
                                    amount
                                    currencyCode
                                  }
                                  id
                                  image {
                                    transformedSrc(maxWidth: 500, maxHeight: 400, crop: CENTER)
                                  }
                                  priceV2 {
                                    amount
                                    currencyCode
                                  }
                                  quantityAvailable
                                  title
                                }
                              }
                            }
                          }
                        }
                      }
                  }`,
            variables: {}
          });
        return query;
    }


    queryBuilder = (filter = '') => {
        var query = { query: `{
            collectionByHandle(handle: "totes") {
              description(truncateAt: 300)
              descriptionHtml
              image {
                altText
                originalSrc
                transformedSrc(maxHeight: 1000, maxWidth: 2048, crop: CENTER)
              }
              title
              products(
                  first: 15
              ) {
                pageInfo {
                  hasNextPage,
                  hasPreviousPage
                }
                edges {
                  node {
                    availableForSale
                    compareAtPriceRange {
                      maxVariantPrice {
                        amount
                        currencyCode
                      }
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    handle
                    id
                    
                    featuredImage{
                         altText,
                         transformedSrc
                    }
                    images(first: 5) {
                      edges {
                        node{
                          altText
                          transformedSrc()
                        }
                      }
                    }
                    priceRange {
                      maxVariantPrice {
                        amount
                        currencyCode
                      }
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    productType
                    tags
                    title
                    totalInventory
                    vendor
                    media(first : 10){
                        edges{
                            node{
                                alt
                                mediaContentType
                                __typename 
                                ... on MediaImage {
                                    id
                                    
                                }
                            }
                        }
                    }
                    metafields(first: 100){
                        edges {
                            node{
                                namespace 
                                key
                                value
                            }
                        }
                    }
                    variants(first: 100) {
                      edges {
                        node {
                           selectedOptions {
                                      name
                                      value
                                    }
                          availableForSale
                          compareAtPriceV2 {
                            amount
                            currencyCode
                          }
                          id
                          image {
                            transformedSrc(maxWidth: 500, maxHeight: 400, crop: CENTER)
                          }
                          priceV2 {
                            amount
                            currencyCode
                          }
                          quantityAvailable
                          title
                        }
                      }
                    }
                  }
                }
              }
            }
          }`,
            variables: {}
        };
        return query;
    }

    queryHeaderRequest() {
        const headers = { 
            'Content-Type': 'application/json', 
            'X-Shopify-Storefront-Access-Token': '6770e40ec05cdf6090b9b9fd813aa0c9', 
          }
        return headers;
    }

}

export { graphQl }

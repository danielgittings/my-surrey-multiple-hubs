import { gql } from 'apollo-boost';

export const PAGE_QUERY = gql`
  query Page($path: String!) {
    route(path: $path) {
      ...on EntityCanonicalUrl {
        node: entity {
          ...on NodeArticle {
            title: entityLabel
            body {
              value: processed
            }
            heroImage: fieldHeroImage {
              alt
              url
            }
            paragraphs: fieldComponents {
              paragraph: entity {
                id: entityUuid
                type: entityBundle
                ...on ParagraphImage {
                  image: fieldImage {
                    imageStyleLarge: derivative(style: LARGE) {
                      url
                    }
                    imageStyleBanner: derivative(style: BANNER) {
                      url
                    }
                    alt
                  }
                }
                ...on ParagraphBodyCopy {
                  body: fieldBodyCopy {
                    value: processed
                  }
                }
                ...on ParagraphGrid {
                  gridItems: fieldGridItems {
                    gridItem: entity {
                      ...on ParagraphGridItem {
                        id: entityUuid
                        title: fieldTitle
                        link: fieldLink {
                          title
                          url {
                            path
                          }
                        }
                        image: fieldImage {
                          derivative(style: GRID_THUMBNAIL) {
                            url
                          }
                          alt
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default PAGE_QUERY;
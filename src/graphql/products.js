import { gql } from "@apollo/client";

// Consulta para obtener productos
export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      nodes {
        id
        image {
          link
        }
        name
        slug
        ... on SimpleProduct {
          id
          name
          price
        }
      }
    }
  }
`;
export const GET_PRODUCT_SLUGS = gql`
  query GetProductSlugs {
    products {
      nodes {
        slug
      }
    }
  }
`;

// Query para obtener los detalles de un producto
export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      name
      description
      image {
        link
      }
      ... on SimpleProduct {
        id
        name
         price
        }
    }
  }
`;
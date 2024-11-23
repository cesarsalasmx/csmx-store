import { gql } from "@apollo/client";

// Query para obtener los slugs de los posts
export const GET_POST_SLUGS = gql`
  query GetPostSlugs {
    posts {
      nodes {
        slug
      }
    }
  }
`;

// Query para obtener los detalles de un post
export const GET_POST_DETAILS = gql`
  query GetPostDetails($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

export const GET_ALL_POSTS = gql`
 query GetAllPosts {
  posts {
    nodes {
      id
      title
      slug
      excerpt
      date
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`;
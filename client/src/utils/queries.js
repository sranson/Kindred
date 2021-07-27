import { gql } from "@apollo/client";

// TODO: Create variables that will execute each of the queries set up in the typeDefs

//me query
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      about
      profilePic
      savedCategories {
        title
        type
        image
        description
        wikiUrl
        youtubeUrl
      }
    }
  }
`;

//users query
export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      savedCategories {
        title
        type
        image
        description
        wikiUrl
        youtubeUrl
      }
    }
  }
`;

//matches query
export const QUERY_MATCHES = gql`
query matches {
  users{
    username
    savedCategories{
      type 
      title
    }
  }
}
`;
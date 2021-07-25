import { gql } from "@apollo/client";

// TODO: Create variables that will execute each of the mutations set up in the typeDefs

//login mutation
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//addUser mutation
export const ADD_USER = gql`
  mutation addSingleUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//saveCategory mutation
export const SAVE_CATEGORY = gql`
mutation saveCategory($title: String, $type: String, $description: String, $wikiUrl: String, $youtubeUrl: String, $image: String) {
  saveCategory(title: $title, type: $type, description: $description, wikiUrl: $wikiUrl, youtubeUrl: $youtubeUrl, image: $image) {
    _id
    username
    email
    savedCategories {
      _id
      title
      type
      description
      wikiUrl
      youtubeUrl
    }
  }
}
`;

//removeCategory mutation
const REMOVE_CATEGORY = gql`
  mutation removeCategory($categoryId: ID!) {
    removeCategory(categoryId: $categoryId) {
      _id
      username
      savedCategories {
        categoryId
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

export const SINGLE_UPLOAD_MUTATION = gql`
  mutation singleFileUpload($file: String!) {
    singleFileUpload(file: $file)
  }
`;

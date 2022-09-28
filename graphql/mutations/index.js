import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation ($username: String!, $password: String!) {
    insert_user_one(object: { username: $username, password: $password }) {
      id
      username
      password
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation ADD_FRIENDS($username: String) {
    insert_friends_one(object: { username: $username }) {
      id
      username
    }
  }
`;

export const ONLINE_EVENT = gql`
  mutation ($userId: Int!) {
    update_user_by_pk(
      pk_columns: { id: $userId }
      _set: { last_seen: "now()" }
    ) {
      id
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation insert_message($message: message_insert_input!) {
    insert_message_one(object: $message) {
      id
      timestamp
      text
      username
    }
  }
`;

export const TYPE_INDICATOR = gql`
  mutation ($userId: Int!) {
    update_user_by_pk(
      pk_columns: { id: $userId }
      _set: { last_typed: "now()" }
    ) {
      id
    }
  }
`;

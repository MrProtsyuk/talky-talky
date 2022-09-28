import { gql } from "@apollo/client";

export const GET_FRIENDS = gql`
  query GET_FRIENDS {
    user {
      id
      password
      username
    }
    friends {
      id
      username
    }
  }
`;

export const LOGIN_USER = gql`
  query login($username: String!, $password: String!) {
    user(
      where: { password: { _eq: $password }, username: { _eq: $username } }
    ) {
      id
      username
    }
  }
`;

export const GET_MESSAGES_BY_ID = gql`
  query GET_MESSAGES_BY_ID($receiver_id: Int, $sender_id: Int) {
    message(
      where: { receiver: { _eq: $receiver_id }, sender: { _eq: $sender_id } }
    ) {
      id
      text
      receiver
      sender
    }
  }
`;

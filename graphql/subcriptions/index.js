import { gql } from "@apollo/client";

export const MESSAGE_EVENT = gql`
  subscription {
    message(order_by: { id: desc }, limit: 1) {
      id
      username
      text
      timestamp
    }
  }
`;

export const UI_EVENT = gql`
  subscription ($selfId: Int) {
    user_typing(
      where: { id: { _neq: $selfId } }
      limit: 1
      order_by: { last_typed: desc }
    ) {
      last_typed
      username
    }
  }
`;

export const USER_LIST = gql`
  subscription {
    user_online(order_by: { username: asc }) {
      id
      username
    }
  }
`;

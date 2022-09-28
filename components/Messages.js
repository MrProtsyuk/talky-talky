import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_MESSAGES_BY_ID } from "../graphql/queries";

export default function Messages({ currentuser }) {
  const { data, loading, error } = useQuery(GET_MESSAGES_BY_ID);
  const messages = data?.message ?? [];
  return (
    <>
      <div className="overflow-hidden overflow-scroll flex flex-col">
        {messages.map((message) => {
          return (
            <p
              key={message.id}
              className={
                currentuser && currentuser.id === user.id
                  ? "p-0.5 text-center border rounded-lg bg-slate-500"
                  : "p-0.5 text-center border rounded-lg bg-white"
              }
            >
              {user.message}
            </p>
          );
        })}
      </div>
    </>
  );
}

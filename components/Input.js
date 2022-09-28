import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SEND_MESSAGE } from "../graphql/mutations";

export default function input({ currentuser }) {
  const [message, setMessage] = useState("");
  const [send] = useMutation(SEND_MESSAGE);
  const submitForm = (e) => {
    const sendMessage = send({
      variables: {
        text,
      },
    });
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-96 border rounded-lg px-2"
        />
        <button
          type="text"
          placeholder="Type your message here"
          className="ml-3 border rounded-lg px-3 bg-white text-sky-700 hover:bg-slate-300"
        >
          Send
        </button>
      </form>
    </div>
  );
}

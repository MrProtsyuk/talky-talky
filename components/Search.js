import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_FRIEND } from "../graphql/mutations";

export default function input({ currentuser }) {
  const [addfrind] = useMutation(ADD_FRIEND);
  const [err, setErr] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={(e) => submitForm(e)}>
        <input className="w-96 border rounded-lg px-2" />
        <button
          type="submit"
          className="ml-3 border-indigo-300 rounded-lg px-3 bg-indigo-400 text-white hover:bg-indigo-200"
        >
          Search
        </button>
      </form>
    </div>
  );
}

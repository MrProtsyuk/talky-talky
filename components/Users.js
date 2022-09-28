import { useQuery } from "@apollo/client";
import React from "react";
import { GET_FRIENDS } from "../graphql/queries";

function Users({ setCurrentuser, currentuser }) {
  const { data, loading, error } = useQuery(GET_FRIENDS);
  const users = data?.user ?? [];
  return (
    <div className="border-solid border-indigo-500 rounded-lg border p-7 bg-white overflow-hidden overflow-scroll">
      <ul className="flex flex-col space-y-2">
        {users.map((user) => (
          <li
            className={
              currentuser && currentuser.id === user.id
                ? "p-0.5 text-center border rounded-lg bg-slate-500"
                : "p-0.5 text-center border rounded-lg bg-white"
            }
          >
            <a
              key={user.id}
              onClick={() => setCurrentuser(user)}
              className={
                currentuser && currentuser.id === user.id
                  ? "text-white bg-slate-500"
                  : "text-sky-700"
              }
            >
              {user.username}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

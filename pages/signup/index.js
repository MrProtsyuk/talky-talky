import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../graphql/mutations";

export default function SignUp() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();
  const [signup] = useMutation(ADD_USER);
  const [err, setErr] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    if (!username) {
      setErr("You must enter a username");
      return;
    }

    if (!password) {
      setErr("You must enter a password");
      return;
    }
    const loggedInUser = await signup({
      variables: {
        username,
        password,
      },
    });
    if (loggedInUser.data?.user) {
      window.localStorage.setItem(
        "user",
        JSON.stringify(loggedInUser.data.user[0])
      );
      setUsername("");
      setPassword("");
      router.push({
        pathname: "/chat",
        query: {
          username,
        },
      });
    }
  };

  return (
    <div className="bg-indigo-100 min-h-screen flex flex-col items-center place-content-center block">
      <div className="text-center text-sky-700 bg-white text-8xl shadow-xl mb-10 p-5 rounded-full">
        Sign Up
      </div>
      <form
        className="flex-col border border-black rounded px-8 py-3 bg-slate-200 shadow-xl"
        onSubmit={(e) => submitForm(e)}
      >
        <div className="flex justify-between flex-col">
          <input
            className="mb-3 p-2 border border-black rounded hover:text-indigo-300"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="p-2 mb-3 border border-black rounded hover:text-indigo-300"
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <h2 className="text-xl my-2 text-slate-700">{err}</h2>
          <button
            type="submit"
            className="p-2 mb-3 border bg-white text-sky-700 border-black rounded hover:bg-sky-700 hover:text-white"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

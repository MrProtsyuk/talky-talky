import { useRouter } from "next/router";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { LOGIN_USER } from "../graphql/queries";

export default function Login(props) {
  const router = useRouter();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [signin] = useLazyQuery(LOGIN_USER);
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
    const loggedInUser = await signin({
      variables: {
        username,
        password,
      },
    });
    if (loggedInUser.data?.user.length) {
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
    } else {
      setErr("You dont exist");
    }
  };

  const signUpForm = (e) => {
    router.push({
      pathname: "/signup",
    });
  };

  return (
    <div className="bg-indigo-100 min-h-screen flex flex-col items-center place-content-center block">
      <div className="text-center text-sky-700 bg-white text-8xl shadow-xl mb-10 p-5 rounded-full">
        Talky-Talky 📱
      </div>
      <div>
        <form
          onSubmit={(e) => submitForm(e)}
          className="flex-col border border-black rounded px-8 py-3 bg-slate-200 shadow-xl"
        >
          <div className="flex justify-between flex-col">
            <input
              className="mb-3 p-2 border border-black rounded hover:text-indigo-300"
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="p-2 border border-black rounded hover:text-indigo-300"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h2 className="text-xl my-2 text-slate-700">{err}</h2>
          </div>
          <div className="flex flex-col place-content-center">
            <button
              type="submit"
              className="p-2 my-3 border bg-white text-sky-700 border-black rounded hover:bg-sky-700 hover:text-white"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <button
            onClick={(e) => signUpForm(e)}
            type="submit"
            className="p-2 border text-sky-700 hover:text-white"
          >
            Don't have an account? Sign up!
          </button>
        </div>
      </div>
    </div>
  );
}

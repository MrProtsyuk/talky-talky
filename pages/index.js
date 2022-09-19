import { useState } from "react";
import { useRouter } from "next/router";
import Auth from "../utils/auth";
import { validateEmail } from "../utils/helpers";

export default function Login() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const submitForm = (e) => {
    e.preventDefault();
    const formDate = new FormData();
    let values = {};
    router.push({
      pathname: "/chat",
      query: values,
    });
  };

  const signUpForm = (e) => {
    router.push({
      pathname: "/signup",
    });
  };

  return (
    <div className="bg-indigo-100 min-h-screen flex flex-col items-center place-content-center block">
      <div className="text-center text-sky-700 text-8xl shadow-xl mb-10 p-5 rounded-full">
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
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="p-2 border border-black rounded hover:text-indigo-300"
              type="password"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value)}
            />
            <h2 className="p-2 my-3 text-xl">{message}</h2>
          </div>
          <div className="flex flex-col place-content-center">
            <button
              type="submit"
              className="p-2 mb-3 border bg-white text-sky-700 border-black rounded hover:bg-sky-700 hover:text-white"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <button
            onClickz={(e) => signUpForm(e)}
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

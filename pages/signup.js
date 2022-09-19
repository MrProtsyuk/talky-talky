import { useRouter } from "next/router";

export default function SignUp() {
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
  return (
    <div className="bg-indigo-100 min-h-screen flex flex-col items-center place-content-center block">
      <div className="text-center text-sky-700 text-8xl shadow-xl mb-10 p-5 rounded-full">
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
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="mb-3 p-2 border border-black rounded hover:text-indigo-300"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-2 mb-3 border border-black rounded hover:text-indigo-300"
            type="password"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
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

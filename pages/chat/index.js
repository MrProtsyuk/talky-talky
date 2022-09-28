import Messages from "../../components/messages";
import Users from "../../components/Users";
import Input from "../../components/Input";
import Search from "../../components/Search";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Chat() {
  const [currentuser, setCurrentuser] = useState();
  const router = useRouter();
  const {
    query: { username },
  } = router;

  return (
    <div className="bg-slate-500 min-h-screen flex flex-col items-center place-content-center block">
      <div className="p-2">
        <Search />
      </div>
      <div className="flex border rounded-lg shadow-lg flex-row bg-slate-100 h-96 w-9/12">
        <Users setCurrentuser={setCurrentuser} currentuser={currentuser} />
        <Messages currentuser={currentuser} />
      </div>
      <div className="p-2">
        <Input currentuser={currentuser} />
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import getData from "@/firebase/firestore/getData";

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    if (user == null) router.push("/");
    console.log(user.email);
    getName();
  }, [user]);

  const getName = async () => {
    const { result } = await getData("users", user.email);
    setUsername(result.name);
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      You are logged in as {username}
    </section>
  );
}

export default Page;

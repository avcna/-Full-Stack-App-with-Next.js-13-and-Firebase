"use client";
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import addData from "@/firebase/firestore/addData";

function Page() {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    uid: "",
  });
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result: resultSignup, error: errorSignup } = await signUp(
      data.email,
      data.password,
      data.name
    );
    const { result: resultAddData, error: errorAddData } = await addData(
      "users",
      "user" + data.uid,
      data
    );

    if (errorSignup) {
      return console.log(errorSignup);
    }

    // else successful
    console.log(errorAddData);
    return router.push("/admin");
  };
  return (
    <div className="wrapper min-h-screen flex items-center justify-center">
      <div className="form-wrapper">
        <h1 className="font-medium text-[20px] text-center">Sign Up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="name">
            <p>Name</p>
            <input
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
            />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <br />
          <button
            type="submit"
            className="w-full bg-green-400 rounded"
            onClick={() => setData({ ...data, uid: +new Date() })}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;

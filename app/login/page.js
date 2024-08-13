"use client";
import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <>
      <h1 className="text-3xl text-black hover:font-bold hover:text-blue-300 duration-150 justify-center items-center flex mt-10 animate-bounce">
        LOGIN/SIGNUP
      </h1>
      <div className="container mx-auto justify-center items-center m-0 text-black text-sm w-fit mt-10 p-2 flex flex-col gap-3">
        <button onClick={() => signIn("google")} className="social-login-links flex gap-2 justify-center items-center border p-2 hover:font-bold rounded-lg hover:text-blue-300 duration-500">
          <span>
            <img width={22} src="google.png" alt="Google" />
          </span>
          <span>
            <p>Continue With Google </p>
          </span>
        </button>

        <button onClick={() => signIn("github")} className="social-login-links flex gap-2 justify-center items-center border p-2 hover:font-bold rounded-lg hover:text-blue-300 duration-500">
          <span>
            <img
              width={22}
              src="github.png"
              alt="GitHub"
              className="bg-white p-1 rounded-full"
            />
          </span>
          <span>
            <p>Continue With GitHub</p>
          </span>
        </button>
      </div>
    </>
  );
};

export default Login;

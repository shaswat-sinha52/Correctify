"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <nav className="flex justify-between items-center pt-2 px-2 bg-slate-300 text-xs hover:cursor-pointer">
        <Link href="/">
          <div className="logo font-bold text-black hover:font-bold duration-500 hover:text-blue-300 animate-bounce">
            Correctify
          </div>
        </Link>
        <div className="flex items-center gap-2">
        <p
              className="text-black bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Welcome {session.user.email}
            </p>
          <Link href="/dashboard">
            <button 
              className="text-black bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Dashboard
            </button>
          </Link>
          <button 
            onClick={() => signOut({ callbackUrl: '/' })}
            className="text-black bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Sign out
          </button>
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex justify-between items-center pt-2 px-2 bg-slate-300 text-xs hover:cursor-pointer">
      <Link href="/">
        <div className="logo font-bold text-black hover:font-bold duration-500 hover:text-blue-300 animate-bounce">
          Correctify
        </div>
      </Link>
      <div>
        <Link href="/login">
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

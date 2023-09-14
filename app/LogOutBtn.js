"use client";
import { signOut } from "next-auth/react";

const LogOutBtn = () => {
  return (
    <span
      className="login-span"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </span>
  );
};

export default LogOutBtn;

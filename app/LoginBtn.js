"use client";
import { signIn } from "next-auth/react";

const LoginBtn = () => {
  return (
    <span
      className="login-span"
      onClick={() => {
        signIn();
      }}
    >
      Login
    </span>
  );
};

export default LoginBtn;

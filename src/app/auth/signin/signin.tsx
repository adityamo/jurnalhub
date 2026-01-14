"use client";
import { UserLogin } from "@/interface/user";
import SignInModule, { SignInFormRefType } from "@/modules/auth/signin";
import { signIn } from "next-auth/react";
import React, { useRef, useState } from "react";
import { SubmitHandler } from "react-hook-form";

const SignInPage = () => {
  const ref = useRef<SignInFormRefType>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSigIn: SubmitHandler<UserLogin> = async (values) => {
    setLoading(true);
    setErrMsg("");
    setEmail(values.email);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (res?.error) {
      setErrMsg("Email dan Password tidak sesuai");
    } else if (res?.ok) {
      setErrMsg("");
      setLoading(false);
    }

    setLoading(false);
  };

  console.log(email);

  return (
    <SignInModule
      ref={ref}
      onSubmit={handleSigIn}
      errorMsg={errMsg}
      onLoading={loading}
    />
  );
};

export default SignInPage;

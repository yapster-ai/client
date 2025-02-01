"use client";
import { usePrivy } from "@privy-io/react-auth";
import React from "react";
import WalletConnect from "./wallet-connect";
import Loader from "@/components/loader";

const Auth = ({ children }) => {
  const { authenticated, ready, login, user } = usePrivy();

  console.log(user);

  if (!ready)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );

  if (!authenticated) return <WalletConnect login={login} />;
  return <div>{children}</div>;
};

export default Auth;

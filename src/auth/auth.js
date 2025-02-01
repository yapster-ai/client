"use client";
import { Button } from "@/components/ui/button";
import { usePrivy } from "@privy-io/react-auth";
import { Loader } from "lucide-react";
import React from "react";

const Auth = ({ children }) => {
  const { authenticated, ready, login } = usePrivy();

  if (!ready)
    return (
      <div>
        <Loader />
      </div>
    );

  if (!authenticated)
    return (
      <div>
        <Button onClick={login}>Connect Wallet</Button>
      </div>
    );
  return <div>{children}</div>;
};

export default Auth;

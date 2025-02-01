"use client";
import React from "react";
import { Button } from "./ui/button";
import { usePrivy } from "@privy-io/react-auth";

const Banner = () => {
  const { logout } = usePrivy();
  return (
    <div className="w-full p-4 border-b sticky top-0 z-50 bg-background">
      <div className="flex items-center justify-between mx-auto">
        <p className=" text-">Yapster<span className="text-primary">.ai</span></p>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Banner;

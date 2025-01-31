"use client";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="fixed w-full">
      <div className="mx-auto max-w-7xl">
        <div className="relative px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 p-4">
            <img src="/icons/logo.svg" className="w-16" />
            <p className="-mt-4 text-xl font-medium">yapster.ai</p>
          </div>

          <Button className="rounded-2xl px-6 py-6 text-sm">
            Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

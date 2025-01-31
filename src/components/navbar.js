"use client";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-7xl">
        <div className="relative px-4">
          <Button className="absolute right-4 top-4 rounded-2xl px-6 py-6 text-sm">
            Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

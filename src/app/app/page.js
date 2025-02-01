"use client";
import Banner from "@/components/banner";
import Mindshare from "@/components/mindshare";
import { useWalletContext } from "@/privy/walletContext";
import React from "react";

const Page = () => {
  const {address} = useWalletContext()
  // console.log(address)
  return (
    <div>
      <Banner />
      <Mindshare />
    </div>
  );
};

export default Page;

"use client";
import Actions from "@/components/actions";
import Footer from "@/components/footer";
import Info from "@/components/info";
import Landing from "@/components/landing";
import MainAction from "@/components/main-action";
import Navbar from "@/components/navbar";
import ProtocolDialog from "@/components/protocol-dialouge";
import { TweetGridDemo } from "@/components/tweet-demo";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <ProtocolDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <Landing />
      <div className="hidden md:block">
        <Info />
        <Actions isOpen={isOpen} setIsOpen={setIsOpen} />
        <TweetGridDemo />
        <MainAction isOpen={isOpen} setIsOpen={setIsOpen} />
        <Footer />
      </div>
    </div>
  );
}

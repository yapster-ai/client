'use client'
import Actions from "@/components/actions";
import Info from "@/components/info";
import Landing from "@/components/landing";
import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Landing />
      <div className="hidden md:block">
        <Info />
        <Actions />
        <div className="h-screen"></div>
      </div>
    </div>
  );
}

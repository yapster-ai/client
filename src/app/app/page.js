"use client";

import { useState, useEffect } from "react";
import Banner from "@/components/banner";
import Mindshare from "@/components/mindshare";
import { MintComponent } from "@/components/mint-component";

const Page = () => {
  const [hasMinted, setHasMinted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mintingStatus = localStorage.getItem("mintingStatus");

    setHasMinted(mintingStatus === "completed");
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!hasMinted) {
    return <MintComponent />;
  }

  return (
    <div>
      <Banner />
      <Mindshare />
    </div>
  );
};

export default Page;

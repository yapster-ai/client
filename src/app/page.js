"use client";

import { useState, useEffect } from "react";

const funnyMessages = [
  "Still loading... just like my motivation.",
  "Trying to finish this... but my brain is buffering.",
  "Fixing one bug... creating five new ones. Classic.",
  "Loading... because I thought 'this will be quick.'",
  "Running on hopes, dreams, and bad WiFi.",
  "Optimizing code... aka making it someone else's problem.",
  "Patience is a virtue... but this is pushing it.",
  "Hold up, still duct-taping this together.",
  "Loading... might finish before the sun explodes.",
  "Coding: 1% writing, 99% crying.",
  "Making progress... at the speed of a snail on vacation.",
  "Deploying... more like delaying.",
  "Waiting for this to load? Me too, buddy.",
  "Trying to debug... but the bug is debugging me.",
  "Loading... because 'works on my machine' wasn’t enough.",
  "The code is fine. The computer is just being dramatic.",
  "Currently in a toxic relationship with this progress bar.",
  "Trust me, it’s working. It just looks suspicious.",
  "Loading... because I believed a tutorial would be enough.",
  "Bringing this to life... one Stack Overflow thread at a time.",
];

const Page = () => {
  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    // Get a random message when component mounts
    const message =
      funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    setRandomMessage(message);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="w-full min-h-screen grid place-items-center bg-white dark:bg-gray-900">
      <h1 className="text-2xl leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 dark:text-gray-100 text-center px-4">
        {randomMessage || "Loading..."}{" "}
        {/* Fallback while message is being set */}
      </h1>
    </div>
  );
};

export default Page;

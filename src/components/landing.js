import React from "react";

const Landing = () => {
  return (
    <div>
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col h-screen items-center justify-center pt-20">
        <div className="flex flex-col items-center -mt-20">
          {/* Icon Group */}
          <div className="flex items-center justify-center relative">
            <div className="h-20 w-20 bg-white/10 rounded-full grid place-items-center relative z-10">
              <img src={"/icons/bolt.svg"} className="h-6" />
            </div>
            <div className="h-20 w-20 -translate-x-6 bg-[#EA580B] rounded-full grid place-items-center relative z-20">
              <img src={"/icons/line-dotted.svg"} className="w-8" />
            </div>
            <div className="text-center leading-none -translate-x-4">
              <p className="text-[6rem] font-medium">Verified yaps</p>
            </div>
          </div>

          {/* Main Text */}
          <div className="text-[6rem] leading-none mt-2 text-center">
            <p className="flex items-center justify-center">
              <span>that</span>
              <span className="text-muted-foreground/30 mx-4">helps</span>
              <span>you get</span>
            </p>
          </div>

          <div className="text-[6rem] leading-none mt-2 text-center">
            <p className="flex items-center justify-center gap-4">
              verfied
              <span className="h-20 w-20 bg-[#EA580B] rounded-full grid place-items-center mx-2">
                <img src={"/icons/lines.svg"} className="w-5" />
              </span>
              attention
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Bento Grid Layout */}
      <div className="md:hidden min-h-screen p-4">
        <div className="grid grid-cols-2 gap-4 mt-16">
          {/* Analytics Title Card */}
          <div className="col-span-2 bg-[#EA580B] rounded-3xl p-6 shadow-sm border">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-muted rounded-full grid place-items-center">
                <img src={"/icons/bolt.svg"} className="h-4" />
              </div>
              <h1 className="text-3xl font-medium">Analytics</h1>
            </div>
          </div>

          {/* That helps you Card */}
          <div className="col-span-1 bg-[#FF542C]/10 rounded-3xl p-6">
            <div className="h-full flex flex-col justify-between">
              <img src={"/icons/line-dotted.svg"} className="w-6" />
              <p className="text-xl font-medium mt-4">that helps you</p>
            </div>
          </div>

          {/* Video Preview Card */}
          <div className="col-span-1 bg-black rounded-3xl p-4 relative overflow-hidden">
            <img
              src={"/icons/light.png"}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="relative z-10">
              <div className="w-8 h-8 rounded-full grid place-items-center bg-[#FF542C] drop-shadow-lg">
                <img src="/icons/play.svg" className="w-2.5" />
              </div>
            </div>
          </div>

          {/* Shape the future Card */}
          <div className="col-span-2 bg-[#FFD629]/10 rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium">shape the future</p>
              <div className="h-12 w-12 bg-[#FFD629] rounded-full grid place-items-center">
                <img src={"/icons/lines.svg"} className="w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

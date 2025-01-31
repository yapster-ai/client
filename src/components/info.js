import React from "react";

const Info = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto bg-muted rounded-t-[100px]">
      <div className="pt-32 px-20">
        <div className="grid grid-cols-12">
          <div className="text-5xl font-light col-span-8">
            <p>Your key to strategic</p>
            <p>success through analytics</p>
          </div>

          <div className="w-full flex items-center justify-end pr-12 text-lg text-muted-foreground col-span-4">
            <div>
              <p>Ready for exciting, instateneaous,</p>
              <p>all accessible insights in real time?</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-4">
          <div className="rounded-3xl w-full bg-background col-span-8 p-10">
            <div className="flex">
              <div className="bg-[#FED72C] px-8 py-4 rounded-2xl shadow-[#FED72C]/20 shadow-lg">
                <p>Setting up reports</p>
              </div>
            </div>

            <div className="mt-20">
              <p className="max-w-xs text-3xl">Fast and easy access to analytics</p>
            </div>
          </div>
          <div className="rounded-3xl w-full bg-black col-span-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Info;

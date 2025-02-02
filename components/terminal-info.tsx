import React from "react";
import { RoughNotation } from "react-rough-notation";

export default function TerminalInfo() {
  const text = "---->";
  return (
    <div>
      <RoughNotation type="box" show>
        <div className="flex flex-col mt-10 rounded-sm xs:mt-20">
          <RoughNotation type="box" show>
            <div className="flex gap-2 px-2 py-4 xs:px-5 md:px-10 h-1/6 ">
              <div className="h-5 w-5 border-[#2f9e44] border-2 bg-[#b2f2bb] rounded-full" />
              <div className="h-5 w-5 border-[#1971c2] border-2 bg-[#a5d8ff] rounded-full" />
              <div className="h-5 w-5 border-[#e03131] border-2 bg-[#ffc9c9] rounded-full" />
            </div>
          </RoughNotation>

          <div className="flex flex-col gap-5 px-2 py-5 xs:py-10 xs:px-5 md:px-10 h-5/6 ">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold xs:text-2xl md:text-4xl ">
                {text} about.us
              </h2>
              <p className="text-lg italic xs:text-xl md:text-2xl">
               blah
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h2 className="text-xl font-semibold xs:text-2xl md:text-4xl ">
                {text} we are
              </h2>
              <p className="text-lg italic xs:text-xl md:text-2xl">
                B.Tech Computer Science & Engineering - ACTS
                MIT-A
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold xs:text-2xl md:text-4xl ">
                {text} idk
              </h2>
              <p className="text-lg italic xs:text-xl md:text-2xl">
                blah
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold xs:text-2xl md:text-4xl">
                {text}
              </h2>
            </div>
          </div>
        </div>
      </RoughNotation>
    </div>
  );
}

import React  from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills, education } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skills) => (
            <div key={skills.name} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <div class="mr-3 md:flex-shrink-0">
                  <img class="object-cover h-full w-full lg:h-full w-auto md:h-full w-auto" src={skills.img} alt="Education Logo"></img>
                </div>
                <div className="w-1/4">
                <span className="title-font font-medium text-white">
                  {skills.name}
                </span>
                </div>
                <div className="object-contain w-4/5 h-2 ml-4 text-xs flex rounded bg-green-200">
                    <div style={{ width: skills.level }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

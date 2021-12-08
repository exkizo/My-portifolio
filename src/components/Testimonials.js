import React  from "react";
import { TerminalIcon, AcademicCapIcon } from "@heroicons/react/solid";
import { education } from "../data";

export default function Testimonials() {
  return (
    <section id="education">
      <div className="container px-5 py-10 mx-auto text-center">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Education
        </h1>
        <div className="flex flex-wrap m-4">
          {education.map((education) => (
            <div class="max-w-md mx-auto max-h-full bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex">
                <div class="md:flex-shrink-0">
                  <img class="object-cover h-48 w-full lg:h-full w-auto md:h-full w-auto" src={education.image} alt="Education Logo"></img>
                </div>
                <div class="p-8">
                  <div class="block mt-1 text-lg leading-tight font-medium text-white uppercase hover:underline"><a href={education.website}>{education.name}</a></div>
                    <p class="mt-2 text-white">{education.company}</p>
                    <p class="mt-2 text-gray-500">{education.quote}</p>
                    <div className="relative pt-4 mt-6">
                    <div className="flex mb-2 items-center justify-between">
                    <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                    {education.status}
                    </span>
                    </div>
                    <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-green-600">
                     {education.progress}
                    </span>
                    </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                    <div style={{ width: education.progress }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="h-4 lg:h-0 bg-black"></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

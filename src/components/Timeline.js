import React  from "react";
import { FlagIcon } from "@heroicons/react/solid";

export default function Timeline() {
  return (
    <section id="timeline" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FlagIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Timeline
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Just a roadmap of my education and some things that I did
          </p>
        </div>
        <div class="container">
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-green-50"
          >
            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-gray-800 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">FEP (2016)</h3>
                <p class="leading-tight text-justify">
                  I came to Portugal to study economics on the University of Porto on september 2016. On january 2017 I started to work on the restaurant business as a waiter. It was a wonderful experience, where I met people from all around the world.
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-green-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-700 shadow"
                ></div>
              </div>
            </div>
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-green-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-700 shadow"
                ></div>
              </div>
              <div
                class="bg-gray-800 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">Financial Markets Intern</h3>
                <p class="leading-tight text-justify">
                  In september 2019 I quit my job to do an intership in the financial markets office of a well known private bank in Porto. I've learned from Banco's Carregosa Senior traders how to analyse global markets using Technical and Fundamental Analysis and how to participate on bonds and stocks sales.
                </p>
              </div>
            </div>
            <div class="flex flex-row-reverse md:contents">
              <div
                class="bg-gray-800 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">Graduation</h3>
                <p class="leading-tight text-justify">
                  On march 2021 I got my economics degree. I always felt that I wasnt learning any true hardskill for this new Digital Era that could be an asset for me in the future so I decided that I wanted to learn how to code. So I applied for the 42Lisbon schoolarship. The final phase of the process would be on September 2021 so I got back to the restaurant business to make some money before moving to Lisbon. 
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-green-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-700 shadow"
                ></div>
              </div>
            </div>
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-green-800 pointer-events-none"></div>
                </div>
                <div
                  class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-700 shadow"
                ></div>
              </div>
              <div
                class="bg-gray-800 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 class="font-semibold text-lg mb-1">42 Piscine</h3>
                <p class="leading-tight text-justify">
                42 Piscine is the last phase of the selection process of 42 Schools. It is a 26 days bootcamp that only a few get to the end. I've coded 14h a day that month and got the scholarship. Now I am a 42 Student and I've been learning hardcore coding (C language).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

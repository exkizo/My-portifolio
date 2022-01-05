import React  from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faFacebook, faLinkedin, faDiscord} from '@fortawesome/free-brands-svg-icons'

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-12 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello! I'm João Pedro.
            <h1>I want to become a blockchain developer!</h1>
            <br className="hidden lg:inline-block" /></h1>
          <p className="mb-8 leading-relaxed">
         I got my degree in economics from the University of Porto on march 2021. On april 2021 I applied for a scholarship at 42 Lisbon programming school, a futuristic software engeneering school that relies on a peer-to-peer, gamified and learn-by-doing method. In november I came to Lisbon to start the scholarship and now I am looking for a job as a Junior Software Engineer so I can keep learning to become a blockchain developer. In the meanwhile I've been working on the restaurant business and making some money on the crypto ecosystem.</p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Check time-line
            </a>
          </div>
          <div className="grid gap-12 grid-cols-4 gap-x-1 text-6xl mt-10">
          <button id="linkedin" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl">
          <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-correia-de-oliveira-270a791b6" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
          </button>
          <button id="github" class="bg-white  sticky duration-500 border-2 border-gray-600 fixed  w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-gray-600 hover:text-white text-gray-600 ">
          <a href="https://github.com/jocorrei" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
          </button>
          <button id="facebook" class="bg-white  sticky duration-500 border-2 border-blue-600 fixed  w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 ">
          <a href="https://www.facebook.com/joaopedro.magalhaes.378/" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
          </button>
          </div>
        </div>
        <div className="lg:max-w-lg max-h-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-contain object-center rounded-full"
            alt="hero"
            src="./coding.jpg"
          />
        </div>
      </div>
    </section>
  );
}
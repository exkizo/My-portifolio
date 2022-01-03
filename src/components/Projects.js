import React from "react"
import { CodeIcon } from "@heroicons/react/solid";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { projects } from "../data" 

export default function Projects(){
	return(
		<section id="projects">
			<div className="container px-5 py-10 mx-auto text-center">
				<CodeIcon className="w-10 inline-block mb-4" />
				<h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          		Projects
				</h1>
				<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          	 	 What i've been coding. Hoover the cards to check the application or to see the source codes
				</p>
				<div className="flex items-center justify-center flex-wrap m-4">
					{projects.map((projects) => (
						<div class="m-4 bg-gray-800 rounded-xl shadow-md p-4 w-auto">
							<img className="rounded-t-xl bg-white"src={projects.image}></img>
							<h2 className="bg-gray-100 text-black font-bold">{projects.name}</h2>
							<p className="bg-white text-black">{projects.description}</p>
							<div className="bg-white rounded-b-xl p-4">
								<button id="github" class="bg-white  sticky duration-500 border-2 border-gray-600 fixed  w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-gray-600 hover:text-white text-gray-600 ">
								<a href={projects.github} target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
								</button>
								
							</div>
						</div>
					))}
				</div>
			
			
			
			
			</div>


		</section>

	);
}
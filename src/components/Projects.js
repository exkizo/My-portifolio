import React from "react"
import { CodeIcon } from "@heroicons/react/solid";
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
          	 	 What i've been coding. Click on the links and you will be redirected to the sorce code.
				</p>
				<div className="flex flex-wrap m-4 items-center justify-between">
					{projects.map((project) => (
						<div class="m-4 bg-gray-800 rounded-xl shadow-md p-4 w-80 h-1/4">
							<img className="rounded-t-xl bg-white w-80"src={project.image}></img>
							<h2 className="bg-white text-black font-bold p-2">{project.name}</h2>
							<p className="flex bg-white text-gray-500 items-center justify-center w-100 pt-2 pb-2">{project.description}</p>
							<ul className="text-black bg-white">
								{project.projects.map(project => (
										<li className="hover:opacity-40 p-2"><a href={project.github} target="_blank" rel="noopener noreferrer">{project.name}</a></li>
								))}
							</ul>
							<div className="bg-white rounded-b-xl p-4">
							</div>
						</div>
					))}
				</div>
			</div>
		</section>

	);
}
"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"

const getData = async() => {
    const data = await axios.get("/api/viewProject")
    return data.data;
}

function GetProjects() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setProjects(data);
        };
        fetchData();
    }, []);
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 pt-32 justify-around px-10 w-full justify-evenly">
            {projects.map((project:Project, index) => ( 
                <div key={index} className="flex flex-col bg-[#0a0a0a] py-5 px-5 border-[#2a2a2a] border-[0.5px] rounded-md h-[500px] overflow-auto ">
                    <h2 className="text-red-500 text-3xl font-bold">{project.name}</h2>
                    <div className="flex gap-5 text-[#1a1a1a] ">
                        <a href={`${project.githubLink}`}>Github</a>
                        <a href={`${project.liveDemo}`}>Live Link</a>
                    </div>
                    <h2></h2>
                </div>
            ))}
        </div>
    )
}
interface Project {
    _id:string,
    name: string,
    githubLink: string,
    liveDemo: string,
    description: string,
    techStack: string,
    timeTaken: number
}

export default GetProjects
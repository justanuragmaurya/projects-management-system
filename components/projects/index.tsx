"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
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
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 pt-32 justify-around my-5 px-10 w-full justify-evenly">
            {projects.map((project:Project, index) => ( 
                <Card key={index} className="w-full max-w-md p-6 grid gap-6 bg-[#0a0a0a] text-[#dedede] border-[#1a1a1a]">
                <div className="flex items-center gap-4">
                  <Avatar className="border w-11 h-11">
                    <AvatarImage src="placeholder-user" alt="@username" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-semibold">Your Name</div>
                    <div className="text-sm text-muted-foreground">@yourgithub</div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <GithubIcon className="w-4 h-4" />
                    <Link href={`${project.githubLink}`} className="underline underline-offset-2" prefetch={false}>
                      Github
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GlobeIcon className="w-4 h-4" />
                    <Link href={`${project.liveDemo}`} className="underline underline-offset-2" prefetch={false}>
                      Live Link
                    </Link>
                  </div>
                  <div>
                    {project.name}
                  </div>
                  <div className="text-muted-foreground">
                    {project.description}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <PinIcon className="w-4 h-4" />
                    <span>{project.techStack}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ClockIcon className="w-4 h-4" />
                    <span>Took {project.timeTaken} hours to build this</span>
                  </div>
                </div>
              </Card>
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

function ClockIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
  
  
  function GithubIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    )
  }
  
  
  function GlobeIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    )
  }

function PinIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" x2="12" y1="17" y2="22" />
        <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
      </svg>
    )
  }

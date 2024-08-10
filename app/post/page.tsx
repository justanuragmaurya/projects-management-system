"use client"
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { waveform } from 'ldrs'
waveform.register()

export default function ProjectForm() {
    const router = useRouter()
    const { toast } = useToast()
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        githubLink: '',
        liveDemo: '',
        description: '',
        techStack: '',
        timeTaken: ''
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const successToast = () => {
        toast({
            title: "Success",
            description: "Project posted successfully , you we will be redirected shortly",
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true)
        // console.log(formData);
        const respone = await axios.post("/api/postProject", formData)
        console.log(respone.data)
        respone.data.message == "success" ? successToast() : console.log("")
        setLoading(false)
        router.push("/")
    };

    let url = ""

    return (
        <div className="flex justify-center items-center min-h-screen  text-gray-400">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl p-8 bg-[#121212] rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-white   ">Post Your Project</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Project Name</label>
                    <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-[#1a1a1a] border-gray-800 text-white" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="githubLink" className="block mb-2 text-sm font-medium">GitHub Link</label>
                    <Input type="url" id="githubLink" name="githubLink" value={formData.githubLink} onChange={handleChange} className="bg-[#1a1a1a] border-gray-800 text-white" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="liveDemo" className="block mb-2 text-sm font-medium">Live Demo Link</label>
                    <Input type="url" id="liveDemo" name="liveDemo" value={formData.liveDemo} onChange={handleChange} className="bg-[#1a1a1a] border-gray-800 text-white" />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium">Project Description (100 chars max)</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        maxLength={100}
                        className="w-full bg-[#1a1a1a] border-gray-800 text-white rounded-md p-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="techStack" className="block mb-2 text-sm font-medium">Tech Stack Used</label>
                    <Input type="text" id="techStack" name="techStack" value={formData.techStack} onChange={handleChange} className="bg-[#1a1a1a] border-gray-800 text-white" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="timeTaken" className="block mb-2 text-sm font-medium">Approximate Time Taken (in hrs)</label>
                    <Input type="number" id="timeTaken" name="timeTaken" value={formData.timeTaken} onChange={handleChange} className="bg-[#1a1a1a] border-gray-800 text-white" required />
                </div>

                {loading ? <div className='flex items-center justify-center'> <l-waveform size="40" stroke="5" speed="0.8" color="gray"></l-waveform></div>: 
                <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white p-2 rounded-md">Post Project</button>}
            </form>
        </div>
    );
}
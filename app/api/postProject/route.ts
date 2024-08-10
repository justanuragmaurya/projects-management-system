import { NextRequest } from "next/server";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export async function POST(req: NextRequest) {
    const body = await req.json();

    const url = process.env.NEXT_MONGOOSE_CONNECTION_URL
    await mongoose.connect(`${url}/100xdevs`)
    let Project;
    if (mongoose.models.Projects) {
        Project = mongoose.model('Projects');
    } else {
        const projectData = new mongoose.Schema({
            name: String,
            githubLink: String,
            liveDemo: String,
            description: String,
            techStack: String,
            timeTaken: Number
        });
        Project = mongoose.model("Projects", projectData);
    }

    const data = new Project(body)

    await data.save()

    return Response.json(
        {
            message: `success`
        }
    )
}

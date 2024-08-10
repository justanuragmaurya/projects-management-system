import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

const url = process.env.NEXT_MONGOOSE_CONNECTION_URL;

const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(`${url}/100xdevs`);
  }
};

const ProjectSchema = new mongoose.Schema({
  name: String,
  githubLink: String,
  liveDemo: String,
  description: String,
  techStack: String,
  timeTaken: Number
});

const Project = mongoose.models.Projects || mongoose.model("Projects", ProjectSchema);

export async function GET(request: NextRequest) {
  await connectToDatabase();
  const projects = await Project.find({});
  return NextResponse.json(projects);
}
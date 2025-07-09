import { inngest } from "@/inngest/client";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const userInput = formData.get("userInput") 
  const refImage = formData.get("refImage") as File
  const faceImage = formData.get("faceImage") as File

const user = await currentUser()
  const inputData = {
    userInput: userInput,
    refImage: refImage ? await getFileBufferData(refImage): null,
    faceImage:faceImage ? await getFileBufferData(faceImage): null,
    userEmail: user?.primaryEmailAddress?.emailAddress
  }

  const result = await inngest.send({
    name: "ai/generate-thumbnail",
    data: inputData
  });

  return NextResponse.json({result});
  
}

const getFileBufferData = async (file: File) => {
const bytes = await file.arrayBuffer();
const buffer = Buffer.from(bytes);
return {
  name: file.name,
  type: file.type,
  size: file.size,
  buffer: buffer.toString('base64')

}
}
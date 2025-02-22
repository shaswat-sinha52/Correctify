import connectMongodb from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function POST(request){
    const{topic}=await request.json()
    await connectMongodb()
    await Topic.create({topic})
    return NextResponse.json({message:"Topic created"},{status: 201})

}
export async function GET() {
    await connectMongodb()
    const topics=await Topic.find()
    return NextResponse.json({topics});
}
export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id")
    await connectMongodb()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message:"Topic Deleted"},{status: 200})
}
 
 
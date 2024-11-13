import Form from "@/models/Form"; 
import { connectMongoDB } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(
  req: NextRequest,
) {
 
    const { email, isPresent } = await req.json();
    await connectMongoDB();
    try {
        
      const user = await Form.findOneAndUpdate(
        { email },
        { isPresent },
        { new: true }
      );

      if (!user) {
        return NextResponse.json({ message: "User not found" ,success:false},{status:404});
      }

      NextResponse.json({ message: "Attendance marked successfully",success:true },{status:200});
    } catch (error) {
      console.error("Error updating attendance:", error);
      NextResponse.json({ message: "Error marking attendance",success:false },{status:500});
    }
 
}

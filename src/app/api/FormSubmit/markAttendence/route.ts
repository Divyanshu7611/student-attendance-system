import Form from "@/models/Form";
import { connectMongoDB } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  await connectMongoDB();

  try {
    // Parse the request body as JSON
    const { email } = await req.json();

    const user = await Form.findOneAndUpdate(
      { email },
      { isPresent: true },
      { new: true }
    );

    if (!user) {
      return NextResponse.json({ message: "User not found", success: false }, { status: 404 });
    }

    return NextResponse.json({ message: "Attendance marked successfully", success: true }, { status: 200 });
  } catch (error) {
    console.error("Error updating attendance:", error);
    return NextResponse.json({ message: "Error marking attendance", success: false }, { status: 500 });
  }
}

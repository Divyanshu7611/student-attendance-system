import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/dbConnect";
import Form, { IForm } from "@/models/Form";
import Joi from "joi";

const formValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  rollNo: Joi.string().required(),
  branch: Joi.string().required(),
  year: Joi.string().required(),
  phone: Joi.string().required(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request body
    const { error } = formValidationSchema.validate(body);
    if (error) {
      return NextResponse.json(
        { message: error.details[0].message, success: false },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Check if email or rollno already exists
    const existingUser = await Form.findOne({
      $or: [{ email: body.email }, { rollNo: body.rollNo }]
    });

    if (existingUser) {
      const field = existingUser.email === body.email ? 'email' : 'rollNo';
      return NextResponse.json(
        {
          message: `A user already with this email or rollNo exist.`,
          success: false,
          field
        },
        { status: 409 }
      );
    }

    // Create and save new form
    const newForm: IForm = await Form.create(body);

    return NextResponse.json(
      {
        message: "Form submitted successfully!",
        success: true,
        data: newForm
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { message: "An error occurred while submitting the form.", success: false },
      { status: 500 }
    );
  }
}

// // pages/api/submitForm.ts

// import type { NextApiRequest, NextApiResponse } from "next";
// import {connectMongoDB} from "@/lib/dbConnect";
// import Form, { IForm } from "@/models/Form";
// import Joi from "joi";
// import { NextRequest, NextResponse } from "next/server";

// // Define the validation schema using Joi
// const formValidationSchema = Joi.object({
//   email: Joi.string().email().required(),
//   name: Joi.string().required(),
//   rollNo: Joi.string().required(),
//   universityRoll: Joi.string().required(),
//   branch: Joi.string().required(),
//   year: Joi.string().required(),
//   phone: Joi.string().required(),
// });
// export async function POST(
//   req: NextRequest
// ) {

//     await connectMongoDB();

//     try {
//       // Validate the request body against the schema
//       const { error } = formValidationSchema.validate(req.body);
//       if (error) {
//         console.error("Validation failed:", error.details);
//         return NextResponse.json({ message: error.details[0].message, success: false }, { status: 401 });
//       }

//       // If validation passes, create a new Form document
//       const newForm: IForm = await Form.create(req.body);

//       // Send a success response with the saved form data
//       return NextResponse.json({ message: "Form submitted successfully!",success:true, data: newForm },{status:200});
//     } catch (error) {
//       console.error(error);
//       return NextResponse.json({ message: "An error occurred while submitting the form." },{status:500});
//     }

// }


// import { NextRequest, NextResponse } from "next/server";
// import { connectMongoDB } from "@/lib/dbConnect";
// import Form, { IForm } from "@/models/Form";
// import Joi from "joi";

// // Define the validation schema using Joi
// const formValidationSchema = Joi.object({
//   email: Joi.string().email().required(),
//   name: Joi.string().required(),
//   rollNo: Joi.string().required(),
//   universityRoll: Joi.string().required(),
//   branch: Joi.string().required(),
//   year: Joi.string().required(),
//   phone: Joi.string().required(),
// });

// export async function POST(req: NextRequest) {
//   try {
//     // Parse the request body
//     const body = await req.json();

//     // Validate the request body against the schema
//     const { error } = formValidationSchema.validate(body);
//     if (error) {
//       console.error("Validation failed:", error.details);
//       return NextResponse.json(
//         { message: error.details[0].message, success: false },
//         { status: 400 } // Changed from 401 to 400 for validation errors
//       );
//     }

//     // Connect to MongoDB
//     await connectMongoDB();

//     // Create a new Form document
//     const newForm: IForm = await Form.create(body);

//     // Send a success response
//     return NextResponse.json(
//       {
//         message: "Form submitted successfully!",
//         success: true,
//         data: newForm,
//       },
//       { status: 201 } // Changed to 201 for resource creation
//     );
//   } catch (error) {
//     console.error("Form submission error:", error);
//     return NextResponse.json(
//       { 
//         message: "An error occurred while submitting the form.",
//         success: false 
//       },
//       { status: 500 }
//     );
//   }
// }




import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/dbConnect";
import Form, { IForm } from "@/models/Form";
import Joi from "joi";

const formValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  rollNo: Joi.string().required(),
  universityRoll: Joi.string().required(),
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
        { 
          message: error.details[0].message, 
          success: false 
        },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Check if email or universityRoll already exists
    const existingUser = await Form.findOne({
      $or: [
        { email: body.email },
        { universityRoll: body.universityRoll }
      ]
    });

    if (existingUser) {
      const field = existingUser.email === body.email ? 'email' : 'university roll number';
      return NextResponse.json(
        {
          message: `A user with this ${field} already exists.`,
          success: false,
          field: existingUser.email === body.email ? 'email' : 'universityRoll'
        },
        { status: 409 }
      );
    }

    // Create new form document
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
    // Handle any other MongoDB errors
    if (error instanceof Error) {
      const mongoError = error as any;
      if (mongoError.code === 11000) {
        const field = mongoError.keyPattern?.email ? 'email' : 'university roll number';
        return NextResponse.json(
          {
            message: `A user with this ${field} already exists.`,
            success: false,
            field: mongoError.keyPattern?.email ? 'email' : 'universityRoll'
          },
          { status: 409 }
        );
      }
    }

    console.error("Form submission error:", error);
    return NextResponse.json(
      {
        message: "An error occurred while submitting the form.",
        success: false
      },
      { status: 500 }
    );
  }
}
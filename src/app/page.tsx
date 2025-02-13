"use client";
import { useState } from "react";
import QRCode from "qrcode";
import { Form } from "@/components/formComponent/Form";

interface FormData {
  email: string;
  name: string;
  rollNo: string;

  branch: string;
  year: string;
  phone: string;
  userID:string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  const handleFormSubmit = async (data: FormData) => {
    console.log("Form Data Received in Parent:", data);
    setFormData(data); // Update state with submitted data
    console.log("user ID is",data.userID)
    const qrData = JSON.stringify({
      email: data.email,
      name: data.name,
      rollNo: data.rollNo,
      userID:data.userID
    });

    const qrCode = await QRCode.toDataURL(qrData);
    setQrCodeUrl(qrCode);
  };

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-6 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] min-w-screen bg-gray-900 text-white">
      {formData ? (
        <div className="text-center mx-auto">
          <h2 className="text-2xl">Thank You for Registering!</h2>
          
      
          <p className="mt-5 text-cyan-300">Please Download the QrCode For the Attendence</p>

          {qrCodeUrl && (
            <div className="mt-8">
              <h3 className="text-lg">Your QR Code:</h3>
              <img
                src={qrCodeUrl}
                alt="Generated QR Code"
                className="mx-auto mt-2"
              />
              <a href={qrCodeUrl} download="student_qr_code.png">
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Download QR Code
                </button>
              </a>
              <p className="mt-10">Here are the details you submitted:</p>
              <div className="mx-auto border-2 border-white rounded-xl flex justify-center items-center mt-3">
                <div className="flex flex-col justify-start items-start text-cyan-300">
                <p><span className="text-gray-100">Email:</span> {formData.email}</p>
            <p><span className="text-gray-100">Name:</span> {formData.name}</p>
            <p><span className="text-gray-100">Roll No: </span>{formData.rollNo}</p>
                </div>
           
          </div>
            </div>
          )}
        </div>
      ) : (
        <Form isFormData={true} onFormSubmit={handleFormSubmit} />
      )}
      <a href="https://thedivyanshu.me" className="text-white text-sm opacity-50 hover:scale-105 hover:to-blue-400">Developed By Divyanshu Sharma</a>
    </div>
  );
}

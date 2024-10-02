// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Form } from "@/components/formComponent/Form";

// export default function Home() {
//   // State to track the submitted data
//   const [formData, setFormData] = useState<{
//     email: string;
//     name: string;
//     rollNo: string;
//   } | null>(null);

//   const handleFormSubmit = (data: {
//     email: string;
//     name: string;
//     rollNo: string;
//   }) => {
//     console.log("Form Data Received in Parent:", data);
//     setFormData(data); // Update state with submitted data
//   };

//   return (
//     <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] min-w-screen bg-slate-600 text-white">
//       {formData ? (
//         // Render another component if form data exists
//         <div className="text-center mx-auto">
//           <h2 className="text-2xl">Thank You for Submitting!</h2>
//           <p className="mt-2">Here are the details you submitted:</p>
//           <ul className="list-disc mt-4 text-start">
//             <li>Email: {formData.email}</li>
//             <li>Name: {formData.name}</li>
//             <li>Roll No: {formData.rollNo}</li>
//           </ul>
//           {/* Add any other component you want to render */}
//         </div>
//       ) : (
//         // Show the Form component if no data has been submitted
//         <Form isFormData={true} onFormSubmit={handleFormSubmit} />
//       )}
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import QRCode from "qrcode"; // Import the QRCode library
// import { Form } from "@/components/formComponent/Form";

// export default function Home() {
//   // State to track the submitted data
//   const [formData, setFormData] = useState<{
//     email: string;
//     name: string;
//     rollNo: string;
//   } | null>(null);

//   // State to hold the generated QR code URL
//   const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

//   const handleFormSubmit = async (data: {
//     email: string;
//     name: string;
//     rollNo: string;
//   }) => {
//     console.log("Form Data Received in Parent:", data);
//     setFormData(data); // Update state with submitted data

//     // Prepare data to be encoded in QR code
//     const qrData = JSON.stringify({
//       email: data.email,
//       name: data.name,
//       rollNo: data.rollNo, // Include roll number in the QR code data
//     });

//     // Generate the QR code URL
//     const qrCode = await QRCode.toDataURL(qrData); // Generate QR code
//     setQrCodeUrl(qrCode); // Set the generated QR code URL in state
//   };

//   return (
//     <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] min-w-screen bg-slate-600 text-white">
//       {formData ? (
//         // Render another component if form data exists
//         <div className="text-center mx-auto">
//           <h2 className="text-2xl">Thank You for Submitting!</h2>
//           <p className="mt-2">Here are the details you submitted:</p>
//           <ul className="list-disc mt-4 text-start">
//             <li>Email: {formData.email}</li>
//             <li>Name: {formData.name}</li>
//             <li>Roll No: {formData.rollNo}</li>
//           </ul>

//           {/* Display the QR code */}
//           {qrCodeUrl && (
//             <div className="mt-8">
//               <h3 className="text-lg">Your QR Code:</h3>
//               <img
//                 src={qrCodeUrl}
//                 alt="Generated QR Code"
//                 className="mx-auto mt-2"
//               />
//               <a href={qrCodeUrl} download="student_qr_code.png">
//                 <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   Download QR Code
//                 </button>
//               </a>
//             </div>
//           )}
//         </div>
//       ) : (
//         // Show the Form component if no data has been submitted
//         <Form isFormData={true} onFormSubmit={handleFormSubmit} />
//       )}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import QRCode from "qrcode";
import { Form } from "@/components/formComponent/Form";
import QrCodeScanner from "@/components/scanner/QrCodeScanner"; // Import the QR code scanner

export default function Home() {
  // State to track the submitted data
  const [formData, setFormData] = useState<{
    email: string;
    name: string;
    rollNo: string;
  } | null>(null);

  // State to hold the generated QR code URL
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  // State to control the scanner visibility
  const [isScanning, setIsScanning] = useState(false);

  const handleFormSubmit = async (data: {
    email: string;
    name: string;
    rollNo: string;
  }) => {
    console.log("Form Data Received in Parent:", data);
    setFormData(data); // Update state with submitted data

    // Prepare data to be encoded in QR code
    const qrData = JSON.stringify({
      email: data.email,
      name: data.name,
      rollNo: data.rollNo,
    });

    // Generate the QR code URL
    const qrCode = await QRCode.toDataURL(qrData);
    setQrCodeUrl(qrCode);
  };

  const handleScanData = (data: string | null) => {
    if (data) {
      const scannedData = JSON.parse(data);
      console.log("Scanned Data:", scannedData);
      alert(
        `Student Present!\nEmail: ${scannedData.email}\nName: ${scannedData.name}\nRoll No: ${scannedData.rollNo}`
      );
      setIsScanning(false); // Stop scanning after successful read
    }
  };

  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] min-w-screen bg-slate-600 text-white">
      {formData ? (
        <div className="text-center mx-auto">
          <h2 className="text-2xl">Thank You for Submitting!</h2>
          <p className="mt-2">Here are the details you submitted:</p>
          <ul className="list-disc mt-4 text-start">
            <li>Email: {formData.email}</li>
            <li>Name: {formData.name}</li>
            <li>Roll No: {formData.rollNo}</li>
          </ul>

          {/* Display the QR code */}
          {qrCodeUrl && (
            <div className="mt-8">
              <h3 className="text-lg">Your QR Code:</h3>
              <img
                src={qrCodeUrl}
                alt="Generated QR Code"
                className="mx-auto mt-2"
              />
              <a href={qrCodeUrl} download="student_qr_code.png">
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Download QR Code
                </button>
              </a>
            </div>
          )}
          {/* Button to start scanning */}
          <button
            onClick={() => setIsScanning(true)}
            className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Start Scanning
          </button>
        </div>
      ) : (
        <Form isFormData={true} onFormSubmit={handleFormSubmit} />
      )}

      {/* QR Code Scanner */}
      {isScanning && <QrCodeScanner onScan={handleScanData} />}
    </div>
  );
}

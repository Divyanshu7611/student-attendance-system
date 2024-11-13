// // "use client";
// // import { useState } from "react";
// // import QRCode from "qrcode";
// // import { Form } from "@/components/formComponent/Form";
// // import QrCodeScanner from "@/components/scanner/QrCodeScanner"; // Import the QR code scanner

// // export default function Home() {
// //   // State to track the submitted data
// //   const [formData, setFormData] = useState<{
// //     email: string;
// //     name: string;
// //     rollNo: string;
// //   } | null>(null);

// //   // State to hold the generated QR code URL
// //   const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

// //   // State to control the scanner visibility
// //   const [isScanning, setIsScanning] = useState(false);

// //   const handleFormSubmit = async (data: {
// //     email: string;
// //     name: string;
// //     rollNo: string;
// //   }) => {
// //     console.log("Form Data Received in Parent:", data);
// //     setFormData(data); // Update state with submitted data

// //     // Prepare data to be encoded in QR code
// //     const qrData = JSON.stringify({
// //       email: data.email,
// //       name: data.name,
// //       rollNo: data.rollNo,
// //     });

// //     // Generate the QR code URL
// //     const qrCode = await QRCode.toDataURL(qrData);
// //     setQrCodeUrl(qrCode);
// //   };

// //   const handleScanData = (data: string | null) => {
// //     if (data) {
// //       const scannedData = JSON.parse(data);
// //       console.log("Scanned Data:", scannedData);
// //       alert(
// //         `Student Present!\nEmail: ${scannedData.email}\nName: ${scannedData.name}\nRoll No: ${scannedData.rollNo}`
// //       );
// //       setIsScanning(false); // Stop scanning after successful read
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] min-w-screen bg-slate-600 text-white">
// //       {formData ? (
// //         <div className="text-center mx-auto">
// //           <h2 className="text-2xl">Thank You for Submitting!</h2>
// //           <p className="mt-2">Here are the details you submitted:</p>
// //           <ul className="list-disc mt-4 text-start">
// //             <li>Email: {formData.email}</li>
// //             <li>Name: {formData.name}</li>
// //             <li>Roll No: {formData.rollNo}</li>
// //           </ul>

// //           {/* Display the QR code */}
// //           {qrCodeUrl && (
// //             <div className="mt-8">
// //               <h3 className="text-lg">Your QR Code:</h3>
// //               <img
// //                 src={qrCodeUrl}
// //                 alt="Generated QR Code"
// //                 className="mx-auto mt-2"
// //               />
// //               <a href={qrCodeUrl} download="student_qr_code.png">
// //                 <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
// //                   Download QR Code
// //                 </button>
// //               </a>
// //             </div>
// //           )}
// //           {/* Button to start scanning */}
// //           <button
// //             onClick={() => setIsScanning(true)}
// //             className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
// //           >
// //             Start Scanning
// //           </button>
// //         </div>
// //       ) : (
// //         <Form isFormData={true} onFormSubmit={handleFormSubmit} />
// //       )}

// //       {/* QR Code Scanner */}
// //       {isScanning && <QrCodeScanner onScan={handleScanData} />}
// //     </div>
// //   );
// // }



// "use client";
// import { useState } from "react";
// import QRCode from "qrcode";
// import { Form } from "@/components/formComponent/Form";
// import QrCodeScanner from "@/components/scanner/QrCodeScanner"; // Import the QR code scanner

// export default function Home() {
//   // State to track the submitted data
//   // const [formData, setFormData] = useState<{
//   //   email: string;
//   //   name: string;
//   //   rollNo: string;
//   // } | null>(null);
//   const [formData, setFormData] = useState<any>(null);

//   // const handleFormSubmit = (data: any) => {
//   //   console.log("Form data received in parent:", data);
//   //   setFormData(data); // Do something with the form data (e.g., store, display)
//   // };
//   // State to hold the generated QR code URL
//   const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

//   // State to control the scanner visibility
//   const [isScanning, setIsScanning] = useState(false);

//   const handleFormSubmit = async (data: any) => {
//     console.log("Form Data Received in Parent:", data);
//     setFormData(data); // Update state with submitted data

//     // Prepare data to be encoded in QR code
//     const qrData = JSON.stringify({
//       email: data.email,
//       name: data.name,
//       rollNo: data.rollNo,
//     });

//     // Generate the QR code URL
//     const qrCode = await QRCode.toDataURL(qrData);
//     setQrCodeUrl(qrCode);
//   };

//   const handleScanData = (data: string | null) => {
//     if (data) {
//       const scannedData = JSON.parse(data);
//       console.log("Scanned Data:", scannedData);
//       alert(
//         `Student Present!\nEmail: ${scannedData.email}\nName: ${scannedData.name}\nRoll No: ${scannedData.rollNo}`
//       );
//       setIsScanning(false); // Stop scanning after successful read
//     }
//   };

//   const handleStopScanning = () => {
//     setIsScanning(false); // Function to stop scanning
//   };

//   return (
//     <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] min-w-screen bg-slate-600 text-white">
//       {formData ? (
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
//           {/* Button to start scanning */}
//           <button
//             onClick={() => setIsScanning(true)}
//             className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Start Scanning
//           </button>
//         </div>
//       ) : (
//         <Form isFormData={true} onFormSubmit={handleFormSubmit} />
//       )}

//       {/* QR Code Scanner */}
//       {/* {isScanning && (
//         <>
//           <QrCodeScanner onScan={handleScanData} />
       
//           <button
//             onClick={handleStopScanning}
//             className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Stop Scanning
//           </button>
//         </>
//       )} */}
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import QRCode from "qrcode";
import { Form } from "@/components/formComponent/Form";

interface FormData {
  email: string;
  name: string;
  rollNo: string;
  universityRoll: string;
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
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] min-w-screen bg-gray-900 text-white">
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
    </div>
  );
}

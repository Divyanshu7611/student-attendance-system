// "use client";
// import { useState } from "react";
// import { QrReader } from "react-qr-reader";
// import axios from "axios";

// // Define a custom type for the result
// type QRScanResult = { getText: () => string };

// const ScanPage = () => {
//   const [attendanceMessage, setAttendanceMessage] = useState<string | null>(null);

//   // Helper function to check if a string is JSON
//   const isJsonString = (str: string): boolean => {
//     try {
//       JSON.parse(str);
//       return true;
//     } catch (e) {
//       return false;
//     }
//   };

//   // Handle QR scan results and errors
//   const handleScan = async (result: QRScanResult | null | undefined, error: Error | null | undefined) => {
//     if (result) {
//       const data = result.getText(); // Get the scanned QR data

//       if (isJsonString(data)) {
//         try {
//           const scannedData = JSON.parse(data); // Parse JSON data from QR code

//           // Send PUT request to mark attendance
//           const response = await axios.put<{ message: string }>("/api/SubmitForm/markAttendance", {
//             email: scannedData.email,
//             isPresent: true,
//           });

//           setAttendanceMessage(response.data.message || "Attendance marked successfully!");
//         } catch (error) {
//           console.error("Error marking attendance:", error);
//           setAttendanceMessage("Error marking attendance.");
//         }
//       } else {
//         console.warn("Scanned data is not in JSON format:", data);
//         setAttendanceMessage("Scanned data is not in JSON format. Please scan a valid QR code.");
//       }
//     }

//     if (error) {
//       console.error("QR Code Scan Error:", error);
//       setAttendanceMessage("An error occurred while scanning. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600 text-white p-4">
//       <h1 className="text-2xl mb-4">QR Code Scanner</h1>

//       <div className="flex justify-center items-center h-[75vh]">
//         <QrReader
//           onResult={handleScan} // Pass the handleScan function directly
//           constraints={{ facingMode: "environment" }} // Use the back camera
//           className="w-72 h-w-72 border-2 object-cover"
//           videoStyle={{ objectFit: "cover" }}
//         />
//       </div>

//       {attendanceMessage && (
//         <div className="text-center mt-8">
//           <p>{attendanceMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ScanPage;


// "use client";
// import { useState } from "react";
// import { QrReader } from "react-qr-reader";
// import axios from "axios";

// // Define a custom type for the result
// type QRScanResult = { getText: () => string };

// const ScanPage = () => {
//   const [attendanceMessage, setAttendanceMessage] = useState<string | null>(null);

//   // Helper function to check if a string is JSON
//   const isJsonString = (str: string): boolean => {
//     try {
//       JSON.parse(str);
//       return true;
//     } catch (e) {
//       return false;
//       console.log("Error occured",e)
//     }
//   };



// const handleScan = async (result: QRScanResult | null | undefined, error: Error | null | undefined) => {
//     if (result) {
//       const data = result.getText(); // Get the scanned QR data
//       console.log("Scanned Data:", data); // Log all data from the QR code
  
//       if (isJsonString(data)) {
//         try {
//           const scannedData = JSON.parse(data); // Parse JSON data from QR code
//           console.log("Parsed Data:", scannedData); // Log the parsed data to verify its structure
//           const email = scannedData.email.trim()
  
//           // Send PUT request to mark attendance
//           console.log("consoled email:",email)
//           const response = await axios.put<{ message: string }>("/api/FormSubmit/markAttendence", {
//             email: email
//           });
  
//           setAttendanceMessage(response.data.message || "Attendance marked successfully!");
//         } catch (error) {
//           console.error("Error marking attendance:", error);
//           setAttendanceMessage("Error marking attendance.");
//         }
//       } else {
//         console.warn("Scanned data is not in JSON format:", data);
//         setAttendanceMessage("Scanned data is not in JSON format. Please scan a valid QR code.");
//       }
//     }
  
//     if (error) {
//       console.error("QR Code Scan Error:", error);
//       setAttendanceMessage("An error occurred while scanning. Please try again.");
//     }
//   };
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600 text-white p-4">
//       <h1 className="text-2xl mb-4">QR Code Scanner</h1>

//       <div className="flex justify-center items-center h-[75vh]">
//         <QrReader
//           onResult={handleScan} // Pass the handleScan function directly
//           constraints={{ facingMode: "environment" }} // Use the back camera
//           className="w-72 h-w-72 border-2 object-cover"
//           videoStyle={{ objectFit: "cover" }}
//         />
//       </div>

//       {attendanceMessage && (
//         <div className="text-center mt-8">
//           <p>{attendanceMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ScanPage;




  "use client";
import { useState } from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";

// Define a custom type for the result
type QRScanResult = { getText: () => string };

const ScanPage = () => {
  const [attendanceMessage, setAttendanceMessage] = useState<string | null>(null);
  const [isAttendanceMarked, setIsAttendanceMarked] = useState<boolean>(false); // Track if attendance is marked

  // Helper function to check if a string is JSON
  const isJsonString = (str: string): boolean => {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      console.log("Error occurred", e);
      return false;
    }
  };

  const handleScan = async (
    result: QRScanResult | null | undefined,
    error: Error | null | undefined
  ) => {
    if (result && !isAttendanceMarked) {
      const data = result.getText(); // Get the scanned QR data
      console.log("Scanned Data:", data); // Log all data from the QR code

      if (isJsonString(data)) {
        try {
          const scannedData = JSON.parse(data); // Parse JSON data from QR code
          console.log("Parsed Data:", scannedData); // Log the parsed data to verify its structure
          const email = scannedData.email.trim();

          // Send PUT request to mark attendance
          console.log("consoled email:", email);
          const response = await axios.put<{ message: string }>("/api/FormSubmit/markAttendence", {
            email: email,
          });

          setAttendanceMessage(response.data.message || "Attendance marked successfully!");
          setIsAttendanceMarked(true); // Mark attendance as successful
        } catch (error) {
          console.error("Error marking attendance:", error);
          setAttendanceMessage("Error marking attendance.");
        }
      } else {
        console.warn("Scanned data is not in JSON format:", data);
        setAttendanceMessage("Scanned data is not in JSON format. Please scan a valid QR code.");
      }
    }

    if (error) {
      console.error("QR Code Scan Error:", error);
      setAttendanceMessage("An error occurred while scanning. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600 text-white p-4">
        <img src="/DSCRTU.jpg" className="w-20 h-20"/>
      {/* <h1 className="text-2xl mb-4 font-bold">DSC RTU</h1> */}

      {/* Hide the QR scanner if attendance has been marked */}
      {!isAttendanceMarked && (
        <div className="flex justify-center items-center h-[75vh]">
          <QrReader
            onResult={handleScan} // Pass the handleScan function directly
            constraints={{ facingMode: "environment" }} // Use the back camera
            className="w-72 h-w-72 border-2 object-cover"
            videoStyle={{ objectFit: "cover" }}
          />
        </div>
      )}

      {/* Show the message once attendance is marked */}
      {attendanceMessage && (
        <div className="text-center mt-8">
          <p>{attendanceMessage}</p>
          <button onClick={() => window.location.reload()} className="bg-gray-200 text-gray-800 border-black p-2 px-4 rounded-lg font-semibold hover:scale-105 mt-5">Reset</button>
        </div>
      )}
    </div>
  );
};

export default ScanPage;

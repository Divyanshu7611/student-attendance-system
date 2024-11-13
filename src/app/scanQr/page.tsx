// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const ScanPage = () => {
//   const [scanResult, setScanResult] = useState<string | null>(null);
//   const [attendanceMessage, setAttendanceMessage] = useState<string | null>(null);
//   const [QrReader, setQrReader] = useState<any>(null);
//   const [loadingQrReader, setLoadingQrReader] = useState<boolean>(true);

//   useEffect(() => {
//     const dynamicImport = async () => {
//       try {
//         const { QrReader: QrReaderComponent } = await import("react-qr-reader");
//         setQrReader(() => QrReaderComponent); // Use function syntax to set component
//       } catch (error) {
//         console.error("Failed to load QR reader component:", error);
//       } finally {
//         setLoadingQrReader(false);
//       }
//     };
//     dynamicImport();
//   }, []);

//   const handleScan = async (data: string | null) => {
//     if (data) {
//       setScanResult(data);

//       try {
//         const scannedData = JSON.parse(data); // Parse QR code data

//         // Send PUT request to mark attendance
//         const response = await axios.put<{ message: string }>("/api/SubmitForm/markAttendance", {
//           email: scannedData.email,
//           isPresent: true,
//         });

//         setAttendanceMessage(response.data.message || "Attendance marked successfully!");
//       } catch (error) {
//         console.error("Error marking attendance:", error);
//         setAttendanceMessage("Error marking attendance.");
//       }
//     }
//   };

//   const handleError = (error: Error) => {
//     console.error("QR Code Scan Error:", error);
//     setAttendanceMessage("An error occurred while scanning. Please try again.");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600 text-white p-4">
//       <h1 className="text-2xl mb-4">QR Code Scanner</h1>

//       {loadingQrReader ? (
//         <p>Loading QR scanner...</p>
//       ) : QrReader ? (
        
//         <QrReader
//           delay={300}
//           onError={handleError}
//           onScan={handleScan}
//           style={{ width: "100%", maxWidth: "400px" }}
//         />
//       ) : (
//         <p>Failed to load QR scanner. Please refresh the page or try again later.</p>
//       )}

//       {scanResult && (
//         <div className="text-center mt-8">
//           <p>Scanned Data: {scanResult}</p>
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

// const ScanPage = () => {
//   const [attendanceMessage, setAttendanceMessage] = useState<string | null>(null);

//   // Handle QR scan results and errors
//   const handleScan = async (result: { getText: () => string } | null, error: Error | null) => {
//     if (result) {
//       const data = result.getText(); // Get the scanned QR data

//       try {
//         const scannedData = JSON.parse(data); // Parse QR code data

//         // Send PUT request to mark attendance
//         const response = await axios.put<{ message: string }>("/api/SubmitForm/markAttendance", {
//           email: scannedData.email,
//           isPresent: true,
//         });

//         setAttendanceMessage(response.data.message || "Attendance marked successfully!");
//       } catch (error) {
//         console.error("Error marking attendance:", error);
//         setAttendanceMessage("Error marking attendance.");
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

  // Handle QR scan results and errors
  const handleScan = async (result: QRScanResult | null | undefined, error: Error | null | undefined) => {
    if (result) {
      const data = result.getText(); // Get the scanned QR data

      try {
        const scannedData = JSON.parse(data); // Parse QR code data

        // Send PUT request to mark attendance
        const response = await axios.put<{ message: string }>("/api/SubmitForm/markAttendance", {
          email: scannedData.email,
          isPresent: true,
        });

        setAttendanceMessage(response.data.message || "Attendance marked successfully!");
      } catch (error) {
        console.error("Error marking attendance:", error);
        setAttendanceMessage("Error marking attendance.");
      }
    }

    if (error) {
      console.error("QR Code Scan Error:", error);
      setAttendanceMessage("An error occurred while scanning. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600 text-white p-4">
      <h1 className="text-2xl mb-4">QR Code Scanner</h1>

      <div className="flex justify-center items-center h-[75vh]">
        <QrReader
          onResult={handleScan} // Pass the handleScan function directly
          constraints={{ facingMode: "environment" }} // Use the back camera
          className="w-72 h-w-72 border-2 object-cover"
          videoStyle={{ objectFit: "cover" }}
        />
      </div>

      {attendanceMessage && (
        <div className="text-center mt-8">
          <p>{attendanceMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ScanPage;

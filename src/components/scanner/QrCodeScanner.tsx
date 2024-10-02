"use client";
import React from "react";
import QrScanner from "react-qr-scanner";

interface QrCodeScannerProps {
  onScan: (data: string | null) => void; // Function to handle scanned data
}

const QrCodeScanner: React.FC<QrCodeScannerProps> = ({ onScan }) => {
  const handleScan = (data: string | null) => {
    if (data) {
      onScan(data); // Call the onScan function with the scanned data
    }
  };

  const handleError = (err: Error) => {
    console.error(err); // Handle errors if needed
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-4">QR Code Scanner</h2>
      <QrScanner
        delay={300} // Time between scans in milliseconds
        onError={handleError}
        onScan={handleScan}
        style={{ width: "300px", height: "300px" }} // Adjust size as needed
      />
    </div>
  );
};

export default QrCodeScanner;

import { useState } from "react";
import QRCode from "react-qr-code";
import "./QRCodeGenerator.css";

function QRCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("https://example.com");

  function handleGenerateQrCode() {
    if (input.trim() === "") {
      return;
    }

    setQrCode(input);
    setInput("");
  }

  return (
    <div className="qr-container">
      <h1>QR Code Generator</h1>

      <div className="qr-input-area">
        <input
          type="text"
          placeholder="Enter your value here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleGenerateQrCode}>
          Generate
        </button>
      </div>

      <div className="qr-code">
        <QRCode value={qrCode} size={220} />
      </div>
    </div>
  );
}

export default QRCodeGenerator;
import { useState } from "react";
export default function MessageDetails() {
  let [message, setMessage] = useState({
    id: "ec0eeca0-9307-4ae8-9b02-d2bb92ee5b9b",
    sender: "John Doe <john.doe@example.com>",
    cc: [""],
    bcc: [""],
    recipients: ["Jane Doe <jane.doe@example.com"],
    subject: "This is a test",
    body: "This message is just to say hello.\nSo, 'Hello'.",
    signature: false,
    replyTo: "john.doe@example.com",
    comments: [""],
    wasRead: false,
    wasSent: false,
    markArchive: false,
    markLocation: "",
  });
  setTimeout(() => setMessage({ ...message, wasRead: true }), 3000);
  return (
    <div className="w3-container">
      <div className="w3-card-4">
        <header className="w3-container w3-blue">
          <img src="/default.webp" style={{ width: "5%" }} />
          <span>{message.sender}</span>
          <br />
          to:<span>{message.recipients}</span>
        </header>
        <div className="w3-container">
          <p>{message.body}</p>
        </div>
        <footer className="w3-container w3-blue">
          <h5>Footer</h5>
        </footer>
      </div>
    </div>
  );
}

import { useState } from "react";
export default function MessageDetails() {
  let [message, setMessage] = useState({
    id: "ec0eeca0-9307-4ae8-9b02-d2bb92ee5b9b",
    sender: "\nJohn Doe <john.doe@example.com>\n",
    cc: [""],
    bcc: [""],
    recipients: [
      "\nJane Doe <jane.doe@example.com>\n",
      "\nPaul Doe <paul.doe@example.com>\n",
    ],
    subject: "This is a test",
    body: "This message is just to say hello.\nSo, 'Hello'.",
    signature: false,
    replyTo: "john.doe@example.com",
    comments: [""],
    dateReceived: "6/14/2020",
    wasRead: false,
    wasSent: false,
    markArchive: false,
    markLocation: "",
  });
  const replyToMessage = async () => {};
  setTimeout(() => setMessage({ ...message, wasRead: true }), 3000);
  return (
    <div className="w3-container">
      <div className="w3-card-4">
        <header className="w3-container w3-blue">
          <img src="/default.webp" style={{ width: "5%" }} />
          <span>{message.sender}</span>
          <span style={{ display: "block" }}>
            <br />
            To:<span>{message.recipients}</span>
            <br />
            CC: <span>{message.cc}</span>
            <br />
            Received:
            <span>{` \n${new Date(
              message.dateReceived
            ).toLocaleDateString()}\n`}</span>
            <br />
          </span>
        </header>
        <div className="w3-container">
          <p>{message.body}</p>
        </div>
        <footer className="w3-container w3-blue">
          <button className="w3-btn" onClick={replyToMessage}>
            Reply: ↩️
          </button>
          <button className="w3-btn">Forward: ➡️</button>
        </footer>
      </div>
    </div>
  );
}

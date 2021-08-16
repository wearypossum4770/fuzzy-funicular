import { useRouter } from "next/router";

let messageList = [
  {
    id: "ec0eeca0-9307-4ae8-9b02-d2bb92ee5b9b",
    sender: "",
    cc: [""],
    bcc: [""],
    recipient: [],
    subject: "This is a test",
    body: "This message is just to say hello.\nSo, 'Hello'.",
    signature: false,
    replyTo: "john.doe@example.com",
    comments: [""],
    wasRead: false,
    wasSent: false,
  },
  {
    id: "2f04cb56-c668-4b6a-96c0-787b113bfadc",
    sender: "",
    cc: [""],
    bcc: [""],
    recipient: [],
    subject: "This is a test",
    body: "This message is just to say hello.\nSo, 'Hello'.",
    signature: false,
    replyTo: "john.doe@example.com",
    comments: [""],
    wasRead: false,
    wasSent: false,
  },
];
export default function MessageList() {
  const router = useRouter();
  return (
    <ul class="w3-ul w3-card-4">
      {messageList.map((message) => (
        <div>
          <button value="🗑️">🗑️</button>
          <button value="📂">📂</button>
          <li
            className="w3-bar"
            onClick={() => router.push(`/messages/${message.id}`)}
          >
            <span
              onClick="this.parentElement.style.display='none'"
              className="w3-bar-item w3-button w3-white w3-xlarge w3-right"
            >
              ×
            </span>
            <img
              src="/default.webp"
              className="w3-bar-item w3-circle w3-hide-small"
              style={{ width: "85px" }}
            />
            <div class="w3-bar-item">
              <span class="w3-large">{message.title}</span>
              <br />
              <span>{message.body.slice(0, 50)}</span>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
}

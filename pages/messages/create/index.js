// 🗝️ for outof date encryption key
// 🔑 current encryption key
export default function CreateMessage() {
  return (
    <div className="w3-container w3-half">
      <form>
        <button className="w3-btn" value="💲">
          Send Money: 💲
        </button>
        <button className="w3-btn" value="🔏">
          Encrypt: 🔏
        </button>
        <button className="w3-btn" value="🔓">
          Unencrypted: 🔓
        </button>
        <button className="w3-btn" value="🛡️">
          Protected: 🛡️
        </button>
        <button className="w3-btn" value="📅">
          Calendar: 📅
        </button>
        <button className="w3-btn" value="🖨️">
          Print: 🖨️
        </button>
        <button className="w3-btn" value="🗄️">
          Archive: 🗄️
        </button>
        <button className="w3-btn" value="🎙️">
          Voice Memo: 🎙️
        </button>
        <button className="w3-btn" value="📽️">
          Video Memo: 📽️
        </button>
        <button className="w3-btn" value="📷">
          Add Image: 📷
        </button>
        <div>
          <label htmlFor="to">To: </label>
          <input className="w3-input" name="to" />
        </div>
        <div>
          <label htmlFor="cc">
            CC: <input name="cc" className="w3-input" />
          </label>
        </div>
        <div>
          <label htmlFor="bcc">
            BCC: <input name="bcc" className="w3-input" />
          </label>
        </div>
        <div>
          <label htmlFor="subject">
            Subject: <input name="subject" className="w3-input" />
          </label>
        </div>
        <div>
          <label htmlFor="body">
            Body: <textarea name="body" className="w3-input"></textarea>
          </label>
        </div>
        <div>
          <button type="button" className="w3-btn" value="📎">
            Attachments 📎
          </button>
          <button type="button" className="w3-btn" value="🗑️">
            Discard Draft 🗑️
          </button>
        </div>
      </form>
    </div>
  );
}

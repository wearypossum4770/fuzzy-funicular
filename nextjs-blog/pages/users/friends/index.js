import { useState } from "react";
let friendRequests = [
  {
    id: "ec0eeca0-9307-4ae8-9b02-d2bb92ee5b9b",
    username: "John Doe",
    message: "Do you want to be friends",
  },
  {
    id: "ec0eeca0-9307-4ae8-9b02-d2bb92ee5b9c",
    username: "Jane Doe",
    message: "Do you want to be friends",
  },
];
export default function FriendList() {
  let [friendList, setFriendList] = useState(friendRequests);

  const syncFriendRequest = async () => {};
  const handleFriendRequest = ({ target: { name } }) => {
    setFriendList({
      ...friendList,
      [request.id]: { ...request, requestAccepted: name === "ACCEPT" },
    });
  };
  return friendList.map((request) => (
    <from onSubmit={(e) => e.preventDefault()}>
      <div className="w3-card-4 w3-dark-grey">
        <div className="w3-container w3-center">
          <h3>Friend request</h3>
          <img src="/default.webp" alt="Avatar" style={{ width: "80%" }} />
          <h5>{request.username}</h5>
          <button
            name="ACCEPT"
            onClick={handleFriendRequest}
            className="w3-button w3-green"
          >
            Accept
          </button>
          <button
            name="DENY"
            onClick={handleFriendRequest}
            className="w3-button w3-red"
          >
            Decline
          </button>
        </div>
      </div>
    </from>
  ));
}

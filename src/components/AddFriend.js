import React, { useState } from "react";

function AddFriend({
  setIsAddingFriend,
  setFriendsListSplit,
  friendsListSplit,
}) {
  const initialFriendImage = "https://i.pravatar.cc/150?img=";
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState(initialFriendImage);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function handleCloseAddFriend() {
    setIsAddingFriend(false);
  }

  function handleAddFriend() {
    if (friendName && friendImage) {
      const newFriend = {
        index: friendsListSplit.length,
        name: friendName,
        description: `You and ${friendName} are even`,
        photo: friendImage,
        selected: false,
      };
      setFriendsListSplit((prevFriendsList) => [...prevFriendsList, newFriend]);
      setIsAddingFriend(false);
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <>
      <div className="add-friend-container">
        <div className="add-friend-general">
          <label className="iconFriend" htmlFor="friendName">
            🧛🏻‍♂️ Friend name
          </label>
          <input
            className="add-friend-inputs"
            type="text"
            id="friendName"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
          />
        </div>
        <div className="add-friend-general">
          <label className="iconFriend" htmlFor="friendImage">
            🏞️ Image URL
          </label>
          <input
            className="add-friend-inputs"
            type="text"
            id="friendImage"
            value={friendImage}
            onChange={(e) => setFriendImage(e.target.value)}
          />
        </div>
        <div className="add-friend-general">
          <button className="add-friend-btn" onClick={handleAddFriend}>
            Add
          </button>
        </div>
        {showErrorMessage && (
          <div className="add-friend-error-message">
            NAME and URL can't be left blank!
          </div>
        )}
      </div>
      <div className="add-friend-close-btn">
        <button className="add-friend-btn" onClick={handleCloseAddFriend}>
          Close
        </button>
      </div>
    </>
  );
}

export default AddFriend;

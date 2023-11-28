import React, { useState } from "react";
import Friend from "./Friend";
import AddFriend from "./AddFriend";
import SplitBox from "./SplitBox";

const friendsList = [
  {
    index: 0,
    name: "Clark",
    description: "You and Clark are even",
    photo: "https://i.pravatar.cc/150?img=57",
    selected: false,
    oweOrOwed: 0,
  },
  {
    index: 1,
    name: "Sarah",
    description: "You and Sarah are even",
    photo: "https://i.pravatar.cc/150?img=47",
    selected: false,
    oweOrOwed: 0,
  },
  {
    index: 2,
    name: "John",
    description: "You and John are even",
    photo: "https://i.pravatar.cc/150?img=38",
    selected: false,
    oweOrOwed: 0,
  },
];

function FriendsList() {
  const [isAddingFriend, setIsAddingFriend] = useState(false);
  const [friendsListSplit, setFriendsListSplit] = useState(friendsList);
  const [isSplittingBill, setIsSplittingBill] = useState(false);
  const [selectedFriendIndex, setSelectedFriendIndex] = useState(null);

  function toggleSplitBox() {
    setIsSplittingBill(!isSplittingBill);
  }

  function handleAddFriend() {
    setIsAddingFriend(true);
  }

  const updateFriendDescription = (index, newDescription, oweOrOwed) => {
    setFriendsListSplit((prevFriendsList) => {
      const updatedFriendsList = [...prevFriendsList];
      updatedFriendsList[index] = {
        ...updatedFriendsList[index],
        description: newDescription,
        oweOrOwed: oweOrOwed,
      };
      return updatedFriendsList;
    });
  };

  return (
    <>
      <div className="friend-list-container">
        {friendsListSplit.map((friend) => (
          <Friend
            key={friend.index}
            friend={friend}
            toggleSplitBox={() => {
              toggleSplitBox();
              setSelectedFriendIndex(friend.index);
            }}
            isSplittingBill={isSplittingBill}
            friendsList={friendsListSplit}
            updateFriendDescription={(index, newDescription) => {
              const oweOrOwed = 0;
              updateFriendDescription(index, newDescription, oweOrOwed);
            }}
          />
        ))}
        {!isAddingFriend && (
          <div className="add-friend-btn-container">
            <button className="add-friend-btn" onClick={handleAddFriend}>
              Add friend
            </button>
          </div>
        )}
        {isAddingFriend && (
          <AddFriend
            friendsListSplit={friendsListSplit}
            setIsAddingFriend={setIsAddingFriend}
            setFriendsListSplit={setFriendsListSplit}
          />
        )}
      </div>
      {isSplittingBill && (
        <SplitBox
          friendIndex={selectedFriendIndex}
          friendsList={friendsListSplit}
          updateFriendDescription={updateFriendDescription}
        />
      )}
    </>
  );
}

export default FriendsList;

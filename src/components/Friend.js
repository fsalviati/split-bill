import React from "react";

function Friend({ friend, toggleSplitBox, friendsList }) {
  console.log("Owe? = ", friend.oweOrOwed);
  console.log("? = ", friend.name);

  const handleToggleSelect = () => {
    const hasFriendWithClose = friendsList.some(
      (otherFriend) => otherFriend !== friend && otherFriend.selected,
    );

    if (!hasFriendWithClose) {
      friend.selected = !friend.selected;
      toggleSplitBox();
    }
  };

  const classColour = (oweOrOwed) => {
    let classValue = "friend-description";

    switch (oweOrOwed) {
      case 0:
        classValue += " owe-0";
        break;
      case 1:
        classValue += " owe-1";
        break;
      case 2:
        classValue += " owe-2";
        break;

      default:
        break;
    }

    return classValue;
  };

  return (
    <div className="friend-box">
      <div className="friend-box-container">
        <img src={friend.photo} alt={friend.name} />
        <div className="friend-box-text-container">
          <div className="friend-name">{friend.name}</div>
          <div className={classColour(friend.oweOrOwed)}>
            {friend.description}
          </div>
        </div>
      </div>
      <div>
        {friendsList.some(
          (otherFriend) => otherFriend !== friend && otherFriend.selected,
        ) ? null : (
          <button
            onClick={handleToggleSelect}
            disabled={friendsList.some(
              (otherFriend) => otherFriend !== friend && otherFriend.selected,
            )}
          >
            {friend.selected ? "Close" : "Select"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Friend;

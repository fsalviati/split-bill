import React, { useState } from "react";

function SplitBox({ friendIndex, friendsList, updateFriendDescription }) {
  const friendName = friendsList[friendIndex].name;
  const [billValue, setBillValue] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState();
  const [whoPays, setWhoPays] = useState("You");
  const [oweOrOwed, setOweOrOwed] = useState(0);

  function handleSplitBillCalculation() {
    if (!billValue) return;

    let newDescription = "";
    let amOwing = 0;

    if (myExpense === friendExpense) {
      newDescription = `You and ${friendName} are even`;
    } else if (whoPays === "You") {
      newDescription = `${friendName} owes you $${friendExpense}`;
      amOwing = 1;
    } else if (whoPays !== "You") {
      newDescription = `You owe ${friendName} $${myExpense}`;
      amOwing = 2;
    }

    updateFriendDescription(friendIndex, newDescription, amOwing);
    setOweOrOwed(amOwing);
  }

  function handleBillExpense(bill, myExp) {
    if (bill > 0) {
      setBillValue(bill);
      const newFriendExpense = bill - myExp;
      setFriendExpense(newFriendExpense);
    } else {
      setBillValue(0);
      setMyExpense(0);
      setFriendExpense(0);
    }
  }

  function handleMyExpense(eventTargetValue) {
    const myExpense = Number(eventTargetValue);
    setMyExpense(myExpense);
    handleBillExpense(billValue, myExpense);
  }

  return (
    <div className="split-box-main-container">
      <header>
        Split a bill with{" "}
        <span className="name-friend-picked">{friendName}</span>
      </header>
      <div className="bill-friend-inputs-container">
        <div className="add-bill-general">
          <label className="iconFriend" htmlFor="bill-value">
            &bull; Bill Value
          </label>
          <input
            className="bill-friend-inputs"
            type="text"
            id="bill-value"
            onChange={(e) => handleBillExpense(e.target.value, myExpense)}
          />
        </div>
        <div className="add-bill-general">
          <label className="iconFriend" htmlFor="your-expense">
            &bull; Your expense
          </label>
          <input
            className="bill-friend-inputs"
            type="text"
            id="your-expense"
            onChange={(e) => handleMyExpense(e.target.value)}
          />
        </div>
        <div className="add-bill-general">
          <label className="iconFriend" htmlFor="friend-expense">
            &bull; {friendName}'s expense
          </label>
          <input
            className="bill-friend-inputs"
            type="text"
            id="friend-expense"
            disabled
            value={friendExpense}
          />
        </div>
        <div className="add-bill-general">
          <label className="iconFriend" htmlFor="who-is-paying">
            &bull; Who is paying the bill?
          </label>
          <select
            className="bill-friend-inputs"
            id="who-is-paying"
            onChange={(e) => setWhoPays(e.target.value)}
          >
            <option value="You">You</option>
            <option value={friendName}>{friendName}</option>
          </select>
        </div>
      </div>
      <div className="split-bill-btn-container">
        <button className="split-bill-btn" onClick={handleSplitBillCalculation}>
          Split bill
        </button>
      </div>
    </div>
  );
}

export default SplitBox;

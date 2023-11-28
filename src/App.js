import React, { useState } from "react";
import FriendsList from "./components/FriendsList";
import "./App.css";

function App() {
  const [isSplittingBill, setIsSplittingBill] = useState(false);

  function toggleSplitBox() {
    setIsSplittingBill(!isSplittingBill);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Split a Bill</h1>
        <p>Select below who you want to split the bill with:</p>
      </div>
      <div className="main-container">
        <FriendsList toggleSplitBox={toggleSplitBox} />
      </div>
    </div>
  );
}

export default App;

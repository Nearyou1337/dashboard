import React from "react";
import "./Balance_box.css";
import eth_img from "./../assets/eth_img.png";

const Balance_box = () => {
  return (
    <div className="balanse_user">
      <div className="balance_img">
        <img src={eth_img} alt="eth" />
      </div>
      <div className="balance_eth">
        <h2>Withdraw ETH</h2>
        <p>refil</p>
        <h2>2.039 ETH</h2>
      </div>
    </div>
  );
};

export default Balance_box;

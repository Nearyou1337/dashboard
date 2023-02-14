import React from "react";
import "./Balance.css";
import accaunt from "./../../assets/accaunt.png";
import diagram from "./../../assets/diagram.png";
import { Balance_box } from "../../components";

const Balance = () => {
  return (
    <div className="balance">
      <div className="balance_acc">
        <div className="balance_acc-img">
          <img src={accaunt} alt="accaunt" />
        </div>
        <div className="balance_acc-info">
          <div className="name_acc">
            <h1>0x1B7...jd7Ay</h1>
          </div>
          <div className="acc-info">
            <p>Balance: 503</p>
          </div>
        </div>
      </div>
      <div className="balance-stat">
        <div className="balance-stat-usage">
          <h1>Balance usage</h1>
          <p>Calculated by last activity</p>
        </div>
        <div className="balance-stat-diogram">
          <img src={diagram} alt="diagram" />
        </div>
        <div className="balance-stat-bill">
          <h1>$1 203</h1>
          <p>Available for withdrawal</p>
          <button>Withdraw</button>
        </div>
        <div className="balance-stat-transactions">
          <h1>Latest transactions</h1>
          <Balance_box />
          <Balance_box />
          <Balance_box />
          <Balance_box />
        </div>
      </div>
    </div>
  );
};

export default Balance;

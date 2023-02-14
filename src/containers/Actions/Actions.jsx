import React from "react";
import "./Actions.css";
import { Actions_box } from "../../components";

const Actions = () => {
  return (
    <div className="actions">
      <h1>Quick actions</h1>
      <div className="actions__content">
        <Actions_box
          title="Invest tokens for staking"
          button_title="Withdraw"
        />
        <Actions_box
          title="Invest tokens for staking"
          button_title="Withdraw"
        />
      </div>
    </div>
  );
};

export default Actions;

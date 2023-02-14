import React from "react";
import "./actions_box.css";

const Actions_box = ({ title, button_title }) => {
  return (
    <div className="actions_box">
      <div className="actions_box-content">
        <div className="actions_box-content-title">
          <h1>{title}</h1>
        </div>
        <div className="actions_box-content-button">
          <button>{button_title}</button>
        </div>
      </div>
      <div className="actions_box-banner"></div>
    </div>
  );
};

export default Actions_box;

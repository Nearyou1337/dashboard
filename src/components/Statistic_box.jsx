import React from "react";
import "./statistic_box.css";

const Statistic_box = ({ title, profit, statisti_profit }) => {
  return (
    <div className="statistic_box">
      <div className="statistic_box-title">
        <div />
        <h2>{title}</h2>
      </div>
      <div className="statistic_box-profit">{profit}</div>
      <div className="statistic_box-statistic_profit">
        <button>{statisti_profit}</button>
      </div>
    </div>
  );
};

export default Statistic_box;

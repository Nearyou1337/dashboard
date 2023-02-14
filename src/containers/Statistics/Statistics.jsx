import React from "react";
import "./Statistics.css";
import { Statistic_box } from "./../../components/index";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics__vesting-section">
        <h1>Vesting statistics</h1>
        <div className="statistics__vesting-section_box">
          <Statistic_box
            title="in day"
            profit="+42,03%"
            statisti_profit="15,47%"
          />
          <Statistic_box
            title="Available to withdraw"
            profit="$507.3"
            statisti_profit="200.3$"
          />
          <Statistic_box
            title="Earned funds"
            profit="$1 203"
            statisti_profit="74.73$"
          />
          <Statistic_box
            title="Originally invested"
            profit="$14 027"
            statisti_profit="2030$"
          />
        </div>
      </div>
      <div className="statistics__stacking-section">
        <h1>Stacking statistics</h1>
        <div className="statistics__stacking-section_box">
          <Statistic_box
            title="in day"
            profit="+42,03%"
            statisti_profit="15,47%"
          />
          <Statistic_box
            title="Available to withdraw"
            profit="$507.3"
            statisti_profit="200.3$"
          />
          <Statistic_box
            title="Earned funds"
            profit="$1 203"
            statisti_profit="74.73$"
          />
          <Statistic_box
            title="Originally invested"
            profit="$14 027"
            statisti_profit="2030$"
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;

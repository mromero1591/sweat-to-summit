import React from "react";

export default function TrackerCard(props) {
  return (
    <div className="column">
      <div className="ui card link trackerCard">
        <div>{props.icon}</div>
        <div className="ui center aligned statistic">
          <h3 className="subtitle">{props.type}</h3>
        </div>
      </div>
    </div>
  );
}

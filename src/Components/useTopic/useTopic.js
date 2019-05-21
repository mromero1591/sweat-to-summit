import React, { useState } from "react";

export default function useTopics(props) {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("Filter Activity");
  const displayTopics = props.topics.map(topic => {
    return (
      <div
        onClick={() => {
          props.setTopic(topic);
          setActiveMenuItem(topic);
        }}
        className="item"
        value={topic}
        key={topic}
      >
        {topic}
      </div>
    );
  });

  return (
    <div
      className={`ui floating labeled icon dropdown button ${
        activeMenu ? "active visible" : ""
      }`}
      onClick={() => {
        activeMenu ? setActiveMenu(false) : setActiveMenu(true);
      }}
    >
      <i className="filter icon" />
      <span className="text">{activeMenuItem}</span>
      <div className={`menu transition  ${activeMenu ? "visible" : ""}`}>
        <div className="header">
          <i className="tags icon" />
          Filter Activity
        </div>
        {displayTopics}
      </div>
    </div>
  );
}
